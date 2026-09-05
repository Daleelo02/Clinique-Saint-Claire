import React from 'react';
import { Link } from 'astro/client';
import { icons, type IconName } from '@/components/ui/Icons';
import { Card, CardTeaserImage, CardTeaserContent, CardTeaserTitle, CardTeaserDesc } from '@/components/ui';
import { Button } from '@/components/ui';
import { specialties, Specialty } from '@/data/specialties';

interface SpecialtyGridProps {
  specialties?: Specialty[];
  limit?: number;
  showViewAll?: boolean;
  viewAllHref?: string;
  className?: string;
}

const specialtyIcons: Record<string, IconName> = {
  cardiologie: 'heartPulse',
  neurologie: 'brain',
  oncologie: 'shieldCheck',
  orthopedie: 'bone',
  pediatrie: 'baby',
  'gynecologie-obstetrique': 'heartHandshake',
  urgences: 'ambulance',
  'check-up': 'clipboardCheck',
  'medecine-interne': 'stethoscope',
  'radiologie-imagerie': 'scanEye',
  'anesthesie-reanimation': 'droplet',
  urologie: 'flaskConical',
  orl: 'ear',
};

export function SpecialtyGrid({
  specialties: specialtyList = specialties,
  limit = 12,
  showViewAll = true,
  viewAllHref = '/specialites',
  className,
}: SpecialtyGridProps) {
  const displaySpecialties = specialtyList.slice(0, limit);

  return (
    <section className={className} aria-labelledby="specialties-title">
      <div className="container-main">
        <header className="mb-10">
          <h2 id="specialties-title" className="font-display font-bold text-heading-xl text-ink mb-3">
            Nos Spécialités Médicales
          </h2>
          <p className="text-body-lg text-ink-muted max-w-2xl">
            45 spécialités médicales et chirurgicales, 150+ médecins experts au service de votre santé
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" role="list">
          {displaySpecialties.map((specialty, index) => (
            <article
              key={specialty.id}
              className="group"
              role="listitem"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Link href={`/${specialty.slug}`} className="block">
                <Card variant="teaser">
                  <CardTeaserImage className="relative overflow-hidden">
                    <div className="w-full h-full bg-cloud relative" aria-hidden="true">
                      {specialtyIcons[specialty.slug] && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <icons[specialtyIcons[specialty.slug]] className="w-16 h-16 text-heal/30 transition-transform duration-slow group-hover:scale-110" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-snow transform translate-y-full group-hover:translate-y-0 transition-transform duration-normal">
                      <span className="inline-flex items-center gap-1.5 text-label font-medium">
                        Découvrir
                        <icons.arrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </CardTeaserImage>
                  <CardTeaserContent>
                    <div className="flex items-center gap-2 mb-3">
                      {specialtyIcons[specialty.slug] && (
                        <icons[specialtyIcons[specialty.slug]] className="w-5 h-5 text-heal flex-shrink-0" />
                      )}
                      <h3 className="text-heading-sm text-ink font-semibold">{specialty.name}</h3>
                    </div>
                    <p className="text-body-sm text-ink-muted line-clamp-2">{specialty.shortDescription}</p>
                  </CardTeaserContent>
                </Card>
              </Link>
            </article>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-10 text-center animate-fade-in">
            <Button variant="secondary" size="lg" asChild>
              <Link href={viewAllHref}>
                Voir toutes les spécialités
                <icons.arrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

// Specialty Card for use in other contexts
export function SpecialtyCard({ specialty }: { specialty: Specialty }) {
  return (
    <article className="group">
      <Link href={`/${specialty.slug}`} className="block">
        <Card variant="teaser">
          <CardTeaserImage className="relative overflow-hidden">
            <div className="w-full h-full bg-cloud relative" aria-hidden="true">
              {specialtyIcons[specialty.slug] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <icons[specialtyIcons[specialty.slug]] className="w-16 h-16 text-heal/30 transition-transform duration-slow group-hover:scale-110" />
                </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-snow transform translate-y-full group-hover:translate-y-0 transition-transform duration-normal">
              <span className="inline-flex items-center gap-1.5 text-label font-medium">
                En savoir plus
                <icons.arrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </CardTeaserImage>
          <CardTeaserContent>
            <div className="flex items-center gap-2 mb-3">
              {specialtyIcons[specialty.slug] && (
                <icons[specialtyIcons[specialty.slug]] className="w-5 h-5" style={{ color: specialty.color }} />
              )}
              <h3 className="text-heading-sm text-ink font-semibold">{specialty.name}</h3>
            </div>
            <p className="text-body-sm text-ink-muted line-clamp-2">{specialty.shortDescription}</p>
          </CardTeaserContent>
        </Card>
      </Link>
    </article>
  );
}