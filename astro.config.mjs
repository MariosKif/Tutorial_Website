import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/tutorialwebsite',
  output: 'static',
  build: {
    assets: 'assets'
  }
});