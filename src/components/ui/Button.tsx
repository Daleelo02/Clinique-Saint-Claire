import React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'vital';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      className,
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
      primary: 'bg-heal text-snow hover:bg-heal-hover focus-visible:ring-heal active:scale-[0.98]',
      secondary: 'bg-transparent border-2 border-ink text-ink hover:bg-ink hover:text-snow focus-visible:ring-ink active:scale-[0.98]',
      ghost: 'bg-transparent text-ink hover:bg-cloud focus-visible:ring-ink active:scale-[0.98]',
      vital: 'bg-vital text-snow hover:bg-vital-hover focus-visible:ring-vital active:scale-[0.98]',
    };

    const sizeClasses = {
      sm: 'px-4 py-2 text-caption',
      md: 'px-6 py-3 text-label',
      lg: 'px-8 py-4 text-body-lg',
      icon: 'p-3 rounded-xl',
    };

    const widthClasses = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], widthClasses, className)}
        disabled={disabled || loading}
        style={style}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {!loading && icon && iconPosition === 'left' && <span aria-hidden="true">{icon}</span>}
        <span>{children}</span>
        {!loading && icon && iconPosition === 'right' && <span aria-hidden="true">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';