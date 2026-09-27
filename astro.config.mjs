import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL?.trim() || 'https://tdr.yuzumone.net',
  build: {
    format: 'directory',
  },
});
