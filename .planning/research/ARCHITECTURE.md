# Architecture Patterns

**Domain:** Enterprise B2B Lead-Generation Website with CMS + Autonomous AI Content
**Researched:** 2026-04-13

---

## Recommended Architecture

### High-Level System Diagram

```
                                    VERCEL (Hosting)
                    +--------------------------------------------------+
                    |                                                    |
                    |   Next.js 16 App Router (SSR + ISR + "use cache") |
                    |                                                    |
                    |  +----------------+  +-------------------------+   |
                    |  |   (public)     |  |       (admin)           |   |
                    |  |   Route Group  |  |       Route Group       |   |
                    |  |                |  |                         |   |
                    |  | - Home         |  | - Dashboard             |   |
                    |  | - About        |  | - Page Editor (Tiptap)  |   |
                    |  | - Solutions x6 |  | - Blog Editor (Tiptap)  |   |
                    |  | - Products     |  | - Media Manager         |   |
                    |  | - Blog         |  | - Lead Pipeline         |   |
                    |  | - Case Studies |  | - Analytics Dashboard   |   |
                    |  | - Partners     |  | - SEO Dashboard         |   |
                    |  | - Contact      |  | - Settings              |   |
                    |  +-------+--------+  +------------+------------+   |
                    |          |                         |               |
                    |  +-------+-------------------------+----------+    |
                    |  |           API Route Handlers               |    |
                    |  |  /api/cron/generate-blog  (AI pipeline)    |    |
                    |  |  /api/leads/webhook       (CRM hooks)      |    |
                    |  |  /api/revalidate          (ISR trigger)    |    |
                    |  +--------------------+-----------------------+    |
                    |                       |                            |
                    |  +--------------------+----------------------+     |
                    |  |          proxy.ts (was middleware.ts)      |     |
                    |  |  - Supabase auth token refresh             |     |
                    |  |  - Admin route protection                  |     |
                    |  |  - CRON_SECRET validation                  |     |
                    |  +--------------------+----------------------+     |
                    |                       |                            |
                    |  Vercel Cron ---------+ (daily AI blog gen)        |
                    +-------------------+--+----------------------------+
                                        |  |
                         +--------------+  +--------------+
                         |                                |
              +----------v----------+          +----------v----------+
              |      SUPABASE       |          |    EXTERNAL APIs    |
              |                     |          |                     |
              | - PostgreSQL (data) |          | - Gemini Flash API  |
              | - Auth (email/pass) |          | - Groq API          |
              | - Storage (images)  |          | - HuggingFace API   |
              | - RLS (security)    |          | - GA4 Data API      |
              | - Realtime (admin)  |          | - Search Console    |
              +---------------------+          | - SMTP (Nodemailer) |
                                               +---------------------+
```

### Component Boundaries

