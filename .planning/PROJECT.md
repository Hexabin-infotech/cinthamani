# Cinthamani Website Revamp

## What This Is

A complete, production-ready website revamp for cinthamani.com — transforming it from a basic brochure site into a lead-generation engine for Cinthamani Computer Pvt. Ltd., a 40-year-old Chennai-based broadcast & IT solutions company. The site will feature an Apple-inspired mobile-first design, a custom React-based CMS admin panel (WordPress-like content editing), autonomous AI blog posting, and fully automated SEO/GEO/lead-generation modules. Equal weight given to Apple product retail for corporates and broadcast/post-production solutions.

## Core Value

The website must convert visitors into qualified leads. Every design decision, every page, every feature exists to make a potential client contact Cinthamani. If the admin panel breaks, the blog plugin stalls, or analytics go down — the public site must still capture leads.

## Requirements

### Validated

(None yet — ship to validate)

### Active

**Public Website:**
- [ ] Apple-inspired mobile-first design (DESIGN.md + Trust & Authority style)
- [ ] Ultra-responsive: 375px → 1440px+ with cinematic product showcases
- [ ] Pages: Home, About, Solutions (Broadcast, IT/Apple, Storage/Content Mgmt, Wedding, Cable TV), Products, Case Studies, Blog, Contact, Partners
- [ ] SEO-optimized (meta tags, structured data, semantic HTML, sitemap, robots.txt)
- [ ] GEO-optimized (Chennai local SEO, schema markup for local business)
- [ ] Lead capture forms (Get a Quote, Schedule Demo, Download Brochure) with real backend
- [ ] Client logo carousel (35 partners), testimonials, trust badges, certifications
- [ ] WhatsApp Business live chat widget
- [ ] Apple glass navigation (translucent dark + blur)
- [ ] Alternating dark/light cinematic sections
- [ ] All real content from cinthamani.com (scraped and stored in .planning/scraped-content.md)
- [ ] NO mock data anywhere

**Admin Panel (CMS):**
- [ ] Separate admin dashboard at /admin
- [ ] Edit any text on any page (inline or form-based)
- [ ] Add/remove/reorder page sections
- [ ] Image upload and management
- [ ] Portfolio/project management (CRUD)
- [ ] Blog post editor (rich text, images, SEO fields, scheduling)
- [ ] Team member management
- [ ] Testimonial management
- [ ] Client logo/partner management
- [ ] User authentication for admin access

**Analytics Dashboard (in Admin):**
- [ ] Website traffic dashboard (real API — connect later, build hooks now)
- [ ] SEO performance metrics display
- [ ] GEO analytics (visitor locations)
- [ ] Form submission tracking and lead pipeline view
- [ ] All digital marketing analytics in one dashboard

**Autonomous Blog Plugin:**
- [ ] AI-powered automatic daily blog posting
- [ ] Topics: broadcast trends, OTT, Apple enterprise, storage, industry news
- [ ] SEO-optimized posts (keywords, meta descriptions, internal linking)
- [ ] Scheduling system (daily cadence)
- [ ] Multiple AI provider fallbacks: Gemini free tier → Groq free tier → HuggingFace
- [ ] Admin review/approve/edit or fully autonomous mode

**Autonomous SEO Module:**
- [ ] Auto-generate meta tags, schema markup per page
- [ ] Keyword tracking and suggestions
- [ ] Internal linking optimization
- [ ] Sitemap auto-generation
- [ ] Search Console integration hooks (connect later)

**Autonomous GEO Module:**
- [ ] Local SEO automation for Chennai
- [ ] Google Business Profile integration hooks
- [ ] Location-based content optimization

**Organic Lead Generation Module:**
- [ ] Smart contact forms with lead scoring (Hot/Warm/Cold)
- [ ] Automated email follow-up sequence hooks (CRM-ready: HubSpot/Zoho)
- [ ] Exit-intent popups
- [ ] Content-gated lead magnets (download brochure, whitepaper)

### Out of Scope

- Payment processing / e-commerce checkout — not an online store
- Real-time chat beyond WhatsApp widget — too complex for v1
- Mobile native app — web-first, mobile-responsive
- Multi-language support — English only for v1
- Video hosting / streaming platform — link to external platforms
- CRM implementation itself — build integration hooks only

## Context

**Company:** Cinthamani Computer Pvt. Ltd., est. 1984, Chennai. 40+ years in broadcast & IT. Apple Authorized Reseller. 35 technology partners. 3 offices (Chennai, USA, Dubai). Proprietary products: TransLogger, PlayCast Pro, TransMaster, TimeShift Streamer, TransVTR, Channel Magick.

**Business Problem:** Revenue at Rs. 5-15 Cr while competitors (Sniper Rs. 135 Cr, Data Logics Rs. 292 Cr) dominate. Core issue is digital invisibility — the market discovers vendors online, and Cinthamani is nowhere to be found.

**Competitor Landscape:**
- Sniper Systems: 7 cities, GA4/GTM tracking, JS-heavy site
- RGB Broadcasting: Cochin HQ, Bootstrap template, MailPoet email, basic
- SRSG: Apple store clone, corporate buyer registration, 200+ employees
- Data Logics: Rs. 292 Cr, JS-rendered (fails without JS), Apple specialist

**Design Direction:** Apple-inspired (DESIGN.md in project root) + Trust & Authority style. Colors: Black/Light Gray/Gold CTA/Blue interactive. Typography: SF Pro Display/Text with Lexend/Source Sans 3 fallbacks. Glass navigation. Mobile-first, ultra-responsive. Design must be visually superior to ALL four competitors.

**Real Content:** All service descriptions, partner names, contact info, product details scraped from current cinthamani.com and saved in .planning/scraped-content.md.

**Target Market:** Broadcast companies, TV channels, production houses, cable MSOs, OTT startups, corporates needing Apple/storage, educational institutions.

**SEO Keywords:** broadcast solutions India/Chennai, TV playout automation, OTT platform setup India, Apple for enterprise India, storage solutions broadcast, content management broadcast, post-production studio setup.

## Constraints

- **Tech Stack:** Next.js (SSR for SEO), Tailwind CSS, Supabase (PostgreSQL + Auth), Vercel deployment
- **AI Blog:** Free AI providers only (Gemini free tier → Groq → HuggingFace fallback chain)
- **Analytics:** Build dashboard hooks now, connect real APIs (GA4, Search Console) later — user will provide keys
- **No Mock Data:** Every piece of content must be real (from scraped site) or clearly marked as "placeholder — needs client input"
- **Design:** Must follow DESIGN.md (Apple) + design-system/cinthamani/MASTER.md
- **Mobile-First:** Design and build mobile layouts first, enhance for desktop
- **Budget:** Rs. 2L/month marketing budget (for the business, not the build)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js over plain React | SSR critical for SEO — core business need is visibility | — Pending |
| Supabase over Firebase | User already has Supabase MCP connected, PostgreSQL is more flexible | — Pending |
| Free AI providers for blog | User explicitly requested free tools; Gemini/Groq/HF all have free tiers | — Pending |
| Apple design + Gold accent | Matches Apple reseller identity + gold conveys 40-year premium legacy | — Pending |
| Custom CMS over headless CMS | User wants WordPress-like editing in React; Strapi/Sanity would add dependency | — Pending |
| Equal weight Apple + Broadcast | User confirmed both revenue streams are equally important | — Pending |
| Build analytics hooks first | GA4/Search Console not set up yet; build the integration points, connect later | — Pending |

---
*Last updated: 2026-04-13 after initialization*
