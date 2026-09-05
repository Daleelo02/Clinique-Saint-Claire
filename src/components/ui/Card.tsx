import React from 'react';
import { cn } from '@/utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover' | 'teaser' | 'doctor' | 'news' | 'stat';
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', className, ...props }, ref) => {
    const variantClasses = {
      default: 'bg-surface rounded-xl shadow-card',
      hover: 'bg-surface rounded-xl shadow-card transition-all duration-normal hover:shadow-card-hover hover:-translate-y-1',
      teaser: 'bg-surface rounded-xl shadow-card overflow-hidden group',
      doctor: 'bg-surface rounded-xl shadow-card transition-all duration-normal hover:shadow-card-hover hover:-translate-y-1 text-center p-6',
      news: 'bg-surface rounded-xl shadow-card transition-all duration-normal hover:shadow-card-hover hover:-translate-y-1 flex flex-col h-full',
      stat: 'bg-surface rounded-xl p-6 text-center',
    };

    return (
      <div
        ref={ref}
        className={cn(variantClasses[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Teaser Card Sub-components
export const CardTeaserImage = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('aspect-[4/3] w-full object-cover transition-transform duration-slow group-hover:scale-105', className)}
      {...props}
    >
      {children}
    </div>
  )
);
CardTeaserImage.displayName = 'CardTeaserImage';

export const CardTeaserContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
  )
);
CardTeaserContent.displayName = 'CardTeaserContent';

export const CardTeaserTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-heading-md text-ink mb-2 group-hover:text-heal transition-colors duration-fast', className)} {...props}>
      {children}
    </h3>
  )
);
CardTeaserTitle.displayName = 'CardTeaserTitle';

export const CardTeaserDesc = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-body-sm text-ink-muted line-clamp-2', className)} {...props} />
  )
);
CardTeaserDesc.displayName = 'CardTeaserDesc';

// Doctor Card Sub-components
export const CardDoctorImage = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-cloud', className)} {...props}>
      {children}
    </div>
  )
);
CardDoctorImage.displayName = 'CardDoctorImage';

export const CardDoctorName = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-heading-sm text-ink mb-1', className)} {...props}>
      {children}
    </h3>
  )
);
CardDoctorName.displayName = 'CardDoctorName';

export const CardDoctorSpecialty = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-body-sm text-ink-muted mb-4', className)} {...props} />
  )
);
CardDoctorSpecialty.displayName = 'CardDoctorSpecialty';

// News Card Sub-components
export const CardNewsImage = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('aspect-[16/9] w-full object-cover', className)} {...props}>
      {children}
    </div>
  )
);
CardNewsImage.displayName = 'CardNewsImage';

export const CardNewsContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-5 flex flex-col flex-1', className)} {...props} />
  )
);
CardNewsContent.displayName = 'CardNewsContent';

export const CardNewsMeta = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center gap-2 text-caption text-ink-muted mb-2', className)} {...props}>
      {children}
    </div>
  )
);
CardNewsMeta.displayName = 'CardNewsMeta';

export const CardNewsTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-heading-sm text-ink mb-2 group-hover:text-heal transition-colors duration-fast flex-1', className)} {...props}>
      {children}
    </h3>
  )
);
CardNewsTitle.displayName = 'CardNewsTitle';

export const CardNewsExcerpt = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-body-sm text-ink-muted line-clamp-3', className)} {...props} />
  )
);
CardNewsExcerpt.displayName = 'CardNewsExcerpt';

// Stat Card Sub-components
export const CardStatValue = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('text-stat text-heal font-display mb-1', className)} {...props}>
      {children}
    </div>
  )
);
CardStatValue.displayName = 'CardStatValue';

export const CardStatLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('text-label text-ink-muted uppercase tracking-wider', className)} {...props}>
      {children}
    </div>
  )
);
CardStatLabel.displayName = 'CardStatLabel';