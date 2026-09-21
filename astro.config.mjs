import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: process.env.VERCEL ? vercel() : node({ mode: 'standalone' }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/bits-and-blogs': '/blog',
  }
});
