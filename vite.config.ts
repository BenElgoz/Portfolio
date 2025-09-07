import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import CONFIG from './gitprofile.config';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ mode }) => ({
  base: '/Portfolio/',
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          metaTitle: CONFIG.seo.title,
          metaDescription: CONFIG.seo.description,
          metaImageURL: CONFIG.seo.imageURL,
          googleAnalyticsScript: CONFIG.googleAnalytics.id
            ? `<!-- GA --> <script async src="https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalytics.id}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${CONFIG.googleAnalytics.id}');</script>`
            : '',
        },
      },
    }),
    ...(CONFIG.enablePWA
      ? [
          VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            workbox: { 
              navigateFallback: undefined,
              globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}']
            },
            includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
            manifest: {
              name: 'Portfolio',
              short_name: 'Portfolio',
              description: 'Personal Portfolio',
              theme_color: '#ffffff',
              background_color: '#ffffff',
              display: 'standalone',
              icons: [
                {
                  src: 'pwa-192x192.png',
                  sizes: '192x192',
                  type: 'image/png',
                },
                {
                  src: 'pwa-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                },
              ],
            },
          }),
        ]
      : []),
  ],
  define: { CONFIG },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
