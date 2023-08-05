import { defineConfig } from 'astro/config';
import pandacss from '@pandacss/dev/astro';

export default defineConfig({
  integrations: [pandacss()],
});
