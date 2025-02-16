import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['swiper'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'styles/globalStyles/_vars.scss';
          @use 'styles/globalStyles/_container.scss';
          @use 'styles/globalStyles/_fonts.scss';
          @use 'styles/globalStyles/_commonStyles.scss';
        `,
        api: 'modern-compiler',
        quietDeps: true,
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      store: path.resolve(__dirname, './src/store'),
      styles: path.resolve(__dirname, './src/styles'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      modules: path.resolve(__dirname, './src/components/modules'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
});
