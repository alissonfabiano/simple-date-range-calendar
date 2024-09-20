import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/simple-date-range-calendar/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'src/main.tsx', 
      },
    },
  },
  publicDir: false, 
});
