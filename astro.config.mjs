import { defineConfig } from 'astro/config';
import pandacss from '@pandacss/dev/astro';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [pandacss(), mdx(), react()],
});
