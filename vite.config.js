import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@constants": "/src/constants",
      "@hooks": "/src/hooks",
      "@assets": "/src/assets",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
    },
  },
})
