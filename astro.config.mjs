import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://hopital-saint-claire.fr',
  integrations: [react()],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'ar', 'pt'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  prefetch: true,
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});