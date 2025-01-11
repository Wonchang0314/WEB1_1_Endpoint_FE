import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
//import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages')
    },
  },
});
