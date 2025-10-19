import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-tutorial-website.vercel.app',
  output: 'static',
  build: {
    assets: 'assets'
  }
});