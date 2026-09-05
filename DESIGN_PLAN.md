# Design Plan: Hôpital Saint-Claire

## Project Overview
A premium hospital website for **Hôpital Saint-Claire** — a modern, patient-centered healthcare institution. The site must feel trustworthy, accessible, and clinically excellent while having a distinct visual identity that doesn't feel templated.

---

## 1. Color System (4–6 Named Hex Values)

| Token | Hex | Role | Usage |
|-------|-----|------|-------|
| `ink` | `#0D1B2A` | Primary text, headings | Deep navy — authoritative, medical, trustworthy |
| `ink-muted` | `#3A4D6B` | Secondary text, descriptions | Softer navy for body copy |
| `snow` | `#F8FAFC` | Page background | Clean, clinical, breathable |
| `cloud` | `#E8EFF5` | Card backgrounds, subtle dividers | Light blue-grey for surface elevation |
| `heal` | `#00A3A1` | Primary CTA, links, accents | Teal — healing, calm, modern medical |
| `heal-hover` | `#008B89` | CTA hover/active | Deeper teal for interaction |
| `vital` | `#E85D3A` | Urgent/emergency accents | Warm coral — only for emergency, alerts |
| `gold` | `#C8A951` | Prestige highlights, badges | Subtle gold for accreditations, heritage |

**Rationale**: Unlike the reference site's navy/teal/gold, we shift the primary accent to a distinctive teal (`heal`) that reads as "healing water" — specific to Saint-Claire's identity. The warm coral `vital` is reserved strictly for emergency/urgent actions, creating semantic color meaning. Gold is restrained, used only for trust badges.

---

## 2. Typography

| Role | Font | Weight/Style | Scale |
|------|------|--------------|-------|
| **Display/Headlines** | **Fraunces** (serif) | 700, 600, 500 | Clamp: `clamp(2rem, 5vw, 4rem)` → `clamp(1.5rem, 3.5vw, 2.5rem)` |
| **UI/Body/Navigation** | **DM Sans** (sans) | 400, 500, 600 | Base: `1rem` (16px), line-height 1.6 |
| **Data/Labels** | **DM Sans** | 500, 600 | Small: `0.875rem`, uppercase + 0.05em tracking |

**Rationale**: Fraunces brings editorial warmth and institutional gravity (serif = heritage/trust) while DM Sans keeps UI crisp and legible. This pairing is distinct from the reference's all-sans approach. Fraunces only for headlines — never for body — maintains hierarchy.

**Type Scale** (modular scale 1.25):
- H1: 4rem / 1.1 lh (mobile: 2.5rem)
- H2: 2.5rem / 1.2 lh (mobile: 1.75rem)
- H3: 1.75rem / 1.3 lh (mobile: 1.375rem)
- Body: 1rem / 1.6 lh
- Small: 0.875rem / 1.5 lh

---

## 3. Layout Concept

### Grid System
- **Desktop**: 12-column, 1200px max-width, 24px gutters
- **Tablet**: 8-column, 720px, 20px gutters
- **Mobile**: 4-column, 100vw, 16px gutters

### Alignment Principle
**Left-aligned by default** for content blocks (reads as clinical, organized). Center-aligned only for:
- Hero headline + subheadline (emotional anchor)
- Section headlines when standalone (no supporting content beside)
- Trust badge rows

### ASCII Wireframes

