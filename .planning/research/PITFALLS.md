# Domain Pitfalls

**Domain:** Enterprise B2B website with CMS + autonomous AI blog + SEO/GEO automation
**Project:** Cinthamani Website Revamp
**Researched:** 2026-04-13

---

## Critical Pitfalls

Mistakes that cause rewrites, security breaches, or project failure.

---

### Pitfall 1: Vercel Hobby Plan Cannot Be Used for This Project

**What goes wrong:** The Vercel Hobby (free) plan explicitly prohibits commercial use. Cinthamani Computer Pvt. Ltd. is a commercial business. Deploying a lead-generation website for a company on the Hobby plan violates Vercel's Terms of Service. Vercel can suspend the project without warning.

**Why it happens:** Teams assume "free tier" means "production-ready for any project." Vercel's ToS defines commercial usage as "any Deployment used for the purpose of financial gain of anyone involved in any part of the production of the project."

**Consequences:** Project takedown, forced emergency migration, downtime during the move, potential loss of the deployment URL.

**Prevention:**
- Budget for Vercel Pro ($20/month per team member) from day one. This is non-negotiable for a commercial project.
- Alternatively, deploy to Cloudflare Pages (free for commercial use) or a self-managed VPS, but this changes the deployment story significantly.
- If cost is a hard constraint, consider Coolify or Railway as alternatives.

**Detection:** Review Vercel's Fair Use Guidelines before first deployment. If the project generates leads for a business, it is commercial.

**Phase:** Must be resolved in Phase 1 (Infrastructure Setup). Every subsequent phase depends on valid hosting.

---

### Pitfall 2: Supabase Auth Cookie Handling in Next.js App Router Is a Multi-File Setup That Breaks Silently

**What goes wrong:** Supabase auth with Next.js App Router requires creating separate client instances for browser, server components, server actions, route handlers, AND middleware -- each with different cookie handling. Missing any one of these causes sessions to silently fail: users appear logged out in server components, middleware redirect loops occur, or auth tokens expire without refresh.

**Why it happens:** The old `@supabase/auth-helpers` package is deprecated. The new `@supabase/ssr` package requires manual cookie configuration with `getAll()` and `setAll()` methods in each context. Tutorials often show only one context, not all five.

**Consequences:** Admin panel auth breaks intermittently. Users get logged out on navigation. Middleware creates infinite redirect loops. Sessions expire and are not refreshed because middleware was not configured to call `supabase.auth.getUser()`.

**Prevention:**
- Follow the official Supabase "Setting up Server-Side Auth for Next.js" guide exactly. Create a `utils/supabase/` directory with `client.ts`, `server.ts`, and `middleware.ts` utility files.
- The middleware MUST call `supabase.auth.getUser()` to trigger token refresh -- `supabase.auth.getSession()` alone is NOT sufficient and can return stale/spoofed data.
- Never use `supabase.auth.getSession()` to protect pages or user data. Always use `supabase.auth.getUser()` which makes a round-trip to the Supabase Auth server.
- Test auth flow in production-like environment (not just dev) because cookie behavior differs.

**Detection:** Auth works in browser but fails in server components. Users report being randomly logged out. Middleware produces 307 redirect loops.

**Phase:** Phase 1/2 (Auth Setup). Must be correct before building any admin panel features.

---

### Pitfall 3: Supabase RLS Disabled by Default -- Every Table Is Publicly Accessible Until You Fix It

**What goes wrong:** When you create tables in Supabase, Row Level Security (RLS) is disabled by default. Without RLS, anyone with your Supabase anon key (which is public and embedded in your frontend code) can read, insert, update, and delete ALL data in that table. In January 2025, 170+ production apps were found with fully exposed databases because developers forgot to enable RLS.

**Why it happens:** RLS is opt-in, not opt-out. The Supabase dashboard and SQL editor bypass RLS, so developers testing there never notice the problem. The app works perfectly during development.

