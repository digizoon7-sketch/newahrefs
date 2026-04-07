import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import { PAGES } from "./src/config/site";

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      vitePrerenderPlugin({
        renderTarget: "#root",
        prerenderScript: path.resolve(__dirname, "./src/prerender.tsx"),
        additionalPrerenderRoutes: [
          "/",
          "/privacy",
          ...Object.keys(PAGES).map((slug) => `/${slug}`),
        ],
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
