import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: 'source',
  base: './',
  publicDir: 'public',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'source/index.html'),
        en: resolve(import.meta.dirname, 'source/en/index.html'),
        ru: resolve(import.meta.dirname, 'source/ru/index.html'),
        me: resolve(import.meta.dirname, 'source/me/index.html'),
        tr: resolve(import.meta.dirname, 'source/tr/index.html'),
        de: resolve(import.meta.dirname, 'source/de/index.html'),
      },
      output: {
        entryFileNames: 'assets/app-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => assetInfo.name?.endsWith('.css')
          ? 'assets/styles-[hash][extname]'
          : 'assets/[name]-[hash][extname]',
      },
    },
  },
});
