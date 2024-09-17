import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  plugins: [
    react()
  ],

  define: {

  },
  resolve: {
    alias: {

    }
  },

  server: {
    strictPort: true,
    hmr: true
  },

  build: {
    outDir: './dist',
    emptyOutDir: true,
    target: 'es2015',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {

    }
  }
})