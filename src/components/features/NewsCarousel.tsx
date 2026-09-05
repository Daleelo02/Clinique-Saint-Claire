import React from 'react';
import { Link } from 'astro/client';
import { icons, type IconName } from '@/components/ui/Icons';
import { Card, CardNewsImage, CardNewsContent, CardNewsMeta, CardNewsTitle, CardNewsExcerpt } from '@/components/ui';
import { formatDate } from '@/utils/cn';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  href: string;
  author?: string;
}

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Nouveau Robot Chirurgical Da Vinci X : Une Révolution pour la Chirurgie Mini-Invasive',
    excerpt: "L'Hôpital Saint-Claire s'équipe du dernier système robotique Da Vinci X, offrant une précision inégalée pour les interventions urologiques, gynécologiques et digestives.",
    category: 'Innovation',
    date: '2025-01-15',
    image: '/images/news/da-vinci.jpg',
    href: '/actualites/robot-da-vinci-x',
  },
  {
    id: '2',
    title: 'Ouverture de Notre Nouveau Centre de Check-up Premium',
    excerpt: 'Découvrez notre centre de prévention entièrement repensé : bilans personnalisés, parcours patient fluide, résultats sous 48h et accompagnement sur-mesure.',
    category: 'Nouveauté',
    date: '2025-01-08',
    image: '/images/news/checkup-center.jpg',
    href: '/actualites/nouveau-centre-checkup',
  },
  {
    id: '3',
    title: 'Certification HAS : Score Exceptionnel pour la 3ème fois consécutive',
    excerpt: 'L\'Hôpital Saint-Claire obtient à nouveau la certification Haute Autorité de Santé avec mention "Qualité des soins confirmée", témoignant de l\'excellence de nos pratiques.',
    category: 'Qualité',
    date: '2025-01-03',
    image: '/images/news/certification-has.jpg',
    href: '/actualites/certification-has-2025',
  },
  {
    id: '4',
    title: 'Journée Mondiale du Cancer : Dépistages Gratuits et Conférences',
    excerpt: 'À l\'occasion de la Journée Mondiale du Cancer, notre institut d\'oncologie organise une semaine de sensibilisation avec dépistages gratuits et tables rondes d\'experts.',
    category: 'Événement',
    date: '2024-12-28',
    image: '/images/news/journee-cancer.jpg',
    href: '/actualites/journee-mondiale-cancer',
  },
  {
    id: '5',
    title: 'Nouvelle Unité Neurovasculaire (UNV) Certifiée 24/7',
    excerpt: 'Notre service de neurologie inaugure une unité neurovasculaire de pointe pour la prise en charge ultra-rapide des accidents vasculaires cérébraux.',
    category: 'Service',
    date: '2024-12-20',
    image: '/images/news/unv-neurologie.jpg',
    href: '/actualites/nouvelle-unv',
  },
  {
    id: '6',
    title: 'Programme de Récupération Améliorée Après Chirurgie (RAAC) Étendu',
    excerpt: 'Le protocole RAAC, qui permet une récupération plus rapide et moins douloureuse, est désormais déployé sur 8 nouvelles chirurgies orthopédiques et digestives.',
    category: 'Soins',
    date: '2024-12-15',
    image: '/images/news/raac-etendu.jpg',
    href: '/actualites/raac-etendu',
  },
];

const categoryIcons: Record<string, IconName> = {
  Innovation: 'zap',
  Nouveauté: 'star',
  Qualité: 'award',
  Événement: 'calendar',
  Service: 'building',
  Soins: 'heartHandshake',
};

interface NewsCarouselProps {
  news?: NewsItem[];
  limit?: number;
  showViewAll?: boolean;
  viewAllHref?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function NewsCarousel({
  news = mockNews,
  limit = 3,
  showViewAll = true,
  viewAllHref = '/actualites',
  className,
  title = 'Actualités & Événements',
  subtitle = 'Restez informé de nos dernières innovations, événements et avancées médicales',
}: NewsCarouselProps) {
  const displayNews = news.slice(0, limit);

  return (
    <section className={`py-16 lg:py-24 bg-snow ${className}`} aria-labelledby="news-title">
      <div className="container-main">
        <header className="mb-10">
          <h2 id="news-title" className="font-display font-bold text-heading-xl text-ink mb-3">
            {title}
          </h2>
          <p className="text-body-lg text-ink-muted max-w-2xl">{subtitle}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {displayNews.map((item, index) => (
            <article key={item.id} className="group" role="listitem" style={{ animationDelay: `${index * 100}ms` }}>
              <Link href={item.href} className="block">
                <Card variant="news">
                  <CardNewsImage className="relative overflow-hidden rounded-t-xl">
                    <div className="w-full h-full bg-cloud relative" aria-hidden="true">
                      <icons[categoryIcons[item.category] || 'fileText'] className="absolute top-4 left-4 w-8 h-8 text-heal/30" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-caption font-medium bg-snow/90 backdrop-blur text-ink">
                        {item.category}
                      </span>
                    </div>
                  </CardNewsImage>
                  <CardNewsContent>
                    <CardNewsMeta>
                      <time dateTime={item.date} className="flex items-center gap-1">
                        <icons.calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        {formatDate(item.date)}
                      </time>
                    </CardNewsMeta>
                    <CardNewsTitle>
                      <a href={item.href} className="group-hover:text-heal transition-colors">
                        {item.title}
                      </a>
                    </CardNewsTitle>
                    <CardNewsExcerpt>{item.excerpt}</CardNewsExcerpt>
                    <div className="mt-4 pt-4 border-t border-cloud flex items-center justify-between">
                      <span className="text-caption text-ink-muted flex items-center gap-1">
                        <icons.arrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        Lire l'article
                      </span>
                    </div>
                  </CardNewsContent>
                </Card>
              </Link>
            </article>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-10 text-center">
            <a
              href={viewAllHref}
              className="inline-flex items-center gap-2 text-label font-medium text-ink hover:text-heal transition-colors"
            >
              Voir toutes les actualités
              <icons.arrowRight className="w-5 h-5 transition-transform hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

// Need to import Link from astro/client
// Add at top: import { Link } from 'astro/client';