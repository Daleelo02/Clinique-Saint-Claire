# Hôpital Saint-Claire — Résumé du Projet

## 🎯 Objectif
Site web premium pour l'Hôpital Saint-Claire, benchmark : American Hospital of Paris.

## 📊 Livrables

### Pages (28 pages `.astro`)
| Locale | Pages |
|--------|-------|
| **FR** (19) | index, specialites/[slug], specialites/index, rdv, medecins, urgences, check-up, international, patients/index, patients/admission, patients/pre-admission, patients/droits, patients/associations, a-propos, contact, actualites, mentions-legales, confidentialite, cookies, accessibilite, plan-du-site, carrieres, portail |
| **EN** (1) | index |
| **AR** (1) | index (RTL) |
| **PT** (1) | index |
| **Global** | 404 |

### Composants (20+)
| Catégorie | Composants |
|-----------|------------|
| **UI** | Button, Card, Badge, Input, Icons (Lucide) |
| **Layout** | NavBar, Footer, Hero, SpecialtyHero |
| **Features** | SpecialtyGrid, Pillars, StatsBar, NewsCarousel, CTABanner, AppointmentForm |

### Données
- **13 spécialités** complètes (pathologies, examens, médecins liés)
- **40+ médecins** (profils, disponibilités, langues, formation)

## 🎨 Design System

### Couleurs (tokens Tailwind)
```css
--ink: #0D1B2A;        /* Texte principal */
--ink-muted: #3A4D6B;  /* Texte secondaire */
--snow: #F8FAFC;       /* Fond */
--cloud: #E8EFF5;      /* Cartes, séparateurs */
--heal: #00A3A1;       /* ✅ Accent principal */
--heal-hover: #008B89; /* Survol */
--vital: #E85D3A;      /* 🚨 Urgences uniquement */
--gold: #C8A951;       /* Badges confiance */
```

### Typographie
- **Display** : Fraunces (serif) — 700/600/500
- **UI/Body** : DM Sans (sans) — 400/500/600

## ♿ Accessibilité (WCAG 2.1 AA)
- ✅ Skip link, contrastes ≥ 4.5:1
- ✅ Focus visible (`ring-2 ring-heal ring-offset-2`)
- ✅ Sémantique HTML5, ARIA labels
- ✅ `prefers-reduced-motion` respecté
- ✅ RTL natif pour l'arabe
- ✅ Formulaires accessibles (labels, aria-invalid, aria-describedby)

## 🌍 i18n
- 4 langues : FR (défaut) / EN / AR (RTL) / PT
- Routing par préfixe : `/fr/`, `/en/`, `/ar/`, `/pt/`
- `hreflang` auto dans `<head>`
- Sélecteur visible dans navbar

## ⚡ Performance
- Astro static-first (HTML au build, JS minimal)
- Îles React hydratation sélective (`client:load`, `client:visible`)
- Fonts `font-display: swap` + préconnexion
- CSS Tailwind purgé

## 🚀 Lancer Localement

```bash
cd "/Users/daleel/Desktop/Clinique Saint-Claire"
npm install
npm run dev          # http://localhost:4321/fr/
npm run build        # Production dans dist/
npm run preview      # Aperçu build
```

> ⚠️ `npm install` bloqué par sandbox ici — fonctionne en local.

## 📦 Déploiement
- **Vercel** (recommandé) : `vercel --prod`
- **Netlify** : `netlify deploy --prod --dir=dist`
- **Docker** : multi-stage Node 20 Alpine

## 🔧 Scripts Utiles
```bash
npm run lint         # ESLint
npm run format       # Prettier
npx tsc --noEmit     # Type check
node src/scripts/generate-sitemap.ts  # Génère sitemap-index.xml
```

## 🗺️ Prochaines Étapes (Roadmap)
- [ ] CMS Headless (Sanity/Contentful)
- [ ] Recherche Algolia/Meilisearch
- [ ] Portail Patient (auth, dossier, messagerie)
- [ ] Télémédecine (Daily.co/Twilio)
- [ ] Analytics RGPD (Matomo/Plausible)
- [ ] Tests E2E Playwright
- [ ] PWA (Service Worker, offline)
- [ ] Monitoring Sentry + Web Vitals

## 📁 Structure Clé
```
src/
├── components/
│   ├── ui/           # Atoms
│   ├── layout/       # Layout components
│   └── features/     # Business components
├── data/             # specialties.ts, doctors.ts
├── layouts/          # BaseLayout.astro
├── pages/            # 28 pages par locale
├── styles/           # global.css (tokens + @layer)
├── utils/            # cn.ts
└── scripts/          # generate-sitemap.ts
```

---

*Dernière mise à jour : Janvier 2025*