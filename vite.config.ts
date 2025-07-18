import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@lib": "/src/lib",
      "@constants": "/src/constants",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
      "@pages": "/src/pages",
      "@layouts": "/src/layouts",
    },
  },
});
