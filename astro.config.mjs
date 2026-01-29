import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://luizpereira.dev', // Update with your actual domain
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          'pt-br': 'pt-BR',
        },
      },
    }),
  ],

  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
    fallback: {
      'pt-br': 'en',
    }
  },

  vite: {
    plugins: [tailwindcss()],
  },
});