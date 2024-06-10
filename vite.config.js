import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    root: path.join(__dirname, '/src'),
    envDir: __dirname,
    plugins: [vue()],
    publicDir: path.join(__dirname, '/public'),
    ssr: true,
    build: {
        outDir: '../dist',
        minify: 'esbuild',
        ssrManifest: true
    }
});