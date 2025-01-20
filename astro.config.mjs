import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://typed-data.dev',
  integrations: [preact(), sitemap({
    canonicalURL: 'https://typed-data.netlify.app'
  }), tailwind()],
});