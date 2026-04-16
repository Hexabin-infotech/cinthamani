# Technology Stack

**Project:** Cinthamani Website Revamp
**Researched:** 2026-04-13
**Overall Confidence:** HIGH

---

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Next.js | 16.2.x | Full-stack React framework with SSR/SSG | Latest stable. Turbopack is now default (50%+ faster builds). Explicit `"use cache"` model replaces implicit caching pitfalls. Async request APIs are mandatory (no legacy sync fallback). SSR is critical for SEO — the core business need. Supabase has official Next.js 16 auth guide. Vercel deployment is first-class. | HIGH |
| React | 19.2.x | UI library (bundled with Next.js 16) | Ships with Next.js 16. Server Components for zero-JS public pages. `useActionState` for form handling. Compiler optimizations reduce bundle size. | HIGH |
| TypeScript | 5.7.x | Type safety | Non-negotiable for a project this size. Catches CMS schema drift, API contract breaks, and form validation mismatches at build time. | HIGH |

### Backend & Database

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Supabase | Latest (supabase-js 2.103.x) | PostgreSQL database, auth, storage, edge functions | User already has Supabase MCP connected. PostgreSQL gives full relational power for lead scoring, content relationships, and analytics. Row Level Security (RLS) for admin vs public access. PostgREST v14 API (~20% throughput improvement). Real-time subscriptions for admin dashboard. Built-in auth with email/password + magic links. File storage for CMS image uploads. | HIGH |
| @supabase/ssr | 0.10.x | Server-side auth for Next.js | Required for SSR auth cookie management. Exports `createBrowserClient` and `createServerClient`. Handles token refresh in proxy.ts (Next.js 16 renamed middleware.ts to proxy.ts). | HIGH |
| @supabase/supabase-js | 2.103.x | Supabase client SDK | Isomorphic client for both server and browser. TypeScript-first. Supports database queries, auth, storage, edge functions, and realtime. | HIGH |

### Styling & UI

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Tailwind CSS | 4.2.x | Utility-first CSS framework | v4.2 is current stable. New CSS-first configuration (no more tailwind.config.js). Native `@tailwindcss/vite` and `@tailwindcss/postcss` plugins. Logical property utilities for RTL-ready future. Faster recompilation. Perfect for Apple-inspired design system with precise spacing, colors, and typography tokens. | HIGH |
| Motion (formerly Framer Motion) | 12.x | Animation library | Renamed from framer-motion in 2025. Import from `motion/react`. Hybrid engine uses Web Animations API for 120fps, falls back to JS when needed. Essential for Apple-inspired cinematic section transitions, scroll-triggered reveals, page transitions, and client logo carousel. 30M+ monthly npm downloads. | HIGH |
| Lucide React | 1.8.x | Icon library | Tree-shakable SVG icons. Consistent with design system anti-pattern rule (no emoji icons, SVG only). 30M+ weekly downloads. TypeScript-first. Customizable size, color, stroke. | HIGH |
| sharp | Latest | Image optimization | Next.js uses sharp under the hood for `next/image` optimization. 40-70% file size reduction. WebP/AVIF auto-conversion. Required for production deployments. Strongly recommended by Next.js docs. | HIGH |

### Content Editing (CMS)

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Tiptap | 2.x | Rich text editor for blog/CMS | Best balance of DX, extensibility, and WordPress-like editing for a custom CMS. Built on ProseMirror (battle-tested). Clean extension API for custom blocks (image galleries, product embeds, CTA blocks). Better documentation than Lexical. Faster development timeline than Lexical. Active community. Handles blog post editing, page section content, and testimonial management. | HIGH |
| @tiptap/starter-kit | 2.x | Core editor extensions bundle | Includes bold, italic, headings, lists, blockquote, code, horizontal rule — the WordPress essentials out of the box. | HIGH |
| @tiptap/extension-image | 2.x | Image embedding in editor | CMS needs inline image support for blog posts and page sections. | HIGH |
| @tiptap/extension-link | 2.x | Link handling in editor | Internal linking for SEO module. URL validation. | HIGH |
| @tiptap/extension-placeholder | 2.x | Placeholder text | WordPress-like "Start writing..." UX in the editor. | MEDIUM |

### Forms & Validation

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| React Hook Form | 7.x | Form state management | Uncontrolled form approach = fewer re-renders. Works with Next.js Server Actions via `useActionState`. Best-in-class DX for complex forms (lead capture, admin CRUD, contact forms). | HIGH |
| Zod | 3.x | Schema validation (client + server) | Single schema definition shared between client validation (via `zodResolver`) and Server Action validation. TypeScript-native. Used for form validation, API input validation, CMS content schemas, and AI-generated content validation. | HIGH |
| @hookform/resolvers | 3.x | Bridge between RHF and Zod | Standard integration package. | HIGH |

