# Project Research Summary

**Project:** Cinthamani Website Revamp
**Domain:** Enterprise B2B lead-generation website with CMS + autonomous AI content
**Researched:** 2026-04-13
**Confidence:** HIGH

## Executive Summary

Cinthamani Computer Pvt. Ltd. needs a modern B2B lead-generation website that solves one problem: digital invisibility. The company has 40 years of credibility, 35 technology partners, and proprietary products -- but competitors billing 10-20x more are winning online because they show up in search results. The expert approach for this domain is a server-rendered Next.js site (SSR is non-negotiable for SEO), backed by Supabase as a unified database/auth/storage layer, with a custom CMS built on Tiptap for WordPress-like content editing. The Apple-inspired design, powered by Tailwind CSS 4.2 and Motion 12.x, positions Cinthamani as visually superior to all five identified competitors -- none of which invest in design quality.

The recommended approach builds the public website and CMS foundation first, then layers on the AI blog engine, lead scoring, and SEO automation as distinct modules. The architecture uses Server Components by default for zero-JS public pages (critical for SEO crawlability), with client components only for interactive elements like forms, animations, and the admin panel. Supabase serves as the single backend -- no separate API server -- which keeps infrastructure cost low and reduces operational complexity. The AI blog generation uses a provider-agnostic fallback chain (Gemini Flash -> Groq -> HuggingFace) with a state-machine pattern to handle serverless timeouts.

The key risks are: (1) Vercel Hobby plan cannot be used -- this is a commercial project requiring Pro at 0/month; (2) AI-generated blog content must include Cinthamani-specific context and human review to avoid Google spam filters; (3) Supabase RLS must be enabled on every table from day one or the entire database is publicly exposed; and (4) free-tier AI limits are shrinking, so the blog system must be designed for provider flexibility and a potential $5-10/month paid tier. Total minimum recurring infrastructure cost is $45/month (Vercel Pro + Supabase Pro), which is essential and non-negotiable for a commercial deployment.
## Key Findings

### Recommended Stack

The stack is built around Next.js 16.2.x with React 19.2.x and TypeScript 5.7.x as the core framework. Next.js 16 brings Turbopack as default (50%+ faster builds), the explicit "use cache" model replacing implicit caching, and mandatory async request APIs. Supabase (supabase-js 2.103.x + @supabase/ssr 0.10.x) serves as the single backend for PostgreSQL, auth, file storage, and real-time subscriptions. See STACK.md for full version matrix and installation commands.

**Core technologies:**
- **Next.js 16.2.x:** Full-stack SSR framework -- server-rendered pages are the foundation of the SEO strategy
- **Supabase (PostgreSQL):** Database, auth, file storage, edge functions -- user already has MCP connected, eliminates need for separate API server
- **Tailwind CSS 4.2.x:** Utility-first CSS with CSS-first configuration -- design tokens map directly to Apple-inspired system
- **Motion 12.x (formerly Framer Motion):** Animation library -- hybrid engine for 120fps cinematic transitions essential to the design vision
- **Tiptap 2.x:** Rich text editor for CMS -- best balance of DX, extensibility, and WordPress-like editing for custom CMS
- **React Hook Form 7.x + Zod 3.x:** Forms and shared client/server validation -- single schema definition shared across boundary
- **Zustand 5.x + TanStack Query 5.x:** Client state (admin UI) + server state (data fetching with caching)
- **Gemini Flash / Groq / HuggingFace:** AI provider fallback chain for blog generation on free/low-cost tiers
- **Nodemailer 6.x + React Email:** Email for lead notifications -- free with any SMTP provider

**Critical version requirement:** Node.js >= 20.0.0. Next.js 16 proxy.ts replaces middleware.ts -- all Supabase auth cookie handling must use the new file.

### Expected Features

