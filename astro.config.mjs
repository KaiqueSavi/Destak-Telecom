import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import yaml from '@rollup/plugin-yaml';


// https://astro.build/config
export default defineConfig({
  plugins: [yaml()],
  adapter: cloudflare({}),
  output: 'server',
  integrations: [tailwind()],
});