### State Management

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Zustand | 5.x | Global client state | 3KB gzipped. Pragmatic default for React in 2026. Used for: admin panel UI state, notification system, lead pipeline filters, analytics dashboard filters. No boilerplate. Works outside React components (useful for AI provider fallback logic). | HIGH |
| @tanstack/react-query | 5.99.x | Server state / async data fetching | For admin panel data fetching: leads list, blog posts, analytics. Automatic caching, background refetching, optimistic updates. Works with Server Components (prefetch on server, hydrate on client). Public pages use Server Components directly — TanStack Query is primarily for the admin panel. | HIGH |

### SEO & Structured Data

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| next/metadata (built-in) | — | Meta tags, Open Graph, Twitter cards | Next.js 16 built-in `generateMetadata` function. No external package needed. Dynamic per-page metadata from Supabase CMS. Handles title, description, OG images, canonical URLs. | HIGH |
| schema-dts | 1.x | TypeScript types for Schema.org JSON-LD | Google's official package. Type-safe structured data generation. Used for: LocalBusiness, Organization, Product, Article, BreadcrumbList, FAQPage schemas. Critical for Chennai local SEO and GEO optimization. | HIGH |
| next-sitemap | 4.x | Sitemap & robots.txt generation | Auto-generates sitemap from all routes. Handles dynamic blog posts and product pages. Server-side sitemap generation for large sites. Splits into indexed sitemaps when URLs exceed 7000. While Next.js has built-in `sitemap.ts`, next-sitemap handles robots.txt generation and sitemap indexing more completely. | MEDIUM |