#### Homepage
```
┌─────────────────────────────────────────────────────────────┐
│  [Skip Link]  LOGO                    [FR] [EN] [AR] [PT]  │
│  ─────────────────────────────────────────────────────────  │
│  NAV: Patients  Specialties  Urgences  Check-up  À propos  │
│       [Portail] [RDV] [Médecins] [Contact]  [Don]          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO (full viewport height, min 600px)                    │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                  Hôpital Saint-Claire               │   │
│  │         L'excellence médicale au cœur de vous       │   │
│  │                                                     │   │
│  │  [Prendre RDV en ligne]    [Urgences : 01 23 45 67] │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  QUICK ACCESS (sticky on scroll, 4 icons + labels)        │
│  [Maternité] [Urgences] [Check-up] [International]         │
├─────────────────────────────────────────────────────────────┤
│  WHY CHOOSE US (3 pillars, icon + title + description)    │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │  Expertise   │ │  Humanité    │ │  Innovation  │       │
│  └──────────────┘ └──────────────┘ └──────────────┘       │
├─────────────────────────────────────────────────────────────┤
│  SPECIALTIES GRID (12 cards, 3×4 desktop, 2×6 tablet, 1×12 mobile) │
│  [Card] [Card] [Card] [Card]                                 │
│  [Card] [Card] [Card] [Card]                                 │
│  [Card] [Card] [Card] [Card]                                 │
│  [Voir toutes les spécialités →]                             │
├─────────────────────────────────────────────────────────────┤
│  STATS BAR (4 numbers, large Fraunces, centered)           │
│  150+ Médecins    45 Spécialités    98% Satisfaction  1923 │
├─────────────────────────────────────────────────────────────┤
│  NEWS / ACTUALITÉS (3 cards horizontal scroll on mobile)  │
│  [Card: image, date, category, title, excerpt]             │
├─────────────────────────────────────────────────────────────┤
│  CTA BANNER (heal background, white text, centered)        │
│  "Besoin d'un avis médical ? Notre équipe vous répond 24/7" │
│  [Contacter un médecin]                                     │
├─────────────────────────────────────────────────────────────┤
│  FOOTER (4 columns + bottom bar)                           │
│  Hôpital  |  Patients  |  Professionnels  |  Nous suivre   │
│  ────────────────────────────────────────────────────────  │
│  © 2025 Hôpital Saint-Claire  |  Mentions  |  RGPD  | Plan │
└─────────────────────────────────────────────────────────────┘
```

