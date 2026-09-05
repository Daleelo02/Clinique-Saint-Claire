import React, { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';
import { icons, type IconName } from '@/components/ui/Icons';
import { Button } from '@/components/ui';

interface NavBarProps {
  className?: string;
  currentLocale?: string;
}

const navItems = [
  { label: 'Patients & Visiteurs', href: '/patients', hasDropdown: true },
  { label: 'Spécialités', href: '/specialites', hasDropdown: true },
  { label: 'Urgences', href: '/urgences', vital: true },
  { label: 'Check-up', href: '/check-up' },
  { label: 'À propos', href: '/a-propos', hasDropdown: true },
];

const utilityItems = [
  { label: 'Portail Patient', href: '/portail', variant: 'ghost' as const },
  { label: 'Prendre RDV', href: '/rdv', variant: 'primary' as const },
  { label: 'Trouver un médecin', href: '/medecins', variant: 'ghost' as const },
  { label: 'Contact', href: '/contact', variant: 'ghost' as const },
];

const languages = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ar', label: 'العربية', name: 'العربية', rtl: true },
  { code: 'pt', label: 'PT', name: 'Português' },
];

const quickAccess = [
  { label: 'Maternité', href: '/specialites/gynecologie-obstetrique', icon: 'baby' as IconName },
  { label: 'Urgences', href: '/urgences', icon: 'ambulance' as IconName, vital: true },
  { label: 'Check-up', href: '/check-up', icon: 'clipboardCheck' as IconName },
  { label: 'International', href: '/international', icon: 'globe' as IconName },
];