**Must have (table stakes) -- site cannot launch without these:**
- T1: Mobile-first responsive design (375px to 1440px+, under 2s load)
- T2: Six dedicated service/solutions pages (Broadcast, Apple/IT, Post-Production, Wedding, Cable TV, Proprietary)
- T3: Trust signals -- partner logos, "40+ Years" stats, certifications
- T4: Contact forms with minimal fields (Name, Email, Phone, Company, Message)
- T5: WhatsApp Business click-to-chat widget
- T6: SEO fundamentals -- meta tags, JSON-LD structured data, sitemap, robots.txt
- T7: Blog infrastructure (rich text editor, images, categories, scheduling)
- T8: About page with company timeline, team, offices
- T9: Products/solutions catalog (browse + "Get a Quote", not e-commerce)
- T10: SSL and Vercel hosting (handled by platform)
- T12: Partner/technology ecosystem page (35 partners, categorized)

**Should have (competitive differentiators):**
- D1: Autonomous AI blog engine with daily posting -- no competitor does this
- D2: Lead scoring (Hot/Warm/Cold) with CRM-ready pipeline
- D3: Apple-inspired cinematic design surpassing all competitors
- D4: GEO optimization for AI search citation (zero-click answers)
- D5: Case studies with measurable outcomes (gated PDF downloads)
- D6: Content-gated lead magnets for email capture
- D7: Multi-location local SEO (Chennai, Dubai, USA)
- D9: Admin CMS with WordPress-like editing
- D10: Autonomous SEO module (meta generation, internal linking, keyword tracking)
- D11: Analytics dashboard consolidating all digital marketing

**Defer to Phase 3+:**
- D8: Interactive ROI/solution configurator -- high value but high complexity
- D12: Exit-intent popups -- small lift, implement after core is stable

**Explicitly excluded (anti-features):**
- E-commerce/checkout (enterprise quote-based sales, not retail)
- Full CRM (build hooks, use HubSpot/Zoho)
- Custom live chat (WhatsApp serves India better)
- Multi-language (English-only audience)
- AI chatbot on public site (risk of incorrect answers about complex solutions)
- Social media feed embeds (page weight, unpredictable content)
### Architecture Approach

The architecture splits cleanly into two route groups: a public website rendered entirely with Server Components (zero client JS for content pages) and a client-heavy admin panel behind Supabase auth. All data flows through Supabase PostgreSQL with RLS policies defined in version-controlled migration files. The AI blog generation pipeline uses a state machine pattern with Supabase as the state store, breaking generation into discrete steps (topic -> outline -> draft -> review -> publish) to avoid serverless function timeouts. CMS content is stored as Tiptap JSON in JSONB columns and rendered to HTML server-side, decoupling the editor format from display. On-demand ISR revalidation ensures public pages update immediately when admin edits content. See ARCHITECTURE.md for full file structure and data flow diagrams.

