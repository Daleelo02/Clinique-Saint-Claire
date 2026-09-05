import React from 'react';
import { icons, type IconName } from '@/components/ui/Icons';
import { Button } from '@/components/ui';

interface CTABannerProps {
  title: string;
  description?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  variant?: 'heal' | 'vital' | 'ink' | 'gradient';
  className?: string;
  icon?: IconName;
}

export function CTABanner({
  title,
  description,
  ctaPrimary = { label: 'Nous Contacter', href: '/contact' },
  ctaSecondary = { label: 'Prendre RDV', href: '/rdv' },
  variant = 'heal',
  className,
  icon,
}: CTABannerProps) {
  const variantStyles = {
    heal: 'bg-heal text-snow',
    vital: 'bg-vital text-snow',
    ink: 'bg-ink text-snow',
    gradient: 'bg-gradient-heal text-snow',
  };

  return (
    <section
      className={`${variantStyles[variant]} py-12 lg:py-16 ${className}`}
      aria-labelledby="cta-title"
    >
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          {icon && (
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} aria-hidden="true">
              <icons[icon] className="w-7 h-7" />
            </div>
          )}
          <h2 id="cta-title" className="font-display font-bold text-heading-xl mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-body-lg opacity-90 mb-8 max-w-xl mx-auto">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant={variant === 'vital' ? 'vital' : 'secondary'} asChild className="w-full sm:w-auto">
              <a href={ctaPrimary.href}>
                {ctaPrimary.label}
                <icons.arrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild className="w-full sm:w-auto hover:bg-snow/20 text-snow hover:text-snow">
              <a href={ctaSecondary.href}>
                {ctaSecondary.label}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}