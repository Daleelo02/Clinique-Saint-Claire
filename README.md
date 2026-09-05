# Hôpital Saint-Claire — Site Web Premium

Site web moderne, accessible et performant pour l'Hôpital Saint-Claire, conçu pour rivaliser avec les meilleurs sites hospitaliers internationaux (benchmark : American Hospital of Paris).

## 🎨 Identité Visuelle

### Palette de Couleurs
| Token | Hex | Usage |
|-------|-----|-------|
| `ink` | `#0D1B2A` | Texte principal, titres |
| `ink-muted` | `#3A4D6B` | Texte secondaire |
| `snow` | `#F8FAFC` | Fond de page |
| `cloud` | `#E8EFF5` | Cartes, séparateurs |
| `heal` | `#00A3A1` | **Accent principal** — CTA, liens, focus |
| `heal-hover` | `#008B89` | Survol CTA |
| `vital` | `#E85D3A` | **Urgences uniquement** — sémantique forte |
| `gold` | `#C8A951` | Badges de confiance, accréditations |

### Typographie
- **Titres (Display)** : **Fraunces** (serif) — poids 700/600/500
- **UI / Corps / Navigation** : **DM Sans** (sans) — poids 400/500/600
- **Données / Labels** : DM Sans 500/600, uppercase + tracking

## 🏗️ Architecture Technique

### Stack
- **Framework** : Astro 4.x (static-first, îles React)
- **Styling** : Tailwind CSS 3.4 + design tokens custom
- **Composants interactifs** : React 18 (îles d'hydratation sélective)
- **Icônes** : Lucide React
- **Utilitaires** : clsx + tailwind-merge

### Structure du Projet
```
src/
├── components/
│   ├── ui/              # Composants atomiques (Button, Card, Badge, Input, Icons)
│   ├── layout/          # Composants de mise en page (NavBar, Footer, Hero)
│   └── features/        # Composants métier (SpecialtyGrid, Pillars, StatsBar, NewsCarousel, CTABanner, AppointmentForm)
├── data/
│   ├── specialties.ts   # 13 spécialités complètes (pathologies, examens, médecins)
│   └── doctors.ts       # 40+ médecins avec profils détaillés
├── layouts/
│   └── BaseLayout.astro # Layout de base avec SEO, i18n, JSON-LD
├── pages/
│   ├── fr/              # Pages français (13+ pages)
│   ├── en/              # Pages anglais
│   ├── ar/              # Pages arabe (RTL)
│   └── pt/              # Pages portugais
├── styles/
│   └── global.css       # Styles globaux + @layer components/utilities
├── utils/
│   └── cn.ts            # Utilitaires (cn, formatDate, slugify, etc.)
└── types/               # Types TypeScript
```

## 📄 Pages Implémentées

### Pages Principales (FR)
| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/fr/` | Hero, piliers, spécialités, stats, actualités, CTA |
| Spécialités (liste) | `/fr/specialites` | Grille 12+ spécialités avec filtres |
| Spécialité (détail) | `/fr/specialites/[slug]` | 13 pages dynamiques (pathologies, examens, médecins, RDV) |
| Prendre RDV | `/fr/rdv` | Formulaire multi-étapes avec validation |
| Annuaire médecins | `/fr/medecins` | Recherche temps réel, filtres spécialité/disponibilité |
| Urgences | `/fr/urgences` | Parcours, horaires, pédiatrie, accès |
| Check-up | `/fr/check-up` | 4 formules, processus, inclus, suite |
| International | `/fr/international` | Services, processus 4 étapes, paiement, garanties |
| Patients | `/fr/patients` | Admission, séjour, droits, portail |
| À propos | `/fr/a-propos` | Histoire, valeurs, gouvernance, qualité, recherche |
| Contact | `/fr/contact` | Formulaire, coordonnées, accès, FAQ |
| Actualités | `/fr/actualites` | Articles, newsletter |

### Pages par Langue
- **Français** (`/fr/`) — 12 pages
- **English** (`/en/`) — 12 pages
- **العربية** (`/ar/`) — 12 pages (RTL)
- **Português** (`/pt/`) — 12 pages

## 🌍 Internationalisation (i18n)

- **Routing** : Préfixe de langue (`/fr/`, `/en/`, `/ar/`, `/pt/`)
- **Locale par défaut** : `fr`
- **hreflang** : Généré automatiquement dans `<head>`
- **RTL** : Support natif pour l'arabe (`dir="rtl"`)
- **Changement de langue** : Sélecteur visible dans la navbar (desktop + mobile)

## ♿ Accessibilité (WCAG 2.1 AA)

- ✅ Skip link (`Aller au contenu principal`)
- ✅ Contraste respecté (ratio ≥ 4.5:1)
- ✅ Focus visible (`ring-2 ring-heal ring-offset-2`)
- ✅ Sémantique HTML5 (`<main>`, `<nav>`, `<article>`, `<aside>`, `<footer>`)
- ✅ ARIA labels sur éléments interactifs
- ✅ `prefers-reduced-motion` respecté
- ✅ Alt text descriptifs
- ✅ Langue déclarée (`lang="fr"`, `lang="ar"` avec `dir="rtl"`)
- ✅ Formulaires accessibles (labels, `aria-invalid`, `aria-describedby`)

## ⚡ Performance

- **Astro static-first** : HTML généré au build, JS minimal
- **Îles React** : Hydratation sélective (`client:load`, `client:visible`)
- **Images** : WebP/AVIF, `srcset` responsive, lazy loading
- **Fonts** : `font-display: swap`, préconnexion Google Fonts
- **CSS** : Tailwind purgé, critical CSS inliné
- **Cibles Core Web Vitals** : LCP < 2.5s, CLS < 0.1, INP < 200ms

## 🚀 Installation & Développement

```bash
# 1. Se placer dans le dossier
cd "/Users/daleel/Desktop/Clinique Saint-Claire"

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Build de production
npm run build

# 5. Prévisualiser le build
npm run preview
```

### Scripts Disponibles
| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur dev (http://localhost:4321) |
| `npm run build` | Build production dans `dist/` |
| `npm run preview` | Aperçu du build production |
| `npm run lint` | ESLint sur .astro, .ts, .tsx |
| `npm run format` | Prettier sur tout le projet |

## 📦 Déploiement

### Vercel (Recommandé)
```bash
npm i -g vercel
vercel --prod
```
- Détection automatique Astro
- i18n routing natif
- Edge Functions pour middleware
- Preview deployments sur PR

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
```

## 🧪 Tests & Qualité

```bash
# Linting
npm run lint

# Formatage
npm run format

# Type checking
npx tsc --noEmit
```

## 📝 Prochaines Étapes (Roadmap)

- [ ] **CMS Headless** : Intégration Sanity.io / Contentful pour contenu éditable
- [ ] **Recherche** : Algolia / Meilisearch pour médecins/spécialités
- [ ] **Portail Patient** : Authentification, dossier médical, messagerie sécurisée
- [ ] **Télémédecine** : Intégration vidéo (Daily.co / Twilio Video)
- [ ] **Analytics** : Matomo / Plausible (RGPD-friendly)
- [ ] **Tests E2E** : Playwright pour parcours critiques (RDV, contact, urgence)
- [ ] **PWA** : Service worker, offline, install prompt
- [ ] **Monitoring** : Sentry pour erreurs, Web Vitals tracking

## 📄 Licence

Propriétaire — Hôpital Saint-Claire. Tous droits réservés.

---

*Construit avec ❤️ pour l'excellence médicale au cœur de vous.*