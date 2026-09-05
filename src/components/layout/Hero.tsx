import React from 'react';
import { icons, type IconName } from '@/components/ui/Icons';
import { Button } from '@/components/ui';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string; variant?: 'secondary' | 'vital' };
  stats?: Array<{ value: string; label: string }>;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  ctaPrimary = { label: 'Prendre rendez-vous en ligne', href: '/rdv' },
  ctaSecondary = { label: 'Urgences : 01 23 45 67 89', href: '/urgences', variant: 'vital' },
  stats,
  className,
}: HeroProps) {
  return (
    <section
      className={`relative min-h-[600px] lg:min-h-[700px] flex items-center ${className}`}
      aria-labelledby="hero-title"
      role="banner"
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      )}

      {/* Fallback Gradient Background */}
      {!backgroundImage && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-ink via-ink/90 to-ink/80" aria-hidden="true">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\' fill=\'%23ffffff\' fill-opacity=\'0.03\'/%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-heal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-heal/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-main relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-snow/10 backdrop-blur-glass border border-snow/20 mb-6 animate-fade-in">
            <icons.shieldCheck className="w-5 h-5 text-heal" aria-hidden="true" />
            <span className="text-body-sm font-medium text-snow">Hôpital privé à but non lucratif depuis 1923</span>
          </div>

          {/* Title */}
          <h1
            id="hero-title"
            className="font-display font-bold text-display-lg text-snow mb-6 leading-tight text-balance animate-slide-up"
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg text-snow/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Button size="lg" variant="primary" asChild className="w-full sm:w-auto">
              <a href={ctaPrimary.href}>
                {ctaPrimary.label}
                <icons.arrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant={ctaSecondary.variant || 'vital'} asChild className="w-full sm:w-auto">
              <a href={ctaSecondary.href}>
                <icons.phone className="w-5 h-5 mr-2" aria-hidden="true" />
                {ctaSecondary.label}
              </a>
            </Button>
          </div>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '300ms' }} role="list" aria-label="Chiffres clés">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center" role="listitem">
                  <div className="font-display font-bold text-stat text-heal mb-1">
                    {stat.value}
                  </div>
                  <div className="text-label text-snow/70 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-snow/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-snow rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Specialized Hero for Specialty Pages
interface SpecialtyHeroProps {
  specialtyName: string;
  shortDescription: string;
  icon: IconName;
  color: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  breadcrumbs?: Array<{ label: string; href: string }>;
}

export function SpecialtyHero({
  specialtyName,
  shortDescription,
  icon,
  color,
  ctaPrimary = { label: 'Prendre rendez-vous', href: '/rdv' },
  ctaSecondary = { label: 'Appeler le service', href: 'tel:0123456789' },
  breadcrumbs,
}: SpecialtyHeroProps) {
  return (
    <section className="relative py-16 lg:py-24 bg-snow" aria-labelledby="specialty-title">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-heal-light/50 to-transparent" aria-hidden="true" />

      <div className="container-main relative">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="mb-6" aria-label="Fil d'Ariane">
            <ol className="flex items-center gap-2 text-caption text-ink-muted" role="list">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && <icons.chevronRight className="w-4 h-4 text-ink-muted/50" aria-hidden="true" />}
                  <a href={crumb.href} className="hover:text-heal transition-colors">{crumb.label}</a>
                </li>
              ))}
              <li className="text-ink font-medium" aria-current="page">{specialtyName}</li>
            </ol>
          </nav>
        )}

        <div className="max-w-4xl">
          <div className="flex items-start gap-6 mb-6">
            <div
              className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${color}15` }}
              aria-hidden="true"
            >
              <icons[icon] className="w-8 h-8" style={{ color }} />
            </div>
            <div>
              <h1 id="specialty-title" className="font-display font-bold text-display-sm text-ink mb-2">
                {specialtyName}
              </h1>
              <p className="text-body-lg text-ink-muted">{shortDescription}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="primary" asChild>
              <a href={ctaPrimary.href}>
                {ctaPrimary.label}
                <icons.arrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href={ctaSecondary.href}>
                <icons.phone className="w-5 h-5 mr-2" aria-hidden="true" />
                {ctaSecondary.label}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}