import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'vital' | 'gold' | 'neutral' | 'new' | 'success' | 'warning';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'primary', size = 'md', dot = false, className, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center gap-1.5 font-medium rounded-full';

    const variantClasses = {
      primary: 'bg-heal-light text-heal',
      vital: 'bg-vital-light text-vital',
      gold: 'bg-gold-light text-ink',
      neutral: 'bg-cloud text-ink-muted',
      new: 'bg-heal text-snow animate-pulse-subtle',
      success: 'bg-emerald-100 text-emerald-700',
      warning: 'bg-amber-100 text-amber-700',
    };

    const sizeClasses = {
      sm: 'px-2 py-0.5 text-caption',
      md: 'px-3 py-1 text-caption',
    };

    return (
      <span ref={ref} className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props}>
        {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';