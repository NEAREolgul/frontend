// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  define: {
    'process.env': {},
  },
  build: { commonjsOptions: { transformMixedEsModules: true, include: [] } },
  optimizeDeps: { disabled: false },

  plugins: [react()],
});