**Major components:**
1. **Public Website** -- SSR pages for SEO; Server Components reading Supabase with anon key + RLS
2. **Interactive Widgets** -- Client components for forms, animations, WhatsApp; communicate via Server Actions
3. **Admin Panel (/admin/*)** -- Client-heavy SPA with Tiptap editor, TanStack Query, lead pipeline, analytics
4. **Blog Generation Engine** -- API route triggered by Vercel Cron; AI provider fallback chain; state machine in Supabase
5. **SEO Module** -- Auto meta tags, JSON-LD (schema-dts), internal linking, sitemap generation
6. **Lead Scoring Engine** -- Server Actions + DB triggers for scoring and Nodemailer notifications
7. **Analytics Hooks** -- GA4 Data API + Search Console API wrappers; build now, connect when keys provided

### Critical Pitfalls

1. **Vercel Hobby plan is prohibited for commercial use** -- Cinthamani is a business; Hobby tier can be suspended without warning. Budget Vercel Pro ($20/month) from day one. No exceptions.

2. **Supabase RLS disabled by default on all tables** -- Anon key is public; without RLS, anyone can read/write/delete all data. Enable RLS and create policies in every migration file. Test from client SDK, not SQL Editor (which bypasses RLS).

3. **Supabase auth requires 5 separate client configurations** -- Browser client, server component client, server action client, route handler client, and proxy.ts (middleware) client each need different cookie handling. Miss one and auth silently breaks. Follow the official @supabase/ssr guide exactly. Always use getUser() not getSession() for route protection.

4. **AI-generated content triggers spam filters if generic** -- Google penalizes "information gain = 0" content, not AI content per se. Every blog post must include Cinthamani-specific context (case studies, proprietary product knowledge, industry-specific data). Human review mandatory for first 3 months. Target 2-3 posts/week, not daily.

5. **Free-tier AI limits are shrinking rapidly** -- Gemini free tier reduced 50-80% from 2025 levels; Pro models now paywalled. Design the system as provider-agnostic from day one. Budget $5-10/month for paid tier as insurance.
## Implications for Roadmap

### Phase 1: Foundation + Design System + Infrastructure
**Rationale:** Everything depends on the hosting, database, auth, and design system being correct. Architecture research shows the public website, admin panel, and all subsequent features build on these foundations. The critical path identified in FEATURES.md is: Mobile-first design (T1) + SEO fundamentals (T6) + Admin CMS skeleton (D9).
**Delivers:** Vercel Pro deployment, Supabase schema with RLS, auth system (proxy.ts + all 5 client configs), Tailwind design tokens, UI component library, glass navigation, responsive layout system.
**Addresses:** T1, T10, infrastructure for T6 and D9, D3 (design quality).
**Avoids:** Pitfalls 1 (Vercel commercial use), 2 (auth cookie handling), 3 (RLS from day one), 7 (hydration mismatches), 10 (mobile-first from the start).
**Budget implication:** Vercel Pro $20/month + Supabase Pro $25/month = $45/month recurring minimum.

### Phase 2: Public Website + CMS Core
**Rationale:** The public website is the revenue engine. Every day without it is lost leads. CMS must exist so content can be managed without developer intervention. Architecture shows public pages are Server Components reading from Supabase -- the simplest rendering path.
**Delivers:** All public pages (Home, About, Solutions x6, Products catalog, Partners, Contact), lead capture forms, WhatsApp widget, trust signals, SEO fundamentals (meta tags, JSON-LD, sitemap), basic CMS (page editing, image upload, content management via Tiptap).
**Addresses:** T2, T3, T4, T5, T6, T8, T9, T12, D9 (full CMS), D3 (Apple design applied).
**Avoids:** Pitfall 6 (editor lock-in -- Tiptap chosen), 9 (schema validation built in), 14 (image optimization pipeline), 15 (custom WhatsApp link, not third-party widget).
**Uses:** Next.js Server Components, Supabase (read), Tiptap, React Hook Form + Zod, Motion, schema-dts.

### Phase 3: Blog System + AI Content Engine
**Rationale:** Blog infrastructure is table stakes (T7), but the AI autonomous engine (D1) is the single most impactful differentiator. No competitor publishes regular content. However, this depends on the CMS being ready (Tiptap editor for review/editing) and SEO fundamentals being in place (meta tags, structured data).
**Delivers:** Blog listing + detail pages, Tiptap blog editor, AI generation pipeline with provider fallback, content queue with draft/review/publish states, scheduling system, admin review interface, SEO fields per post.
**Addresses:** T7, D1, foundation for D4 and D10.
**Avoids:** Pitfall 4 (provider-agnostic design, queue with retry), 5 (company-specific context, human review, 2-3/week not daily), 11 (state machine pattern for timeouts), 12 (link budget constraints from start).
**Uses:** Gemini/Groq/HuggingFace SDKs, Vercel Cron, Zod for output validation.

### Phase 4: Lead Generation + Scoring
**Rationale:** With the public site live and blog generating traffic, the next lever is converting that traffic into qualified leads. Lead scoring, case studies, and lead magnets form a cohesive conversion optimization layer. These features share the same data model (leads table, scoring rules, notification triggers).
**Delivers:** Lead scoring system (Hot/Warm/Cold), case studies with gated PDF downloads, content-gated lead magnets, CRM webhook hooks (HubSpot/Zoho-ready), email notifications via Nodemailer, lead pipeline view in admin.
**Addresses:** D2, D5, D6, D7 (multi-location SEO).
**Avoids:** Pitfall 13 (exit-intent popups designed correctly for mobile -- deferred to Phase 5 if time permits).

### Phase 5: SEO Automation + Analytics + Growth
**Rationale:** With content flowing and leads being captured, the final layer automates ongoing optimization. The autonomous SEO module builds on the blog engine and CMS. The analytics dashboard consolidates all digital marketing metrics. These are "compound growth" features -- they improve everything that came before.
**Delivers:** Autonomous SEO module (auto meta tags, internal linking, keyword tracking), GEO optimization (AI search visibility), analytics dashboard (GA4 + Search Console integration hooks), exit-intent popups, foundation for ROI configurator (D8).
**Addresses:** D4, D10, D11, D12, D8 (foundation only -- full implementation is v2).
**Uses:** googleapis SDK, Search Console API, schema-dts (advanced), next-sitemap.
### Phase Ordering Rationale

- **Dependencies drive order:** Auth + RLS must exist before CMS. CMS must exist before blog. Blog must exist before AI engine. SEO fundamentals must exist before SEO automation. This is not arbitrary -- the dependency graph from FEATURES.md confirms it.
- **Revenue impact drives priority:** Public website (Phase 2) generates leads from day one. Blog (Phase 3) compounds organic traffic. Lead scoring (Phase 4) improves conversion of existing traffic. SEO automation (Phase 5) compounds everything.
- **Pitfall avoidance drives grouping:** Infrastructure pitfalls (Vercel, RLS, auth) are isolated in Phase 1 so they cannot contaminate later phases. AI content pitfalls (quality, rate limits) are addressed in Phase 3 with the blog system, not spread across multiple phases.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 3 (Blog + AI):** AI provider rate limits change frequently. Verify current Gemini/Groq free tier quotas before implementation. Blog content strategy (topics, company context, review workflow) needs business input.
- **Phase 5 (SEO Automation):** Internal linking algorithm, keyword tracking integration with Search Console, and GEO optimization are emerging practices with limited established patterns. Research during planning.

Phases with standard patterns (skip deep research):
- **Phase 1 (Foundation):** Next.js 16 setup, Supabase auth, Tailwind design system -- all have official guides and well-documented patterns.
- **Phase 2 (Public Website):** Server-rendered pages, Tiptap CMS, form handling -- established patterns with strong documentation.
- **Phase 4 (Lead Generation):** Lead scoring, email notifications, PDF downloads -- straightforward CRUD + business logic.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | All technologies verified against official docs and current releases. Next.js 16, Tailwind 4.2, Supabase SSR packages all confirmed current. |
| Features | HIGH | Competitive analysis based on live competitor sites. B2B lead gen best practices sourced from multiple 2026 industry reports. Feature prioritization aligns with business goals. |
| Architecture | HIGH | File structure, data flow, and component boundaries follow documented Next.js 16 App Router patterns. Supabase integration follows official guide. |
| Pitfalls | HIGH | Critical pitfalls (Vercel ToS, RLS, auth cookies) verified against official documentation. AI content quality pitfall backed by Google March 2026 core update documentation. |

**Overall confidence:** HIGH

### Gaps to Address

- **Vercel Pro vs alternatives:** If $20/month hosting cost is a hard constraint, Cloudflare Pages (free for commercial) is viable but changes the deployment story. Needs user decision.
- **AI blog content strategy:** The system can be built, but the content topics, company-specific context (case studies, client names, proprietary product details), and review workflow require business input before Phase 3 planning.
- **GA4/Search Console credentials:** Analytics dashboard will be built with hooks and mock data. Actual connection depends on user providing API keys and service account credentials. Timeline unknown.
- **Supabase Pro timing:** Free tier is fine for development. The switch to Pro ($25/month) must happen before production launch. Confirm budget approval.
- **Domain and DNS:** No mention of domain ownership or DNS configuration. Verify cinthamani.com ownership and DNS management access before Phase 1 deployment.
## Open Questions for the User

1. **Hosting budget:** Vercel Pro ($20/mo) + Supabase Pro ($25/mo) = $45/mo minimum. Is this approved? If not, what is the hard ceiling?
2. **AI blog review workflow:** Start with mandatory human review (recommended for first 3 months) or fully autonomous from day one?
3. **Case study content:** Do you have 3-6 client success stories with permission to publish? These are critical for D5 (case studies) and for feeding the AI blog engine company-specific context.
4. **GA4/Search Console:** Are these set up for cinthamani.com? If not, when will credentials be available?
5. **Domain access:** Who controls cinthamani.com DNS? Needed for Vercel deployment and email configuration.
6. **Team photos/bios:** Available for the About page and blog author attribution (important for E-E-A-T signals)?
7. **WhatsApp Business number:** Is there a dedicated business number, or should this use the main office line?
8. **Priority between Apple retail and broadcast:** Equal weight confirmed in PROJECT.md, but which vertical should the first 3 case studies cover?

## Budget Implications

| Item | Cost | Frequency | Required |
|------|------|-----------|----------|
| Vercel Pro | $20/month | Monthly | Yes -- commercial use requires Pro |
| Supabase Pro | $25/month | Monthly | Yes -- free tier insufficient for production |
| AI API (Gemini paid) | $5-10/month | Monthly | Recommended -- free tier unreliable |
| Domain renewal | ~$12/year | Annual | If not already owned |
| **Total minimum** | **$45/month** | Monthly | Non-negotiable |
| **Total recommended** | **$50-55/month** | Monthly | Includes AI reliability buffer |

Development cost is separate and not estimated here. The above covers only infrastructure.

## Sources

### Primary (HIGH confidence)
- [Next.js 16 Blog Post](https://nextjs.org/blog/next-16) -- framework version, features, breaking changes
- [Supabase Server-Side Auth for Next.js](https://supabase.com/docs/guides/auth/server-side/nextjs) -- auth cookie handling, client configuration
- [Supabase RLS Documentation](https://supabase.com/docs/guides/auth/row-level-security) -- security policies
- [Vercel Pricing / Fair Use](https://vercel.com/pricing) -- commercial use restrictions, plan limits
- [Gemini API Rate Limits](https://ai.google.dev/gemini-api/docs/rate-limits) -- free tier quotas
- [Groq Rate Limits](https://console.groq.com/docs/rate-limits) -- fallback provider limits
- [Tailwind CSS 4.2 Release](https://www.infoq.com/news/2026/04/tailwind-css-4-2-webpack/) -- current version confirmation
- [Motion (formerly Framer Motion)](https://motion.dev/) -- animation library rename and API

### Secondary (MEDIUM confidence)
- [B2B Lead Generation Trends 2026 - Leadinfo](https://www.leadinfo.com/en/blog/b2b-lead-generation-trends-in-2026-the-7-channels-and-tactics-that-actually-work/) -- feature prioritization
- [GEO Complete Guide 2026 - Enrich Labs](https://www.enrichlabs.ai/blog/generative-engine-optimization-geo-complete-guide-2026) -- GEO optimization patterns
- [Google March 2026 Core Update - ALM Corp](https://almcorp.com/blog/google-march-2026-core-update/) -- AI content quality requirements
- [Tiptap vs Lexical vs Slate 2026 - PkgPulse](https://www.pkgpulse.com/blog/tiptap-vs-lexical-vs-slate-vs-quill-rich-text-editor-2026) -- editor comparison
- Competitor websites: Sniper, RGB, SRSG, Data Logics, Ideal Systems -- feature gap analysis

### Tertiary (LOW confidence)
- HuggingFace Inference free tier limits -- documentation sparse, cold start times variable
- ROI calculator pipeline revenue claim (51.3% - Salesforce/Drift study) -- single source, not independently verified
- Supabase free tier pausing behavior during development gaps -- documented but edge case

---
*Research completed: 2026-04-13*
*Ready for roadmap: yes*