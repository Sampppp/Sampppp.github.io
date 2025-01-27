// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://Sampppp.github.io',
	base: 'Sampppp.github.io',
	integrations: [mdx(), sitemap()],
});
