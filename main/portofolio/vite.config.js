import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        navbar: "../portofolio/src/components/navbar/navbar.vue",
        hero: "../portofolio/src/components/hero/hero.vue",
        about: "../portofolio/src/components/about/about.vue",
        skill: "../portofolio/src/components/skill/skill.vue",
        footer: "../portofolio/src/components/footer/footer.vue",
      },
    },
  },
});
