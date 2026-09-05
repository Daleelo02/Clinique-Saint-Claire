import React from 'react';
import { icons, type IconName } from '@/components/ui/Icons';
import { Button } from '@/components/ui';

const footerLinks = {
  hopital: [
    { label: 'Historique & Valeurs', href: '/a-propos/historique' },
    { label: 'Gouvernance', href: '/a-propos/gouvernance' },
    { label: 'Qualité & Certifications', href: '/a-propos/qualite' },
    { label: 'Recherche & Innovation', href: '/a-propos/recherche' },
    { label: 'Carrières', href: '/carrieres' },
    { label: 'Presse & Médias', href: '/presse' },
  ],
  patients: [
    { label: 'Admission & Séjour', href: '/patients/admission' },
    { label: 'Vos Droits', href: '/patients/droits' },
    { label: 'Associations d\'Usagers', href: '/patients/associations' },
    { label: 'Portail Patient', href: '/portail' },
    { label: 'Prendre Rendez-vous', href: '/rdv' },
    { label: 'Trouver un Médecin', href: '/medecins' },
  ],
  professionnels: [
    { label: 'Correspondance Médicale', href: '/professionnels/correspondance' },
    { label: 'Plateforme de Télémédecine', href: '/professionnels/telemedecine' },
    { label: 'Formations & Événements', href: '/professionnels/formations' },
    { label: 'Annuaire Médical', href: '/medecins' },
    { label: 'Partenariats', href: '/professionnels/partenariats' },
    { label: 'Recrutement Médical', href: '/carrieres/medical' },
  ],
  nousSuivre: [
    { label: 'Actualités', href: '/actualites' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Rapport d\'Activité', href: '/rapport-activite' },
    { label: 'Publications Scientifiques', href: '/publications' },
    { label: 'Événements', href: '/evenements' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/HopitalSaintClaire', icon: 'facebook' as IconName },
  { name: 'Twitter', href: 'https://twitter.com/HopitalStClaire', icon: 'twitter' as IconName },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/hopital-saint-claire', icon: 'linkedin' as IconName },
  { name: 'Instagram', href: 'https://instagram.com/hopital.saint.claire', icon: 'instagram' as IconName },
  { name: 'YouTube', href: 'https://youtube.com/@HopitalSaintClaire', icon: 'youtube' as IconName },
];

const certifications = [
  { label: 'HAS - Haute Autorité de Santé', href: '#' },
  { label: 'ISO 9001 - Management de la Qualité', href: '#' },
  { label: 'Joint Commission International', href: '#' },
  { label: 'Label Éthique & Soins', href: '#' },
];

const legalLinks = [
  { label: 'Mentions Légales', href: '/mentions-legales' },
  { label: 'Politique de Confidentialité', href: '/confidentialite' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Accessibilité', href: '/accessibilite' },
  { label: 'Plan du Site', href: '/plan-du-site' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-snow" role="contentinfo">
      {/* Main Footer Grid */}
      <div className="container-main py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/fr/" className="flex items-center gap-2 mb-6" aria-label="Hôpital Saint-Claire - Accueil">
              <svg className="w-10 h-10 text-heal" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                <path d="M16 8v16M8 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-display font-bold text-heading-sm">Hôpital Saint-Claire</span>
            </a>
            <p className="text-body-sm text-snow/70 mb-6 leading-relaxed">
              Hôpital privé à but non lucratif depuis 1923. L'excellence médicale au cœur de vous.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-snow/10 hover:bg-heal transition-all duration-fast text-snow/70 hover:text-snow"
                >
                  <icons[social.icon] className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Hôpital Column */}
          <nav aria-label="L'hôpital">
            <h3 className="font-display font-semibold text-heading-sm mb-4">L'Hôpital</h3>
            <ul className="space-y-3">
              {footerLinks.hopital.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body-sm text-snow/70 hover:text-heal transition-colors duration-fast"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Patients Column */}
          <nav aria-label="Patients & Visiteurs">
            <h3 className="font-display font-semibold text-heading-sm mb-4">Patients & Visiteurs</h3>
            <ul className="space-y-3">
              {footerLinks.patients.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body-sm text-snow/70 hover:text-heal transition-colors duration-fast"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Professionnels Column */}
          <nav aria-label="Professionnels de Santé">
            <h3 className="font-display font-semibold text-heading-sm mb-4">Professionnels</h3>
            <ul className="space-y-3">
              {footerLinks.professionnels.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body-sm text-snow/70 hover:text-heal transition-colors duration-fast"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nous Suivre Column */}
          <nav aria-label="Nous Suivre">
            <h3 className="font-display font-semibold text-heading-sm mb-4">Nous Suivre</h3>
            <ul className="space-y-3">
              {footerLinks.nousSuivre.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body-sm text-snow/70 hover:text-heal transition-colors duration-fast"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Certifications Bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-snow/10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <span className="text-label text-snow/50 uppercase tracking-wider">Certifications :</span>
              <div className="flex flex-wrap items-center gap-4">
                {certifications.map((cert) => (
                  <a
                    key={cert.label}
                    href={cert.href}
                    className="flex items-center gap-1.5 text-caption text-snow/70 hover:text-heal transition-colors"
                  >
                    <icons.shieldCheck className="w-4 h-4 text-heal" aria-hidden="true" />
                    <span>{cert.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Emergency Quick Access */}
            <div className="flex items-center gap-4">
              <Button variant="vital" size="sm" asChild>
                <a href="/urgences">
                  <icons.ambulance className="w-4 h-4 mr-1.5" aria-hidden="true" />
                  Urgences : 01 23 45 67 89
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-snow/10 py-6">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-caption text-snow/50">
              © {currentYear} Hôpital Saint-Claire. Tous droits réservés.
            </p>
            <nav aria-label="Mentions légales">
              <ul className="flex flex-wrap items-center justify-center md:justify-end gap-6">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-caption text-snow/50 hover:text-heal transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}