**Consequences:** Complete data exposure. Anyone can read all CMS content, blog drafts, lead data, admin credentials, form submissions. For a B2B company handling enterprise client data, this is a catastrophic security breach.

**Prevention:**
- Enable RLS on EVERY table immediately after creation: `ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;`
- Create explicit policies for each table and each operation (SELECT, INSERT, UPDATE, DELETE).
- For CMS content tables: public SELECT policy (anyone can read published content), but INSERT/UPDATE/DELETE restricted to authenticated admin users.
- For lead/form submission tables: INSERT allowed for anonymous users (public forms), SELECT/UPDATE/DELETE restricted to admins only.
- NEVER use the service_role key in client-side code. It bypasses RLS entirely.
- Test RLS from the client SDK, not the SQL Editor (which bypasses RLS).
- Add RLS verification to your deployment checklist.

**Detection:** Use the Supabase Dashboard "Auth Policies" view -- any table showing "RLS disabled" is fully exposed. Test by making a direct API call with just the anon key and no auth.

**Phase:** Phase 1 (Database Setup). Every table created in every subsequent phase must follow this pattern.

---

### Pitfall 4: Autonomous AI Blog on Free Tiers Will Fail Within Weeks

**What goes wrong:** The project specifies daily AI blog posting using Gemini free tier with Groq and HuggingFace fallbacks. As of April 2026, Gemini free tier limits have been reduced 50-80% from their 2025 levels. Gemini 2.5 Pro is now paywalled for free users. The remaining free models (Flash/Flash-Lite) allow 250-1000 requests per day, but generating a quality 1500-word blog post requires multiple API calls (outline, draft, revision, SEO optimization, meta generation). Groq's free tier is more generous (14,400 RPD on llama-3.1-8b-instant) but the 8B model produces noticeably lower quality content than larger models.

**Why it happens:** Free tier limits change frequently and always trend downward. Projects designed around specific free tier quotas break when providers reduce limits. Google explicitly repositioned the Gemini free tier as "prototyping and learning, not production" in April 2026.

**Consequences:** Blog generation silently fails. Quality degrades to the point where posts hurt SEO rather than help. Rate limit errors accumulate. The fallback chain (Gemini -> Groq -> HuggingFace) sounds robust but each fallback produces worse output.