| Component | Responsibility | Communicates With | Rendering |
|-----------|---------------|-------------------|-----------|
| **Public Website** | SSR pages for SEO. Blog, solutions, products, about, contact. | Supabase DB (server-side read only) | Server Components (zero client JS) |
| **Interactive Widgets** | Contact forms, WhatsApp button, logo carousel, scroll animations, exit-intent popup | Supabase DB (insert leads via Server Actions), Motion library | Client Components ('use client') |
| **Admin Panel** (/admin/*) | CMS editing, blog management, lead pipeline, analytics | Supabase DB (full CRUD via RLS), Auth, Storage, TanStack Query | Client Components with auth guard |
| **Blog Generation Engine** | Autonomous AI content with provider fallback | Gemini/Groq/HF APIs, Supabase DB (insert drafts) | API Route (server-only) |
| **SEO Module** | Meta tags, JSON-LD structured data, sitemap, internal linking | Supabase DB (read content), schema-dts | Server Components + build-time |
| **Lead Scoring Engine** | Score leads, trigger notifications | Supabase DB (read/write), Nodemailer | Server Actions + DB triggers |
| **Analytics Hooks** | Fetch GA4/Search Console data for dashboard | googleapis SDK, Supabase (cache) | API Routes (server-only) |

---

## Data Flow

### Public Page Request (SSR)

```
Browser --> Vercel Edge
              |
              v
        Next.js Server Component
              |
              v
        Supabase DB (server-side, anon key + RLS)
        - Read page content (page_sections table)
        - Read blog posts (published only via RLS)
        - Read partners, testimonials
              |
              v
        Render full HTML + JSON-LD structured data
        generateMetadata() for per-page SEO
              |
              v
        Return complete HTML (no client JS for content)
        Interactive widgets hydrate separately
```

### Lead Form Submission

```
Browser Form (React Hook Form + Zod client validation)
              |
              v
        Next.js Server Action
              |
              v
        Zod server validation (same schema as client)
              |
              +---> Supabase DB insert (leads table, anon key + RLS INSERT policy)
              |
              +---> Lead Scoring calculation (service type, source page, form type)
              |           |
              |           v
              |     Update lead.score and lead.status in DB
              |
              +---> Nodemailer: send admin notification email
              |
              v
        Return success response to browser
        Show confirmation + track conversion event (GA4)
```

### AI Blog Generation (Cron)

```
Vercel Cron (daily, configured in vercel.json)
              |
              v
        GET /api/cron/generate-blog
              |
              v
        Verify CRON_SECRET header (reject unauthorized)
              |
              v
        Check blog_generation_queue in Supabase
        Pick next pending topic (or generate new topic)
              |
              v
        AI Provider Fallback Chain:
        1. Gemini 2.5 Flash (10 RPM, 250/day free)
           - Generate outline from topic + company context
           - Generate full draft from outline
           - Generate meta title, description, keywords
        2. If Gemini fails --> Groq Llama 3.3 (30 RPM, 14,400/day free)
        3. If Groq fails --> HuggingFace Mistral 7B (last resort)
              |
              v
        Validate output (Zod schema: must have title, content, meta)
              |
              v
        Insert into blog_posts table:
        - status: 'draft' (review mode) or 'published' (autonomous mode)
        - ai_generated: true
        - ai_provider: 'gemini' | 'groq' | 'huggingface'
              |
              v
        Update blog_generation_queue status
        Trigger on-demand ISR revalidation for /blog
```

### Admin CMS Editing

```
Admin navigates to /admin/*
              |
              v
        proxy.ts intercepts:
        - Call supabase.auth.getUser() (verifies token with Supabase Auth server)
        - If no valid user --> redirect to /admin/login
        - Refresh auth cookies if token near expiry
              |
              v
        Admin Panel loads (Client Components)
        TanStack Query fetches data from Supabase (authenticated, RLS-protected)
              |
              v
        Tiptap Editor renders content (JSON from DB)
        Admin edits content
              |
              v
        Save triggers Server Action:
        - Validate content with Zod
        - Update Supabase DB (page_sections or blog_posts)
        - Upload images to Supabase Storage if needed
        - Trigger on-demand ISR revalidation for affected public page
              |
              v
        TanStack Query cache invalidation
        Public site serves updated content on next request
```

---

## File Structure

```
cinthamani/
  src/
    app/
      (public)/                      # Route group: public website
        layout.tsx                   # Public layout (nav, footer)
        page.tsx                     # Homepage
        about/page.tsx
        solutions/
          broadcast/page.tsx
          apple-it/page.tsx
          post-production/page.tsx
          wedding/page.tsx
          cable-tv/page.tsx
          proprietary/page.tsx
        products/page.tsx
        blog/
          page.tsx                   # Blog listing
          [slug]/page.tsx            # Individual blog post
        case-studies/
          page.tsx
          [slug]/page.tsx
        partners/page.tsx
        contact/page.tsx
      admin/                         # Route group: admin panel
        layout.tsx                   # Admin layout (sidebar, auth guard)
        login/page.tsx               # Admin login
        page.tsx                     # Admin dashboard
        blog/
          page.tsx                   # Blog management list
          new/page.tsx               # New blog post (Tiptap editor)
          [id]/edit/page.tsx         # Edit blog post
        pages/
          page.tsx                   # Page content editor
          [slug]/page.tsx            # Edit specific page sections
        leads/
          page.tsx                   # Lead pipeline view
        media/
          page.tsx                   # Image/file management
        analytics/
          page.tsx                   # Analytics dashboard
        seo/
          page.tsx                   # SEO dashboard + keyword tracking
        settings/
          page.tsx                   # Site settings
      api/
        cron/
          generate-blog/route.ts     # Vercel Cron: AI blog generation
        leads/
          webhook/route.ts           # CRM webhook (HubSpot/Zoho ready)
        revalidate/route.ts          # On-demand ISR trigger
      layout.tsx                     # Root layout (fonts, metadata, GA4)
      not-found.tsx                  # Custom 404
      sitemap.ts                     # Dynamic sitemap
      robots.ts                      # robots.txt
    components/
      ui/                            # Design system primitives
        Button.tsx
        Card.tsx
        Input.tsx
        Select.tsx
        Modal.tsx
        Toast.tsx
      layout/                        # Layout components
        Navigation.tsx               # Glass nav (Apple-style)
        Footer.tsx
        AdminSidebar.tsx
      public/                        # Public website components
        HeroSection.tsx
        SolutionCard.tsx
        PartnerCarousel.tsx
        TestimonialSlider.tsx
        StatCounter.tsx
        LeadCaptureForm.tsx
        WhatsAppWidget.tsx
        ExitIntentPopup.tsx
        JsonLd.tsx                   # Reusable structured data
        BlogCard.tsx
        CaseStudyCard.tsx
      admin/                         # Admin panel components
        BlogEditor.tsx               # Tiptap editor wrapper
        PageSectionEditor.tsx
        LeadPipelineBoard.tsx
        AnalyticsCharts.tsx
        ImageUploader.tsx
        SEOMetaEditor.tsx
        KeywordTracker.tsx
    lib/
      supabase/
        client.ts                    # createBrowserClient()
        server.ts                    # createServerClient() for Server Components
        admin.ts                     # Service role client (server-only, never import in client)
      ai/
        provider.ts                  # Unified AI interface + fallback chain
        gemini.ts                    # Gemini Flash adapter
        groq.ts                      # Groq adapter
        huggingface.ts               # HuggingFace adapter
        blog-generator.ts            # Blog generation orchestrator
        prompts.ts                   # System prompts with Cinthamani context
      seo/
        meta-generator.ts            # Auto meta tag generation
        schema-generator.ts          # JSON-LD generation (schema-dts)
        internal-linker.ts           # Internal link suggestion engine
        keyword-tracker.ts           # Keyword rank tracking
      leads/
        scoring.ts                   # Lead scoring algorithm
        notifications.ts             # Nodemailer email notifications
      analytics/
        ga4.ts                       # GA4 Data API wrapper
        search-console.ts            # Search Console API wrapper
      utils/
        cn.ts                        # clsx + tailwind-merge utility
        dates.ts                     # date-fns helpers
        tiptap-to-html.ts            # Tiptap JSON to HTML renderer
    stores/
      admin-ui.ts                    # Zustand: admin sidebar, modals
      notifications.ts               # Zustand: toast notifications
    types/
      database.ts                    # Supabase auto-generated types
      content.ts                     # CMS content Zod schemas
      leads.ts                       # Lead form Zod schemas
      ai.ts                          # AI provider types
    actions/
      blog.ts                        # Server Actions: blog CRUD
      pages.ts                       # Server Actions: page content CRUD
      leads.ts                       # Server Actions: lead form submission
      media.ts                       # Server Actions: image upload
      seo.ts                         # Server Actions: SEO meta updates
    styles/
      globals.css                    # Tailwind v4 imports + design tokens
  public/
    images/                          # Static images (logos, partner logos)
    fonts/                           # Lexend + Source Sans 3 (Google Fonts fallback)
  supabase/
    migrations/                      # SQL migrations (version-controlled)
      001_initial_schema.sql
      002_rls_policies.sql
      003_seed_content.sql
    config.toml                      # Supabase local config
  proxy.ts                           # Next.js 16 proxy (was middleware.ts)
  next.config.ts                     # Next.js config
  vercel.json                        # Cron job schedule
  package.json
  tsconfig.json
```

---

## Patterns to Follow

### Pattern 1: Server Components by Default, Client Components by Exception

**What:** Every component in the public website is a Server Component unless it needs interactivity. Mark interactive components with `'use client'`.

**When:** Always for public-facing pages. Admin panel is the exception (client-heavy).

**Why:** Server Components ship zero client JS. For an SEO-focused site, this means faster page loads and full content visibility to search engine crawlers. Only forms, animations, and interactive elements need client JS.

### Pattern 2: Unified AI Provider Interface with Fallback Chain

**What:** Abstract AI providers behind a common interface. Fallback is transparent to callers.

**When:** Blog generation, meta description generation, keyword suggestions.

**Why:** Free tier limits change constantly. Provider-agnostic design means swapping or adding providers requires zero changes to business logic.

### Pattern 3: Shared Zod Schemas (Client + Server)

**What:** Define form/content schemas once. Use for React Hook Form validation on client and Server Action validation on server.

**When:** Every form and every CMS content type.

**Why:** Eliminates validation divergence. One source of truth for what data looks like.

### Pattern 4: Tiptap JSON Storage, HTML Rendering

**What:** Store CMS content as Tiptap JSON in PostgreSQL JSONB columns. Render to HTML server-side for public pages.

**When:** All rich text content (blog posts, page sections, testimonials).

**Why:** JSON is queryable (extract headings for TOC, links for sitemap). HTML rendering can change without content migration. Editor format and display format are decoupled.

### Pattern 5: RLS Policies in Migration Files

**What:** Define Row Level Security policies as SQL in version-controlled migration files.

**When:** Every table creation.

**Why:** Security config is code, not manual dashboard clicks. Reproducible, reviewable, and testable.

### Pattern 6: On-Demand ISR for CMS Updates

**What:** When admin edits content, trigger on-demand revalidation of the affected public page.

**When:** Any CMS content update.

**Why:** Public pages are statically cached for performance, but content updates should appear quickly. On-demand ISR revalidates only the changed pages, not the entire site.

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: Using getSession() for Route Protection

**What:** Using `supabase.auth.getSession()` to protect admin routes or sensitive data.

**Why bad:** `getSession()` reads cookies without server verification. Tokens can be expired or spoofed.

**Instead:** Always use `supabase.auth.getUser()` which verifies with Supabase Auth server. Use in proxy.ts for route protection and in Server Actions for data access.

### Anti-Pattern 2: Service Role Key in Client Code

**What:** Using `SUPABASE_SERVICE_ROLE_KEY` in any browser-accessible file.

**Why bad:** Bypasses ALL RLS. Full database access to anyone with DevTools.

**Instead:** Only use service role in server-only files. Client code uses anon key + RLS.

### Anti-Pattern 3: Monolithic Blog Generation Function

**What:** One API route that does everything: topic selection, outline, draft, SEO optimization, publish.

**Why bad:** Vercel function timeout (60s Pro). Any failure loses all progress.

**Instead:** State machine pattern with Supabase as state store. Each step is a separate operation. Cron picks up from where it left off. Queue status: pending -> generating -> reviewing -> published.

### Anti-Pattern 4: Heavy Animations in Server Components

**What:** Importing Motion or using useState/useEffect in Server Components.

**Why bad:** Server Components cannot use client-side features. Causes build errors or breaks SSR.

**Instead:** Create thin `'use client'` wrappers for animated sections. Keep the content in Server Components, wrap with client animation containers.

### Anti-Pattern 5: Storing Images Without Optimization

**What:** Admin uploads 5MB photos directly to Supabase Storage, served as-is.

**Why bad:** Destroys page performance. LCP goes to 8+ seconds. Core Web Vitals fail.

**Instead:** Process on upload (resize, WebP conversion). Serve through `next/image` with sharp optimization. Set upload size limits in CMS.

---

## Scalability Considerations

| Concern | At 100 users/mo | At 10K users/mo | At 1M users/mo |
|---------|-----------------|-----------------|-----------------|
| Database | Supabase Pro sufficient | Add read replicas, connection pooling | Supabase Enterprise |
| Hosting | Vercel Pro sufficient | ISR for all blog/product pages | Vercel Enterprise, edge caching |
| Images | Supabase Storage + next/image | Cloudflare CDN layer | Dedicated image CDN |
| AI generation | Free tier (1 post/day) | Paid tier (2-3 posts/day) | Dedicated AI budget |
| Lead forms | Direct Supabase insert | Add rate limiting, honeypot | Queue-based, bot detection |
| Analytics | GA4 client-side only | GA4 + server-side events | Custom analytics pipeline |

---

## Sources

- [Next.js 16 App Router Architecture](https://nextjs.org/docs/app)
- [Next.js 16 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Supabase Server-Side Auth for Next.js](https://supabase.com/docs/guides/auth/server-side/nextjs)
- [Supabase Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [TanStack Query Advanced SSR](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr)
- [Vercel Cron Jobs](https://vercel.com/docs/cron-jobs)
- [Tiptap Editor](https://tiptap.dev/docs/editor/getting-started)
- [Next.js 16 proxy.ts (middleware rename)](https://medium.com/@securestartkit/next-js-proxy-ts-auth-migration-guide-ff7489ec8735)
