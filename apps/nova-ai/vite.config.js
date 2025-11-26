import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * Actual root path in bundled web page. \
   * Whenver there are dynamically imported assets, or
   * static assets referenced by root relative url in the source code,
   * Vite would automatically replace `"/"` with this root path.
   */
  base: '',
  /** it's just `index.html` directory for vite to find */
  root: '',
  /** relative to root */
  publicDir: 'public',
  plugins: [tailwindcss(), react()],

  define: {},
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },

  server: {
    strictPort: true,
    hmr: true,
  },

  build: {
    outDir: '../../build/nova-ai',
    emptyOutDir: true,
    target: 'es2022',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {},
  },
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    css: true,
  },
});
