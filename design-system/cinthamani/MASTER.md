# Cinthamani Design System (Apple-Inspired + Trust & Authority)

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Cinthamani Computer Pvt. Ltd.
**Generated:** 2026-04-13
**Category:** B2B Enterprise / Broadcast & IT Solutions
**Design Philosophy:** Apple-inspired minimalism merged with Trust & Authority enterprise style. Cinematic product showcases + lead-generation conversion focus. Mobile-first.

---

## Design Philosophy

Controlled drama with enterprise trust. Vast expanses of pure black and warm stone serve as cinematic backdrops. The interface retreats until it becomes invisible — every pixel exists in service of the product and the 40-year legacy. Not minimalism as trend; minimalism as authority.

---

## Color Palette

### Primary Colors (Apple-Cinthamani Fusion)

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Pure Black | `#000000` | `--color-black` | Hero backgrounds, immersive product showcases |
| Near Black | `#1d1d1f` | `--color-near-black` | Primary text on light backgrounds |
| Light Gray | `#f5f5f7` | `--color-light-gray` | Alternate section backgrounds |
| White | `#ffffff` | `--color-white` | Text on dark backgrounds |
| Cinthamani Gold | `#CA8A04` | `--color-cta` | Primary CTA, accent, brand identity |
| Interactive Blue | `#0071e3` | `--color-interactive` | Interactive elements, links, focus states |
| Link Blue (light bg) | `#0066cc` | `--color-link` | Inline text links on light backgrounds |
| Link Blue (dark bg) | `#2997ff` | `--color-link-dark` | Links on dark backgrounds |

### Text Colors

| Role | Value | Usage |
|------|-------|-------|
| Primary (light bg) | `#1d1d1f` | Heading and body text on light |
| Primary (dark bg) | `#ffffff` | All text on dark backgrounds |
| Secondary (light bg) | `rgba(0, 0, 0, 0.8)` | Body text, nav items on light |
| Tertiary | `rgba(0, 0, 0, 0.48)` | Disabled, captions |

### Surface Colors

| Role | Hex | Usage |
|------|-----|-------|
| Dark Surface 1 | `#272729` | Card backgrounds in dark sections |
| Dark Surface 2 | `#262628` | Subtle surface variation |
| Dark Surface 3 | `#28282a` | Elevated cards on dark |
| Button Active | `#ededf2` | Active/pressed state |
| Overlay | `rgba(210, 210, 215, 0.64)` | Media controls, overlays |

### Section Rhythm
- **Dark sections**: `#000000` background — immersive, premium product showcases
- **Light sections**: `#f5f5f7` background — informational, lead-gen forms
- **Gold accents**: `#CA8A04` — CTAs, trust badges, key metrics only
- Alternating dark/light creates cinematic pacing

---

## Typography

### Font Families
- **Display (20px+)**: `SF Pro Display`, fallback: `Lexend, Helvetica Neue, Arial, sans-serif`
- **Body (<20px)**: `SF Pro Text`, fallback: `Source Sans 3, Helvetica Neue, Arial, sans-serif`
- **Google Fonts fallback**: `Lexend` (headings) + `Source Sans 3` (body)

```css
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');
```

### Type Scale

| Role | Size | Weight | Line Height | Letter Spacing | Usage |
|------|------|--------|-------------|----------------|-------|
| Display Hero | 56px / 3.5rem | 600 | 1.07 | -0.28px | Hero headlines |
| Section Heading | 40px / 2.5rem | 600 | 1.10 | normal | Feature section titles |
| Tile Heading | 28px / 1.75rem | 400 | 1.14 | 0.196px | Product tile headlines |
| Card Title | 21px / 1.31rem | 700 | 1.19 | 0.231px | Bold card headings |
| Sub-heading | 21px / 1.31rem | 400 | 1.19 | 0.231px | Regular card headings |
| Body | 17px / 1.06rem | 400 | 1.47 | -0.374px | Standard reading text |
| Body Emphasis | 17px / 1.06rem | 600 | 1.24 | -0.374px | Labels, emphasized text |
| Button | 17px / 1.06rem | 400 | 1.00 | normal | Button text |
| Link/Caption | 14px / 0.88rem | 400 | 1.43 | -0.224px | Links, "Learn more" |
| Micro | 12px / 0.75rem | 400 | 1.33 | -0.12px | Fine print, footnotes |

### Typography Principles
- Negative letter-spacing at ALL sizes (Apple hallmark)
- Extreme line-height range: 1.07 headlines to 1.47 body
- Weight restraint: most text at 400/600, max 700
- Body minimum 16px on mobile (accessibility)

---

## Component Specs

### Buttons

**Primary CTA (Gold)**
```css
.btn-primary {
  background: #CA8A04;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 17px;
  transition: all 200ms ease;
  cursor: pointer;
}
.btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
```

