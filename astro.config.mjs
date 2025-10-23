import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
   integrations: [tailwind(), react()],

   vite: {
      // plugins: [tailwindcss()],
      resolve: {
         alias: {
            '@': '/src/',
            '@components': '/src/components/',
            '@layouts': '/src/layouts/',
            '@pages': '/src/pages/',
            '@styles': '/src/styles/',
            '@assets': '/src/assets/',
            '@hooks': '/src/hooks/',
            '@utils': '/src/utils/',
            '@api': '/src/api/',
            '@constants': '/src/constants/',
         },
      },
      // assetsInclude: ['**/*.json']
   },

   server: {
      host: true,
      port: 7002,
      headers: {
         'X-Frame-Options': 'SAMEORIGIN',
         'X-Content-Type-Options': 'nosniff',
         'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
   },
});
