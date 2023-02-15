import { defineConfig } from 'vite';
import pkg from './package.json';

import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

import path from 'node:path';
export default defineConfig({
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: 'window',
  },

  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@logicalclocks/quartz',
      formats: ['es'],
      fileName: 'index',
    },
    minify: 'esbuild',
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
