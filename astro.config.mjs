// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://doscarnes.com',
  adapter: vercel(),
  integrations: [react(), image(), sitemap(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()]
  }
});