**Prevention:**
- Design the blog generation pipeline to be model-agnostic. Use a unified interface that can swap providers.
- Budget for at least Gemini's Pay-as-you-go tier or Groq's Developer tier for production use. Even $5-10/month dramatically changes reliability.
- Implement aggressive caching: cache the system prompt (Groq caches don't count toward limits), batch requests, minimize round-trips.
- Build the system to generate posts 2-3x per week, not daily. Quality > quantity for SEO.
- Implement a queue with retry logic and exponential backoff, not fire-and-forget cron jobs.
- Always have a "draft + human review" mode, even if autonomous mode is the goal. This is your safety net.

**Detection:** Monitor API response codes (429 = rate limited). Track successful vs failed generation attempts. Alert when fallback chain reaches the last provider.

**Phase:** Phase 3/4 (Blog System). Must be architected with provider flexibility from the start.

---

### Pitfall 5: AI-Generated Blog Content Triggers Google's Spam Filters, Not AI Detectors

**What goes wrong:** Google does not penalize content for being AI-generated. It penalizes content that "adds nothing new" -- the concept of "information gain." A daily autonomous blog publishing generic "Top 10 Broadcast Trends" posts will produce exactly the kind of content Google's March 2026 core update filters out: repetitive, no first-hand experience, no unique data, no expert insight. The site's entire blog section gets deindexed or pushed to page 5+.

**Why it happens:** Teams focus on volume ("post every day!") rather than information gain. An AI writing about broadcast technology without access to Cinthamani's proprietary knowledge, client case studies, or industry relationships produces generic content indistinguishable from thousands of other AI blogs.

**Consequences:** Blog posts rank nowhere. Worse, a pattern of low-quality automated content can negatively affect the entire domain's rankings (including service pages and the homepage). This directly undermines the project's core purpose: digital visibility.

**Prevention:**
- Feed the AI Cinthamani-specific context: real case studies, product specifications (TransLogger, PlayCast Pro, etc.), actual client problems solved, industry events attended.
- Every post must pass the "information gain" test: does this contain something a reader cannot find in the top 5 Google results for this keyword?
- Implement mandatory human review for at least the first 3 months. Build the review UI before building autonomous mode.
- Add E-E-A-T signals: author bios linking to real Cinthamani team members, publication dates, sources cited.
- Limit to 2-3 posts per week. Use the remaining "daily" budget for updating/improving existing posts (content refresh is an SEO best practice).
- Include original data: "In our 40 years servicing 35 broadcast partners, we've observed..." -- this is information gain that AI alone cannot produce.

**Detection:** Monitor Google Search Console for indexing status of blog posts. If posts are "Crawled - currently not indexed," content quality is the issue. Track impressions per post -- trending toward zero means the content is being filtered.

**Phase:** Phase 3/4 (Blog System). Content strategy must be defined before any code is written.

---

## Moderate Pitfalls

---

### Pitfall 6: Rich Text Editor Choice Creates Long-Term Lock-In

**What goes wrong:** Building a CMS with the wrong rich text editor creates a maintenance nightmare. Some editors (Quill, Draft.js) are effectively abandoned. Others (Slate) have steep learning curves that slow development to a crawl. The editor's content format (JSON schema, HTML, markdown) becomes your database schema -- switching later requires migrating all existing content.

**Why it happens:** Teams pick the first editor that shows a nice demo without evaluating maintenance status, content serialization format, or extension ecosystem.

**Prevention:**
- Use Tiptap (built on ProseMirror). It is the consensus recommendation for React CMS projects in 2025-2026. It has active maintenance, good documentation, clean extension API, and stores content as a well-documented JSON schema that can be serialized to HTML.
- Do NOT use Draft.js (abandoned by Meta), Quill 1.x (maintenance mode), or raw Slate (too low-level for a CMS).
- Store content in Tiptap's JSON format in Supabase, with an HTML rendering layer for the public site. This decouples editing from display.
- Budget for image upload integration -- rich text + image management is where most CMS projects underestimate complexity.

**Detection:** If the editor hasn't had a commit in 6+ months, it's a risk. If you're writing custom selection/cursor handling code, you've picked too low-level a tool.

**Phase:** Phase 2 (CMS Foundation). Editor choice affects every subsequent CMS feature.

---

### Pitfall 7: Next.js Hydration Mismatches Break Server-Side Rendering Silently

**What goes wrong:** The server renders HTML, the client re-renders in React, and if the output differs, React throws a hydration error. In development this shows as a console warning. In production, React silently falls back to client-side rendering for the affected component -- destroying the SSR benefit that is the entire reason for choosing Next.js (SEO).

**Why it happens:** Any component that accesses `window`, `localStorage`, `navigator`, `Date.now()`, or `Math.random()` during render produces different output on server vs client. Browser extensions inject attributes that cause mismatches. Conditional rendering based on auth state (which doesn't exist on the server) is a classic trigger.

**Consequences:** Google crawls the server-rendered version (which may be blank or different from what users see). SEO-critical content rendered only on the client is invisible to search engines. The site "works" in the browser but fails the core business requirement.

**Prevention:**
- Use `useEffect` for any browser-only logic. Never access `window` or `localStorage` in component render functions.
- For auth-dependent UI (admin panel), use Suspense boundaries and loading states rather than conditional rendering.
- Test with JavaScript disabled to see what Google's crawler sees.
- In Next.js 15+, use the `after()` API for deferred work rather than `useEffect` hacks.
- Never use `suppressHydrationWarning` as a fix -- it hides the symptom but the SEO damage continues.

**Detection:** Check browser console for hydration warnings during development. Use Google's "URL Inspection" tool in Search Console to see how Google renders your pages. If content appears in the browser but not in the rendered HTML, you have a hydration problem.

**Phase:** Applies to ALL phases. Establish a hydration-safe coding pattern in Phase 1 and enforce it throughout.

---

### Pitfall 8: Supabase Free Tier Limits Will Constrain a Growing Site

**What goes wrong:** Supabase free tier provides 500 MB database, 1 GB file storage, 5 GB egress, and 2 active projects. A CMS with image management, blog posts with images, lead form submissions, and analytics hooks will approach these limits faster than expected. When the database exceeds 500 MB, it enters read-only mode -- no new blog posts, no form submissions, no lead capture.

**Why it happens:** Images stored in Supabase Storage count against the 1 GB limit. Blog posts with embedded images, product images for the "cinematic showcases," and uploaded brochures/whitepapers add up. Free projects also pause after 1 week of inactivity (not applicable for an active site, but relevant during development gaps).

**Consequences:** Database goes read-only at the worst possible time. Forms stop working. Blog publishing fails. No error message for site visitors -- forms just silently fail.

**Prevention:**
- Budget for Supabase Pro ($25/month) for production. The free tier is fine for development.
- Optimize image storage: compress images before upload, use WebP/AVIF formats, store only thumbnails in Supabase and serve originals from a CDN or Vercel's image optimization.
- Implement a storage monitoring hook in the admin dashboard that warns when approaching 80% of limits.
- For blog images, consider storing in Supabase Storage but serving through Next.js Image component with Vercel's built-in optimization.
- Archive or purge old form submissions periodically.

**Detection:** Monitor Supabase dashboard for storage usage. Set up alerts at 400 MB database / 800 MB file storage.

**Phase:** Phase 1 (Infrastructure). Plan storage strategy before building image upload features.

---

### Pitfall 9: Schema Markup Errors Lose Rich Results and Trigger Search Console Warnings

**What goes wrong:** Auto-generated structured data (JSON-LD) contains errors: marking up content not visible on the page, using wrong schema types, missing required properties, or duplicating schema across pages. Google ignores invalid schema silently -- you never get rich results and don't know why. Worse, intentionally misleading schema triggers manual penalties.

**Why it happens:** The SEO automation module generates schema programmatically, but schema must accurately reflect visible page content. Auto-generation without validation produces schema that doesn't match what's actually on the page.

**Consequences:** Lost rich results (star ratings, FAQ dropdowns, breadcrumbs, local business info). Search Console warnings. In extreme cases (misleading schema), manual action penalty affecting entire domain.

**Prevention:**
- Use JSON-LD format (Google's stated preference) -- it's decoupled from HTML so template changes don't break it.
- Validate ALL auto-generated schema against Google's Rich Results Test and Schema.org validator before deploying.
- For Cinthamani specifically: implement LocalBusiness schema (critical for Chennai local SEO), Organization schema, Product schema for hardware/solutions, Article schema for blog posts, and BreadcrumbList for navigation.
- Never generate schema for content that isn't visible on the page.
- Build schema validation into the build pipeline -- fail the build if schema is invalid.
- Monitor Google Search Console "Enhancements" tab weekly for schema errors.

**Detection:** Google Search Console > Enhancements section shows schema errors. Rich Results Test (search.google.com/test/rich-results) validates individual pages.

**Phase:** Phase 2/3 (SEO Module). Build validation before building generation.

---

### Pitfall 10: Mobile-First Design That Is Actually Desktop-First Shrunk Down

**What goes wrong:** The design spec says "Apple-inspired mobile-first" with "cinematic product showcases" and "alternating dark/light sections." Teams design the cinematic desktop layout first, then try to make it work on mobile. The result: huge images served to mobile, complex animations that stutter on mid-range phones, touch targets too small, and text using viewport units that can't be zoomed for accessibility.

**Why it happens:** "Cinematic" and "Apple-inspired" naturally evoke desktop-scale visuals. Designers and developers gravitate toward the impressive desktop version first because it's more fun to build.

**Consequences:** Poor Core Web Vitals on mobile (where 60%+ of Indian traffic originates). Slow LCP from oversized hero images. Layout shift from images without dimensions. Google's mobile-first indexing means the mobile experience IS the ranking factor.

**Prevention:**
- Design mobile wireframes FIRST, literally before touching desktop. Start with 375px, then 768px, then 1440px.
- Use `srcset` and `sizes` on all images. The Next.js `<Image>` component handles this but requires `width` and `height` props -- never skip them.
- For hero/LCP images: set `priority` (or `preload` in Next.js 16+) and `fetchPriority="high"`. Never lazy-load the LCP image.
- Test on real mid-range Android devices, not just Chrome DevTools. Indian B2B buyers often use devices 2-3 years old.
- Never use viewport units (`vw`) alone for font sizes. Always combine with `rem` using `calc()` for accessibility (zoom support).
- Set touch targets to minimum 44x44px (WCAG) or 48x48px (Google recommendation).
- Compress all images: target WebP at quality 80, AVIF where supported. Aim for hero images under 200KB on mobile.

**Detection:** Run Lighthouse on mobile emulation for every page. Check LCP, CLS, and FID/INP. If LCP > 2.5s on mobile, images are too large or not preloaded.

**Phase:** Phase 1 (Design System). Establish mobile-first patterns before building any pages.

---

## Minor Pitfalls

---

### Pitfall 11: Serverless Function Timeouts on AI Blog Generation

**What goes wrong:** Vercel serverless functions timeout after 10 seconds on Hobby (60s on Pro, or up to 1 min with Fluid Compute on free). AI blog generation involving multiple LLM API calls (outline + draft + SEO optimization) easily exceeds 10 seconds. The function times out mid-generation, producing corrupted or partial blog posts.

**Prevention:**
- Use background processing for blog generation. Trigger generation via an API route that writes a "pending" status to Supabase, then use Supabase Edge Functions (which have a 150s timeout on free, 400s on Pro) or a Vercel Cron Job to handle the actual generation.
- Alternatively, use Vercel Fluid Compute to extend timeout to 60 seconds on Pro.
- Break generation into steps: outline -> draft -> review -> publish, each as a separate function invocation with state persisted in Supabase between steps.

**Phase:** Phase 3/4 (Blog System). Architecture must account for async generation.

---

### Pitfall 12: Internal Linking Automation Creates Link Spam

**What goes wrong:** The SEO module auto-generates internal links in blog posts. Without constraints, every mention of "broadcast" links to the Broadcast Solutions page, every mention of "Apple" links to the Apple/IT page. Posts become unreadable link farms. Google treats excessive internal linking as a manipulation signal.

**Prevention:**
- Limit auto-linking to 2-3 internal links per 1000 words.
- Never link the same target page more than once per post.
- Use varied, natural anchor text -- not the same keyword every time.
- Build a link budget system: track which pages are linked and how often. Distribute links across the site, not just to top-level service pages.

**Phase:** Phase 3 (SEO Module). Build constraints into the linking algorithm from the start.

---

### Pitfall 13: Exit-Intent Popups and Lead Magnets Block Content on Mobile

**What goes wrong:** Exit-intent popups don't work on mobile (there's no cursor to track leaving the viewport). Aggressive popups that cover content trigger Google's intrusive interstitial penalty, which specifically targets mobile pages that show popups covering the main content.

**Prevention:**
- Replace exit-intent on mobile with scroll-depth triggers (show after 60% scroll) or time-based triggers (show after 30 seconds).
- Use bottom-sheet or slide-in patterns on mobile, never full-screen overlays.
- Ensure the popup is easily dismissible with a large close button.
- Google's interstitial penalty applies to popups shown before the user has engaged with the content. Time-delay and scroll-depth triggers mitigate this.

**Phase:** Phase 4 (Lead Generation). Design popup behavior separately for mobile and desktop.

---

### Pitfall 14: CMS Image Upload Without Optimization Creates Performance Debt

**What goes wrong:** The admin uploads a 5MB DSLR photo of broadcast equipment. It's stored as-is in Supabase Storage and served directly to users. The page loads 5MB of images, LCP goes to 8+ seconds, Core Web Vitals fail, and Google downgrades the page.

**Prevention:**
- Process images on upload: resize to max 2000px width, convert to WebP, generate multiple sizes (thumbnail, medium, large).
- Use Supabase's image transformation feature (if on Pro) or Sharp/serverless image processing on upload.
- Store the original but serve optimized versions. The Next.js `<Image>` component with `loader` can handle this.
- Set a max upload size in the CMS (2MB for general images, 5MB for hero images).
- Display image file size in the CMS UI so admins can see the impact.

**Phase:** Phase 2 (CMS). Image processing pipeline must exist before image upload is available.

---

### Pitfall 15: WhatsApp Widget Blocks Page Content and Hurts CLS

**What goes wrong:** Third-party WhatsApp chat widgets load asynchronously, inject a floating button that shifts page content, and add 50-200KB of JavaScript. On mobile, the button covers the bottom-right corner where CTAs often live.

**Prevention:**
- Build a lightweight custom WhatsApp link button (just an `<a>` tag to `https://wa.me/PHONENUMBER`) styled to match the design system. No third-party widget needed.
- If a full widget is required, load it with `next/script` strategy="lazyOnload" and reserve space with a fixed-position container to prevent CLS.
- Position the button to not overlap with important CTAs, especially on mobile.

**Phase:** Phase 2 (Public Site). Decide on widget vs custom link early.

---

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Infrastructure Setup | Vercel Hobby plan is not for commercial use | Budget for Vercel Pro ($20/mo) or use Cloudflare Pages |
| Infrastructure Setup | Supabase free tier storage limits | Budget for Supabase Pro ($25/mo) for production |
| Database Schema | RLS disabled by default on all tables | Enable RLS + create policies as part of every migration |
| Auth System | Cookie-based auth requires 5 separate client configurations | Follow official Supabase SSR guide exactly, test in production-like env |
| Auth System | `getSession()` is spoofable, `getUser()` is not | Always use `getUser()` for protecting pages and data |
| CMS Editor | Rich text editor lock-in | Use Tiptap; store as JSON, render as HTML |
| CMS Images | Unoptimized uploads kill performance | Process on upload: resize, convert to WebP, generate sizes |
| Blog AI Generation | Free tier API limits shrinking rapidly | Design for provider-agnostic switching, budget for paid tier |
| Blog Content Quality | Generic AI content hurts domain authority | Feed company-specific context, require human review initially |
| Blog Function Timeout | Serverless timeouts on generation | Use async queue pattern, not synchronous API routes |
| SEO Automation | Over-optimized internal linking | Enforce link budget (2-3 per 1000 words) |
| SEO Schema | Invalid auto-generated schema | Validate schema in build pipeline, monitor Search Console |
| Mobile Design | Desktop-first disguised as mobile-first | Start wireframes at 375px, test on real Android devices |
| Lead Generation | Popups trigger Google interstitial penalty | Use scroll/time triggers on mobile, never full-screen overlays |
| Performance | Images not preloaded for LCP | Use `priority`/`preload` on hero images, never lazy-load LCP |
| WhatsApp Widget | CLS from async widget loading | Build custom WhatsApp link, avoid third-party widget JS |

---

## Sources

### Vercel Deployment
- [Vercel Hobby Plan](https://vercel.com/docs/plans/hobby) - Commercial use restrictions
- [Vercel Fair Use Guidelines](https://vercel.com/docs/limits/fair-use-guidelines)
- [Vercel Functions Limits](https://vercel.com/docs/functions/limitations) - Timeout limits per plan
- [Vercel Pricing Explained for Vibe Coders 2026](https://blog.vibecoder.me/vercel-pricing-explained-when-free-isnt-enough)

### Supabase Auth & RLS
- [Setting up Server-Side Auth for Next.js - Supabase Docs](https://supabase.com/docs/guides/auth/server-side/nextjs)
- [Supabase SSR Client Creation](https://supabase.com/docs/guides/auth/server-side/creating-a-client)
- [Supabase RLS Performance Best Practices](https://supabase.com/docs/guides/troubleshooting/rls-performance-and-best-practices-Z5Jjwv)
- [Supabase RLS Best Practices: Production Patterns](https://makerkit.dev/blog/tutorials/supabase-rls-best-practices)
- [6 Common Supabase Auth Mistakes](https://startupik.com/6-common-supabase-auth-mistakes-and-fixes/)
- [Supabase Storage Access Control](https://supabase.com/docs/guides/storage/security/access-control)
- [Supabase Pricing](https://supabase.com/pricing) - Free tier limits

### AI Blog & Content
- [Does Google Penalize AI Content 2026 - Keywords Everywhere](https://keywordseverywhere.com/blog/does-google-penalize-ai-content/)
- [AI-Generated Content in 2026: Rank Safely - Iconier](https://www.iconier.com/ai-generated-content-seo-2026-best-practices)
- [Google March 2026 Core Update - ALM Corp](https://almcorp.com/blog/google-march-2026-core-update/)
- [Google Helpful Content Update Relevance 2026 - Hobo](https://www.hobo-web.co.uk/the-google-helpful-content-update-and-its-relevance-in-2026/)
- [Gemini API Rate Limits - Google](https://ai.google.dev/gemini-api/docs/rate-limits)
- [Gemini API Free Tier Limits 2026](https://blog.laozhang.ai/en/posts/gemini-api-free-tier)
- [Groq API Rate Limits](https://console.groq.com/docs/rate-limits)

### SEO & Schema
- [Schema Markup Over-Optimization Mistakes - GTechMe](https://www.gtechme.com/insights/schema-markup-over-optimization-mistakes/)
- [Common Schema Markup Errors](https://robertcelt95.medium.com/common-schema-markup-errors-that-kill-your-seo-rankings-cc64a83480af)
- [Schema Markup in 2026: SERP Visibility - ALM Corp](https://almcorp.com/blog/schema-markup-detailed-guide-2026-serp-visibility/)

### Next.js Performance & Hydration
- [Next.js Image Component Performance](https://pagepro.co/blog/nextjs-image-component-performance-cwv/)
- [Next.js Hydration Errors - Official Docs](https://nextjs.org/docs/messages/react-hydration-error)
- [Next.js Core Web Vitals 2026 - LCP](https://shubhamjha.com/blog/core-web-vitals-nextjs-optimization)
- [Resolving Hydration Mismatch Errors - LogRocket](https://blog.logrocket.com/resolving-hydration-mismatch-errors-next-js/)

### Rich Text Editors
- [Which Rich Text Editor Framework in 2025 - Liveblocks](https://liveblocks.io/blog/which-rich-text-editor-framework-should-you-choose-in-2025)
- [Tiptap vs Lexical vs Slate vs Quill 2026 - PkgPulse](https://www.pkgpulse.com/blog/tiptap-vs-lexical-vs-slate-vs-quill-rich-text-editor-2026)

### Mobile-First Design
- [Responsive Design Best Practices 2025 - Adicator](https://www.adicator.com/post/responsive-design-best-practices)
- [Responsive Web Design - MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
