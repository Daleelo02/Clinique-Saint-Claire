import React from 'react';
import { icons, type IconName } from '@/components/ui/Icons';

interface Pillar {
  icon: IconName;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: 'shieldCheck',
    title: 'Expertise Médicale de Pointe',
    description: '150+ médecins spécialistes, plateau technique de dernière génération, protocoles validés par les sociétés savantes internationales.',
  },
  {
    icon: 'heartHandshake',
    title: 'Approche Humaine Personnalisée',
    description: 'Parcours patient sur-mesure, équipe soignante dédiée, écoute active, respect de vos choix et de votre dignité.',
  },
  {
    icon: 'zap',
    title: 'Innovation Technologique Continue',
    description: 'Chirurgie robotique, imagerie 3T, télémédecine, intelligence artificielle au service du diagnostic et du traitement.',
  },
];

interface PillarsProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export function Pillars({ className, title = 'Pourquoi Choisir Hôpital Saint-Claire ?', subtitle }: PillarsProps) {
  return (
    <section className={`py-16 lg:py-24 bg-snow ${className}`} aria-labelledby="pillars-title">
      <div className="container-main">
        <header className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="pillars-title" className="font-display font-bold text-heading-xl text-ink mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-body-lg text-ink-muted">{subtitle}</p>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="group text-center p-6 lg:p-8 rounded-2xl bg-surface hover:shadow-card-hover transition-all duration-normal"
              role="listitem"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-normal group-hover:scale-110"
                style={{ backgroundColor: 'rgba(0, 163, 161, 0.1)' }}
                aria-hidden="true"
              >
                <icons[pillar.icon] className="w-8 h-8 text-heal" />
              </div>
              <h3 className="font-display font-semibold text-heading-md text-ink mb-3">
                {pillar.title}
              </h3>
              <p className="text-body text-ink-muted leading-relaxed">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}