#### Specialty Page
```
┌─────────────────────────────────────────────────────────────┐
│  HEADER (same as homepage)                                  │
├─────────────────────────────────────────────────────────────┤
│  HERO: Specialty name + one-line description + [RDV] [Tel] │
├─────────────────────────────────────────────────────────────┤
│  CONTENT GRID (2/3 + 1/3)                                  │
│  ┌────────────────────────┐ ┌────────────────────────────┐ │
│  │ Description complète   │ │ MEDECINS (vertical cards)  │ │
│  │ Pathologies traitées   │ │ [Photo] Dr. Name           │ │
│  │ Examens proposés       │ │     Spécialité             │ │
│  │                        │ │     [Prendre RDV]          │ │
│  │ Tabs: Équipe / Soins / │ │                            │ │
│  │       Tarifs / Avis    │ │ [Voir tous les médecins]   │ │
│  └────────────────────────┘ └────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Component Architecture

### Core Components (Atomic)
1. **Button** — Primary (heal), Secondary (outline ink), Ghost, Emergency (vital)
2. **Card** — Teaser (image + title + desc + link), Doctor, News, Stat
3. **Input** — Search, Form fields, Select (language, specialty)
4. **Badge** — Accreditation, New, Urgent, Specialty tag
5. **Icon System** — Custom SVG set (medical, UI, social)

### Composite Components
6. **NavBar** — Logo, primary nav, utility actions, language switcher
7. **Hero** — Headline, subheadline, dual CTA, background image
8. **QuickAccess** — 4-icon sticky bar
9. **PillarBlock** — 3-column icon + title + desc
10. **SpecialtyGrid** — Responsive card grid with "View all"
11. **StatBar** — 4 large numbers with labels
12. **NewsCarousel** — Horizontal scroll, category tags
13. **CTABanner** — Full-width colored band
14. **Footer** — 4-column link clusters + bottom bar
15. **DoctorCard** — Photo, name, specialty, CTA
16. **Accordion** — FAQ, tabs on specialty pages
17. **Breadcrumb** — Home > Specialty > Cardiology

---

## 5. Design Principles (What Makes This Unique)

| Principle | Application |
|-----------|-------------|
| **Clinical warmth** | Teal (`heal`) + Fraunces serif = modern medicine with human touch |
| **Semantic color** | `vital` ONLY for emergency — users learn red=crisis instinctively |
| **Left-aligned authority** | Content reads like a medical chart — organized, scannable, trustworthy |
| **One bold moment** | Hero is the only full-viewport, centered element — everything else is structured grid |
| **Language as utility** | 4+ languages in top bar, not buried — international patients are first-class |
| **Action density** | Every page has ≥2 booking paths (online, phone, portal, email) |
| **Trust without clutter** | Accreditations in footer + hero badge only — no badge soup |

---

## 6. Content Strategy

### Voice & Tone
- **Authoritative but warm**: "Nous vous accueillons" not "Bienvenue"
- **Specific over selling**: "45 spécialités, 150 médecins" not "Excellence médicale"
- **Action-oriented CTAs**: "Prendre rendez-vous" not "En savoir plus"
- **Patient-first language**: "Votre dossier" not "Espace patient"

### Key Messages (Homepage)
1. **Headline**: "L'excellence médicale au cœur de vous"
2. **Subheadline**: "Hôpital privé à but non lucratif depuis 1923 — 45 spécialités, 150+ médecins, 98% satisfaction"
3. **Pillars**: Expertise médicale de pointe · Approche humaine personnalisée · Innovation technologique continue
4. **Trust**: "Accrédité HAS · Certifié ISO 9001 · Membre du groupe Saint-Claire Santé"

---

## 7. Accessibility & Performance Targets

- **WCAG 2.1 AA** minimum (contrast ratios, focus states, skip links, ARIA labels)
- **Reduced motion**: `prefers-reduced-motion` disables all non-essential animation
- **Core Web Vitals**: LCP < 2.5s, CLS < 0.1, INP < 200ms
- **Images**: WebP/AVIF, responsive `srcset`, lazy loading below fold
- **Fonts**: `font-display: swap`, subset Fraunces for Latin + Latin-ext only

---

## 8. Technical Stack Recommendation

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | Astro + React islands | Static-first, minimal JS, excellent performance |
| **Styling** | Tailwind CSS + CSS custom properties | Design tokens in config, utility-first, dark mode ready |
| **CMS** | Sanity.io or Contentful | Multilingual, structured content for specialties/doctors/news |
| **Forms** | React Hook Form + Zod | Type-safe validation for appointment booking |
| **Search** | Algolia or Meilisearch | Doctor/specialty search with filters |
| **Deployment** | Vercel or Netlify | Edge functions, preview deployments, i18n routing |

---

## 9. Implementation Phases

| Phase | Deliverable | Est. Effort |
|-------|-------------|-------------|
| 1 | Design tokens + Tailwind config + base components (Button, Card, Input, Badge) | 1 week |
| 2 | Layout components (NavBar, Hero, Footer) + homepage structure | 1 week |
| 3 | Specialty system (grid, detail page, doctor cards, booking integration) | 1.5 weeks |
| 4 | Content pages (News, About, Check-up, International, Patient portal) | 1 week |
| 5 | Multilingual setup (i18n routing, content modeling, 4 languages) | 1 week |
| 6 | Accessibility audit + performance optimization + QA | 0.5 week |
| **Total** | **Production-ready site** | **~6 weeks** |

---

## 10. Differentiation from Reference Site

| Aspect | American Hospital | Hôpital Saint-Claire (Our Choice) |
|--------|-------------------|-----------------------------------|
| **Primary accent** | Teal + Gold | **Heal teal** (single strong accent) + **Vital coral** (semantic emergency) |
| **Typography** | All sans-serif | **Fraunces serif headlines** + DM Sans UI |
| **Hero** | Banner rotator | **Single immersive hero** with dual CTA |
| **Language** | 5 langs in selector | **4 langs in top bar** (FR/EN/AR/PT) — visible, not hidden |
| **Emergency** | Phone in nav | **Sticky vital-colored emergency bar** on all pages |
| **Trust signals** | Badge cluster in hero | **Footer + subtle hero badge** — less clutter |
| **Quick access** | Mobile dropdown | **Sticky 4-icon bar** on all breakpoints |

---

## Next Steps

1. **Confirm design direction** — Review this plan; adjust color/typography if needed
2. **Set up project** — Initialize Astro + Tailwind with design tokens
3. **Build component library** — Storybook or isolated component pages
4. **Develop homepage** — Mobile-first, then scale up
5. **Integrate CMS** — Model specialty, doctor, news content types
6. **Multilingual** — Implement i18n routing and content

---

*Design plan created for Hôpital Saint-Claire — distinct, clinical, warm, and built to exceed the reference benchmark.*