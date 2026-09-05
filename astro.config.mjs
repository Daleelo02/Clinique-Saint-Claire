import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hopital-saint-claire.fr',
  integrations: [react(), tailwind()],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'ar', 'pt'],
    routing: 'prefix',
  },
  prefetch: true,
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
});