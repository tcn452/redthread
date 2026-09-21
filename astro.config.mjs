import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://redthread-zeta.vercel.app',
  adapter: process.env.VERCEL ? vercel() : node({ mode: 'standalone' }),
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/keystatic') && !page.includes('/api/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/bits-and-blogs': '/blog',
    '/portal': '/keystatic',
    '/studio': '/keystatic',
    '/admin': '/keystatic',
  }
});
