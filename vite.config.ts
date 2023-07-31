import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    reactPlugin(),
    // dts({
    //   insertTypesEntry: true,
    // }),
    cssInjectedByJsPlugin(),
    svgrPlugin(),
  ],
  build: {
    lib: {
      entry: ['./src/index.ts', './src/chakra.ts'],
      name: '[name]',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
    },
  },
});
