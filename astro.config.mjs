// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    integrations: [tailwind()],
    build: {
        // Contoh optimizations untuk build
        inlineStylesheets: "auto",
    },
    vite: {
        build: {
            cssMinify: true,
            minify: true,
        },
    },
});