**Secondary CTA (Dark)**
```css
.btn-secondary {
  background: #1d1d1f;
  color: #ffffff;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 400;
  transition: all 200ms ease;
  cursor: pointer;
}
```

**Pill Link (Learn More / Explore)**
```css
.btn-pill {
  background: transparent;
  color: #0066cc;
  border: 1px solid #0066cc;
  border-radius: 980px;
  padding: 8px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 200ms ease;
}
.btn-pill--dark { color: #2997ff; border-color: #2997ff; }
```

### Cards
```css
.card {
  background: #f5f5f7;
  border-radius: 8px;
  padding: 24px;
  border: none;
  transition: all 200ms ease;
  cursor: pointer;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 3px 5px 30px 0px;
  transform: translateY(-2px);
}
```

### Navigation (Glass)
```css
.nav {
  position: sticky;
  top: 0;
  height: 48px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  z-index: 50;
}
.nav-link { font-size: 12px; font-weight: 400; color: #ffffff; }
```

### Inputs
```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 11px;
  font-size: 16px;
  transition: border-color 200ms ease;
}
.input:focus {
  border-color: #0071e3;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.12);
}
```

---

## Layout Principles

### Spacing System (8px base)
| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight gaps |
| sm | 8px | Icon gaps, inline spacing |
| md | 16px | Standard padding |
| lg | 24px | Section padding |
| xl | 32px | Large gaps |
| 2xl | 48px | Section margins |
| 3xl | 64px | Hero padding |

### Grid & Container
- Max content width: 980px
- Hero: full-viewport-width sections, centered content
- Product grids: 2-3 columns within centered container
- Single-column for hero moments

### Border Radius Scale
| Level | Value | Usage |
|-------|-------|-------|
| Micro | 5px | Small containers, tags |
| Standard | 8px | Buttons, cards |
| Comfortable | 11px | Search inputs, filters |
| Large | 12px | Feature panels, images |
| Full Pill | 980px | CTA links, navigation pills |
| Circle | 50% | Media controls |

### Shadows
| Level | Value | Usage |
|-------|-------|-------|
| None | — | Default: most elements flat |
| Card Lift | `rgba(0,0,0,0.22) 3px 5px 30px 0px` | Product cards, hover states |
| Navigation | `backdrop-filter: saturate(180%) blur(20px)` | Sticky nav glass |
| Focus | `2px solid #0071e3` | Keyboard focus ring |

---

## Responsive Breakpoints (Mobile-First)

| Name | Width | Changes |
|------|-------|---------|
| Mobile | <480px | Single column, 40px headings |
| Mobile Large | 480-640px | Wider single column |
| Tablet | 640-834px | 2-column grids |
| Tablet Large | 834-1024px | Full tablet layout |
| Desktop | 1024-1440px | Full layout, max content |
| Large Desktop | >1440px | Centered with generous margins |

### Mobile-First Rules
- Start with mobile styles, enhance with breakpoints
- Min 44x44px touch targets
- Min 16px body text
- No horizontal scroll
- Appropriate mobile keyboards (inputmode)
- Test at: 375px, 768px, 1024px, 1440px

---

## Page Structure (Enterprise Gateway Pattern)

### Homepage Sections
1. **Hero** — Video/Mission with bold headline + gold CTA
2. **Solutions by Industry** — Tab switching (Broadcast, Corporate, Education)
3. **Solutions by Product** — Apple products, Storage, Broadcast
4. **Client Logo Carousel** — Trust signals
5. **Case Studies** — Metrics-driven results
6. **Testimonials** — Client quotes with photos
7. **Contact / Get Quote** — Lead capture form
8. **Footer** — Links, certifications, badges

### CTA Strategy
- Primary: "Get a Quote" / "Contact Sales" (Gold CTA)
- Secondary: "Learn More" / "Explore Solutions" (Pill link)
- Sticky CTA on mobile for lead capture

---

## Anti-Patterns (NEVER Use)

- Emojis as icons (use SVG: Heroicons/Lucide/Simple Icons)
- Additional accent colors beyond gold + blue
- Heavy shadows or multiple shadow layers
- Borders on cards (Apple: no visible card borders)
- Wide letter-spacing (SF Pro runs tight)
- Font weight 800/900 (max is 700, rarely)
- Textures, patterns, or gradients on backgrounds
- Opaque navigation (glass blur is essential)
- Center-aligned body text (only headlines center)
- Playful/casual design elements
- Mock data (use real APIs only)

---

## Pre-Delivery Checklist

- [ ] No emojis used as icons (SVG only)
- [ ] All icons from consistent set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover transitions 150-300ms
- [ ] Text contrast 4.5:1 minimum (WCAG AAA)
- [ ] Focus states visible for keyboard nav
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed nav
- [ ] No horizontal scroll on mobile
- [ ] Apple glass nav effect working
- [ ] Gold CTA stands out on both dark and light sections
- [ ] Mobile touch targets >= 44x44px
