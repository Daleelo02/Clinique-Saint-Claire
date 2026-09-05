import React from 'react';
import { icons, type IconName } from '@/components/ui/Icons';

interface Stat {
  value: string;
  label: string;
  icon?: IconName;
}

const defaultStats: Stat[] = [
  { value: '150+', label: 'Médecins Experts', icon: 'userCheck' },
  { value: '45', label: 'Spécialités Médicales', icon: 'stethoscope' },
  { value: '98%', label: 'Satisfaction Patients', icon: 'heart' },
  { value: '1923', label: 'Année de Fondation', icon: 'award' },
];

interface StatsBarProps {
  stats?: Stat[];
  className?: string;
  variant?: 'default' | 'dark' | 'heal';
}

export function StatsBar({ stats = defaultStats, className, variant = 'default' }: StatsBarProps) {
  const variantClasses = {
    default: 'bg-snow',
    dark: 'bg-ink',
    heal: 'bg-heal',
  };

  const textColors = {
    default: { value: 'text-heal', label: 'text-ink-muted' },
    dark: { value: 'text-heal', label: 'text-snow/70' },
    heal: { value: 'text-snow', label: 'text-snow/80' },
  };

  return (
    <section
      className={`${variantClasses[variant]} py-12 lg:py-16 ${className}`}
      aria-labelledby="stats-title"
      role="region"
      aria-label="Chiffres clés"
    >
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12" role="list">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              role="listitem"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {stat.icon && (
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 mx-auto" style={{ backgroundColor: variant === 'heal' ? 'rgba(255,255,255,0.15)' : 'rgba(0, 163, 161, 0.1)' }}>
                  <icons[stat.icon] className="w-6 h-6" style={{ color: variant === 'heal' ? '#FFFFFF' : '#00A3A1' }} />
                </div>
              )}
              <div className={`font-display font-bold text-stat mb-1 ${textColors[variant].value}`}>
                {stat.value}
              </div>
              <div className={`text-label uppercase tracking-wider ${textColors[variant].label}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}