### AI Blog Content Generation

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| @google/generative-ai | Latest | Gemini API client (primary AI provider) | Free tier: Gemini 2.5 Flash at 10 RPM, 250 requests/day. Flash-Lite at 15 RPM, 1000 requests/day. 1M token context window. As of April 2026, free tier is Flash models only (Pro restricted to paid). Sufficient for 1 daily blog post. No credit card required. | HIGH |
| groq-sdk | Latest | Groq API client (fallback #1) | Free tier: 30 RPM, 14,400 requests/day on Llama 3.1 8B. No time limit on free tier. No credit card required. Ultra-fast inference (LPU). Access to all models including Llama 3.3 70B. Fallback when Gemini rate limits hit. | HIGH |
| @huggingface/inference | Latest | HuggingFace Inference API (fallback #2) | Free tier: ~few hundred requests/hour. Limited to models under 10B parameters. Cold start of 30+ seconds on niche models. Last-resort fallback. Consider Mistral 7B or similar for text generation. | MEDIUM |

### Analytics Integration

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| @next/third-parties | Latest | GA4 script loading | Official Next.js package for third-party scripts. `GoogleAnalytics` component handles script injection post-hydration. Cleaner than manual gtag.js. | HIGH |
| googleapis | Latest | GA4 Data API + Search Console API | Google's official Node.js SDK. Service Account auth for server-side data fetching. GA4 Data API for traffic dashboard. Search Console API for keyword rankings, indexing status, sitemap management. Build hooks now, connect when user provides keys. | MEDIUM |

### Email & Lead Management

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| React Email | Latest | Email templates in React | Build email templates as React components. Renders to HTML for any provider. Used for: lead follow-up sequences, admin notifications, blog digest. | MEDIUM |
| Nodemailer | 6.x | SMTP email sending | 5M+ weekly downloads. Works with any SMTP provider (Gmail, AWS SES, SendGrid). No vendor lock-in. Free with Gmail SMTP for low volume. Use for lead notification emails and follow-up sequences. Resend is cleaner API but adds cost — Nodemailer is free. | HIGH |

### Utilities

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| date-fns | 4.x | Date manipulation | Tree-shakable (only import what you use). Functional approach fits React patterns. TypeScript-first. 65M weekly downloads. Used for: blog post scheduling, lead timestamps, analytics date ranges. | HIGH |
| clsx | 2.x | Conditional CSS class merging | Tiny utility for Tailwind class conditionals. Standard pattern with Tailwind. | HIGH |
| tailwind-merge | 2.x | Tailwind class conflict resolution | Prevents duplicate/conflicting Tailwind classes in component composition. Pair with clsx via `cn()` utility function. | HIGH |

### Deployment & Infrastructure

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Vercel | — | Hosting & deployment | First-class Next.js support. Free Hobby tier: 100GB transfer, 1M function invocations, 1M edge requests/month. Cron jobs for daily blog posting (Hobby: 1x/day limit, which matches daily cadence). Preview deployments for admin review. Edge Functions for geo-detection. **NOTE: Hobby is personal/non-commercial only. This is a commercial B2B project — Pro plan ($20/user/month) is required.** | HIGH |
| Vercel Cron Jobs | — | Scheduled AI blog generation | Configure in vercel.json. Triggers API route on schedule. Hobby plan: 1x/day (sufficient for daily blog). Pro plan: configurable frequency. HTTP GET to production URL with auth header. | HIGH |

---

## Alternatives Considered (and Why Not)

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Framework | Next.js 16 | Remix, Astro | Remix lacks Vercel-native optimizations. Astro is content-site focused but weak for admin panel SPA needs. Next.js has the deepest Supabase integration docs. |
| Database | Supabase (PostgreSQL) | Firebase, PlanetScale | User already has Supabase MCP. Firebase is NoSQL (bad for relational lead scoring). PlanetScale dropped free tier. |
| CMS | Custom (Tiptap + Supabase) | Strapi, Sanity, Payload | User explicitly wants WordPress-like editing in React, not a separate headless CMS dependency. Strapi/Sanity add hosting cost + complexity. Custom CMS with Tiptap gives full control. |
| Rich Text Editor | Tiptap | Lexical, Quill, CKEditor | Lexical has steeper learning curve, smaller community. Quill is aging (fewer modern React patterns). CKEditor is heavy and commercially licensed. Tiptap has best DX + docs for CMS use case. |
| Styling | Tailwind CSS 4.2 | Styled Components, CSS Modules | Tailwind matches the design system's utility-driven approach (precise spacing, colors). No runtime CSS-in-JS cost. Design tokens map directly to Tailwind config. |
| Animation | Motion 12.x | GSAP, React Spring | GSAP licensing complexity for commercial use. React Spring has less community momentum. Motion is the React animation standard with 30M downloads/month. |
| State | Zustand | Redux Toolkit, Jotai | Redux is overkill for this project's state complexity. Jotai is better for atomic/form state (React Hook Form handles that). Zustand is the pragmatic default for global UI state. |
| Email | Nodemailer | Resend | Resend has cleaner API but costs money at scale. Nodemailer is free with any SMTP. Budget-conscious project should minimize recurring costs. |
| Icons | Lucide | Heroicons, Phosphor | Lucide has broader icon set (1500+). Tree-shakable. Matches design system spec. |
| Date | date-fns | Day.js, Luxon | date-fns is tree-shakable and functional. Day.js is smaller core but needs plugins for formatting. date-fns better TypeScript support. |
| Sitemap | next-sitemap | Built-in sitemap.ts | Built-in sitemap.ts works but next-sitemap handles robots.txt, sitemap indexing, and server-side generation more completely. Both are acceptable. |

---

## What NOT to Use

| Technology | Why Not |
|------------|---------|
| Moment.js | Deprecated. Use date-fns. |
| Draft.js | Abandoned by Meta. Replaced by Lexical. |
| @supabase/auth-helpers-nextjs | Deprecated. Replaced by @supabase/ssr. |
| framer-motion (package name) | Renamed to `motion`. Import from `motion/react`. |
| next-seo | Unnecessary with Next.js 16 built-in `generateMetadata`. Adds dead weight. |
| Prisma | Adds ORM layer on top of Supabase's PostgREST API. Supabase-js is sufficient and avoids double abstraction. |
| NextAuth.js / Auth.js | Supabase Auth handles authentication natively. Adding Auth.js creates auth state split. |
| Strapi / Contentful / Sanity | User wants custom CMS. External headless CMS adds hosting cost, latency, and vendor dependency. |
| Firebase | NoSQL is wrong for relational lead data. User chose Supabase. |
| styled-components / Emotion | Runtime CSS-in-JS. Adds bundle size. Incompatible with Server Components (requires 'use client'). Tailwind is the project choice. |
| jQuery | 2026. No. |

---

## Version Pinning Strategy

```json
{
  "engines": {
    "node": ">=20.0.0"
  }
}
```

Use exact versions (`"next": "16.2.x"`) for framework-critical packages. Use caret ranges (`"^5.0.0"`) for utilities. Lock with `package-lock.json`.

---

## Installation

```bash
# Core framework
npm install next@latest react@latest react-dom@latest

# Supabase
npm install @supabase/supabase-js @supabase/ssr

# Styling & UI
npm install motion lucide-react clsx tailwind-merge

# Rich text editor (CMS)
npm install @tiptap/react @tiptap/starter-kit @tiptap/pm @tiptap/extension-image @tiptap/extension-link @tiptap/extension-placeholder

# Forms & validation
npm install react-hook-form @hookform/resolvers zod

# State management
npm install zustand @tanstack/react-query

# SEO & structured data
npm install schema-dts next-sitemap

# AI providers (blog automation)
npm install @google/generative-ai groq-sdk @huggingface/inference

# Analytics
npm install @next/third-parties googleapis

# Email
npm install react-email nodemailer

# Utilities
npm install date-fns

# Dev dependencies
npm install -D typescript @types/react @types/react-dom @types/nodemailer
npm install -D @tailwindcss/postcss
npm install -D sharp
npm install -D eslint eslint-config-next
```

---

## Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# AI Providers (blog automation)
GEMINI_API_KEY=your_gemini_key
GROQ_API_KEY=your_groq_key
HUGGINGFACE_API_KEY=your_hf_token

# Analytics (connect later)
GA4_MEASUREMENT_ID=
GA4_PROPERTY_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=
SEARCH_CONSOLE_SITE_URL=

# Email (connect later)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

# Vercel Cron Secret
CRON_SECRET=your_cron_secret

# App
NEXT_PUBLIC_SITE_URL=https://cinthamani.com
```

---

## Key Architecture Decisions Encoded in Stack

1. **Next.js 16 App Router + Server Components** = Public pages render with zero client JS. Blog posts, solution pages, and product showcases are fully server-rendered for SEO. Only interactive elements (forms, admin panel, animations) ship client JS.

2. **Supabase as single backend** = No separate API server. Supabase handles database, auth, file storage, and edge functions. Reduces infrastructure cost and complexity.

3. **Custom CMS over headless CMS** = Tiptap editor + Supabase tables. Full control over content schema. No external service dependency or recurring headless CMS cost.

4. **AI provider fallback chain** = Gemini Flash (primary, 250 req/day free) -> Groq (fallback, 14,400 req/day free) -> HuggingFace (last resort). Each provider has an SDK. Fallback logic in a Zustand store or utility module.

5. **Vercel Pro required** = Commercial B2B project cannot use Hobby tier. Pro plan ($20/user/month) gives 1TB transfer, team collaboration, and flexible cron schedules.

6. **Motion for animations** = Apple-inspired design demands smooth animations. Motion's hybrid engine (Web Animations API + JS fallback) delivers 120fps for scroll-triggered reveals, page transitions, and product showcases.

---

## Sources

- [Next.js 16 Blog Post](https://nextjs.org/blog/next-16)
- [Next.js Releases](https://github.com/vercel/next.js/releases)
- [Tailwind CSS 4.2 Release](https://www.infoq.com/news/2026/04/tailwind-css-4-2-webpack/)
- [Supabase Changelog](https://supabase.com/changelog)
- [Supabase Auth with Next.js](https://supabase.com/docs/guides/auth/server-side/nextjs)
- [Supabase Next.js 16 Auth AI Prompt](https://supabase.com/docs/guides/getting-started/ai-prompts/nextjs-supabase-auth)
- [Gemini API Pricing](https://ai.google.dev/gemini-api/docs/pricing)
- [Gemini API Rate Limits](https://ai.google.dev/gemini-api/docs/rate-limits)
- [Groq Rate Limits](https://console.groq.com/docs/rate-limits)
- [HuggingFace Inference Providers](https://huggingface.co/docs/inference-providers/en/index)
- [Motion (formerly Framer Motion)](https://motion.dev/)
- [Tiptap Editor](https://tiptap.dev/)
- [Vercel Pricing](https://vercel.com/pricing)
- [Vercel Cron Jobs](https://vercel.com/docs/cron-jobs)
- [Next.js JSON-LD Guide](https://nextjs.org/docs/app/guides/json-ld)
- [schema-dts (Google)](https://www.npmjs.com/package/schema-dts)
- [TanStack Query](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Hook Form](https://react-hook-form.com/)
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)
- [@supabase/ssr](https://www.npmjs.com/package/@supabase/ssr)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [Next.js Image Optimization / Sharp](https://nextjs.org/docs/app/getting-started/images)
- [GA4 Implementation for Next.js 16](https://medium.com/@aashari/google-analytics-ga4-implementation-guide-for-next-js-16-a7bbf267dbaa)
- [Vercel Pricing 2026](https://vercel.com/pricing)
