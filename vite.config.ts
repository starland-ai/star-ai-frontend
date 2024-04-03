import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pkg from "./package.json";
import veauryVitePlugins from 'veaury/vite/index.js'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import {NodeModulesPolyfillPlugin} from '@esbuild-plugins/node-modules-polyfill'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import inject from '@rollup/plugin-inject'
import cjs from '@rollup/plugin-commonjs';
import externals from "rollup-plugin-node-externals";
process.env.VITE_APP_VERSION = pkg.version;
if (process.env.NODE_ENV === "production") {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}

export default defineConfig({
  server: {
    proxy: {
      // "/api": {
      //   target: 'http://vn2.s.filfox.io:17062/',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // }

      "/api": {
        target: 'http://vn2.s.filfox.io:17062/',
        // target: 'http://172.16.0.152:8083/',
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  },
  build: {
    target: "es2020",
    rollupOptions: {
        plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
    },

    // commonjsOptions: {
    //   include: []
    // }

  },
  plugins: [
    // vue(),
    veauryVitePlugins({
      type: 'vue',
      reactOptions:{
        jsxRuntime: 'classic'
      }
    }),
    nodePolyfills(),
  ],
  optimizeDeps: {
    esbuildOptions: {
        target: "es2020"
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      crypto: 'crypto-browserify',
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: 'util',
      'near-api-js': 'near-api-js/dist/near-api-js.js',
    },
  },
});