export function NavBar({ className, currentLocale = 'fr' }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const toggleDropdown = (item: string) => setDropdownOpen(dropdownOpen === item ? null : item);

  return (
    <>
      {/* Emergency Banner - Sticky on all pages */}
      <div className="bg-vital text-snow py-2 px-4 hidden md:block" role="region" aria-label="Urgences">
        <div className="container-main flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium">
              <icons.ambulance className="w-4 h-4" aria-hidden="true" />
              Urgences 24/7 — 01 23 45 67 89
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-snow/20 rounded-full text-caption font-medium">
              <icons.clock className="w-3 h-3" aria-hidden="true" />
              Ouvert 24h/24, 7j/7
            </span>
          </div>
          <Button variant="vital" size="sm" className="whitespace-nowrap">
            <icons.arrowRight className="w-4 h-4" aria-hidden="true" />
            Accès Urgences
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-fast',
          scrolled ? 'bg-snow/95 backdrop-blur-glass shadow-card' : 'bg-transparent',
          className
        )}
        role="banner"
      >
        <nav className="container-main" aria-label="Navigation principale">
          {/* Top Bar: Logo + Language + Utilities */}
          <div className="flex items-center justify-between h-16 md:h-14 gap-4">
            {/* Logo */}
            <a href="/fr/" className="flex items-center gap-2 flex-shrink-0" aria-label="Hôpital Saint-Claire - Accueil">
              <svg className="w-8 h-8 text-heal" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                <path d="M16 8v16M8 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-display font-bold text-heading-sm text-ink hidden sm:block">
                Hôpital Saint-Claire
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  <button
                    className={cn(
                      'nav-link px-3 py-2 text-body-sm font-medium rounded-lg transition-colors',
                      item.vital ? 'text-vital font-semibold' : 'text-ink-muted hover:text-ink'
                    )}
                    onClick={() => toggleDropdown(item.href)}
                    aria-expanded={dropdownOpen === item.href}
                    aria-haspopup="true"
                  >
                    <span className="flex items-center gap-1.5">
                      {item.label}
                      {item.hasDropdown && <icons.chevronDown className="w-4 h-4 transition-transform" style={{ transform: dropdownOpen === item.href ? 'rotate(180deg)' : 'rotate(0)' }} />}
                    </span>
                  </button>
                  {item.hasDropdown && dropdownOpen === item.href && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-surface rounded-xl shadow-elevated border border-cloud py-2 animate-slide-down" role="menu">
                      {item.href === '/patients' && (
                        <>
                          <a href="/patients/admission" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg transition-colors" role="menuitem">Admission & Séjour</a>
                          <a href="/patients/droits" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg transition-colors" role="menuitem">Vos Droits</a>
                          <a href="/patients/associations" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg transition-colors" role="menuitem">Associations d'Usagers</a>
                        </>
                      )}
                      {item.href === '/specialites' && (
                        <>
                          <a href="/specialites/cardiologie" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg transition-colors" role="menuitem">Cardiologie</a>
                          <a href="/specialites/neurologie" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg transition-colors" role="menuitem">Neurologie</a>
                          <a href="/specialites/oncologie" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg transition-colors" role="menuitem">Oncologie</a>
                          <a href="/specialites" className="block px-4 py-2 text-body-sm text-heal font-medium hover:bg-heal-light rounded-lg transition-colors" role="menuitem">Voir toutes les spécialités</a>
                        </>
                      )}
                      {item.href === '/a-propos' && (
                        <>
                          <a href="/a-propos/historique" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg transition-colors" role="menuitem">Historique & Valeurs</a>
                          <a href="/a-propos/gouvernance" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg transition-colors" role="menuitem">Gouvernance</a>
                          <a href="/a-propos/qualite" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg transition-colors" role="menuitem">Qualité & Certifications</a>
                          <a href="/a-propos/recherche" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg transition-colors" role="menuitem">Recherche & Innovation</a>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Utilities + Language */}
            <div className="flex items-center gap-2 ml-auto">
              {/* Language Selector */}
              <div className="relative hidden sm:block">
                <button
                  className="flex items-center gap-1.5 px-3 py-2 text-body-sm font-medium text-ink-muted hover:text-ink rounded-lg transition-colors"
                  aria-haspopup="listbox"
                  aria-label="Changer de langue"
                >
                  <icons.globe className="w-4 h-4" aria-hidden="true" />
                  <span>{currentLocale.toUpperCase()}</span>
                  <icons.chevronDown className="w-4 h-4" aria-hidden="true" />
                </button>
                <ul className="absolute right-0 top-full mt-2 w-36 bg-surface rounded-xl shadow-elevated border border-cloud py-2 animate-slide-down" role="listbox">
                  {languages.map((lang) => (
                    <li key={lang.code} role="option">
                      <a
                        href="#"
                        data-lang={lang.code}
                        className={cn(
                          'block px-4 py-2 text-body-sm transition-colors',
                          currentLocale === lang.code ? 'bg-heal-light text-heal font-medium' : 'text-ink-muted hover:text-ink hover:bg-cloud'
                        )}
                        dir={lang.rtl ? 'rtl' : 'ltr'}
                      >
                        {lang.label} <span className="text-caption text-ink-muted/70 ml-2">({lang.name})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Utility Buttons */}
              <div className="hidden lg:flex items-center gap-2">
                {utilityItems.map((item) => (
                  <Button
                    key={item.href}
                    variant={item.variant}
                    size="sm"
                    asChild
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-cloud transition-colors"
                onClick={toggleMobileMenu}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {mobileMenuOpen ? <icons.x className="w-6 h-6" /> : <icons.menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Quick Access Bar - Sticky on scroll */}
          <div className="border-t border-cloud bg-snow/50 backdrop-blur-glass hidden md:block" role="navigation" aria-label="Accès rapide">
            <div className="container-main">
              <div className="flex items-center justify-between h-12">
                <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide pb-1">
                  {quickAccess.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-2 px-3 py-2 rounded-lg text-body-sm font-medium transition-all duration-fast whitespace-nowrap',
                        item.vital
                          ? 'text-vital hover:bg-vital-light'
                          : 'text-ink-muted hover:text-ink hover:bg-cloud'
                      )}
                    >
                      <icons[item.icon] className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden fixed inset-0 z-50 bg-snow animate-slide-down"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-cloud">
                <span className="font-display font-bold text-heading-sm text-ink">Menu</span>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-cloud transition-colors"
                  aria-label="Fermer le menu"
                >
                  <icons.x className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Nav */}
              <nav className="flex-1 overflow-y-auto p-4 space-y-1" aria-label="Navigation mobile">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <button
                      className={cn(
                        'w-full flex items-center justify-between px-4 py-3 rounded-lg text-left text-body font-medium transition-colors',
                        item.vital ? 'text-vital font-semibold' : 'text-ink-muted hover:text-ink hover:bg-cloud'
                      )}
                      onClick={() => toggleDropdown(item.href)}
                      aria-expanded={dropdownOpen === item.href}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && <icons.chevronDown className={cn('w-5 h-5 transition-transform', dropdownOpen === item.href && 'rotate-180')} />}
                    </button>
                    {dropdownOpen === item.href && (
                      <div className="mt-1 ml-4 space-y-1 animate-slide-down">
                        {item.href === '/patients' && (
                          <>
                            <a href="/patients/admission" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg">Admission & Séjour</a>
                            <a href="/patients/droits" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg">Vos Droits</a>
                            <a href="/patients/associations" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg">Associations d'Usagers</a>
                          </>
                        )}
                        {item.href === '/specialites' && (
                          <>
                            <a href="/specialites/cardiologie" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg">Cardiologie</a>
                            <a href="/specialites/neurologie" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg">Neurologie</a>
                            <a href="/specialites/oncologie" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg">Oncologie</a>
                            <a href="/specialites" className="block px-4 py-2 text-body-sm text-heal font-medium hover:bg-heal-light rounded-lg">Voir toutes les spécialités</a>
                          </>
                        )}
                        {item.href === '/a-propos' && (
                          <>
                            <a href="/a-propos/historique" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg">Historique & Valeurs</a>
                            <a href="/a-propos/gouvernance" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg">Gouvernance</a>
                            <a href="/a-propos/qualite" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg">Qualité & Certifications</a>
                            <a href="/a-propos/recherche" className="block px-4 py-2 text-body-sm text-ink-muted hover:text-ink hover:bg-cloud rounded-lg">Recherche & Innovation</a>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-cloud" />

                {/* Mobile Utilities */}
                <div className="space-y-2">
                  {utilityItems.map((item) => (
                    <Button
                      key={item.href}
                      variant={item.variant}
                      fullWidth
                      asChild
                    >
                      <a href={item.href}>{item.label}</a>
                    </Button>
                  ))}

                  {/* Mobile Language */}
                  <div className="pt-2 border-t border-cloud">
                    <label htmlFor="mobile-lang" className="block text-label text-ink mb-2">Langue</label>
                    <select
                      id="mobile-lang"
                      className="w-full px-4 py-3 text-body bg-surface border border-cloud rounded-lg appearance-none bg-no-repeat bg-right-3 bg-center pr-10 focus:border-heal focus:ring-2 focus:ring-heal/20 outline-none"
                      onChange={(e) => window.location.href = e.target.value}
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={`/${lang.code}/`} selected={currentLocale === lang.code}>
                          {lang.label} — {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </nav>

              {/* Mobile Quick Access */}
              <div className="border-t border-cloud p-4">
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
                  {quickAccess.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-lg text-body-sm font-medium transition-all whitespace-nowrap',
                        item.vital
                          ? 'text-vital bg-vital-light'
                          : 'text-ink-muted bg-cloud'
                      )}
                      onClick={closeMobileMenu}
                    >
                      <icons[item.icon] className="w-5 h-5" aria-hidden="true" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Backdrop */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-ink/50 z-40 md:hidden animate-fade-in"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}
      </header>
    </>
  );
}