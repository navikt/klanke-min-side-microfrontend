import { resolve } from 'node:path';
import terser from '@rollup/plugin-terser';
import react from '@vitejs/plugin-react';
import { rollupImportMapPlugin } from 'rollup-plugin-import-map';
import tsconfigPaths from 'vite-tsconfig-paths';
import importmap from './importmap.json';

export default () => ({
  plugins: [
    tsconfigPaths(),
    react(),
    terser(),
    {
      ...rollupImportMapPlugin([importmap]),
      enforce: 'pre',
      apply: 'build',
    },
  ],
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'src/microfrontend.tsx'),
      preserveEntrySignatures: 'exports-only',
      output: {
        entryFileNames: 'klanke-min-side-microfrontend.[hash].js',
        format: 'esm',
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://kabal-api.intern.dev.nav.no',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
