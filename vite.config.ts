import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
  manifest_version: 3,
  name: "CRX Example",
  version: "1.0.0",
  icons: {
    32: "icons/leaf-32.png",
  },

  permissions: ["activeTab", "storage"],
  host_permissions: ["https://api.notion.com/v1/*"],
  action: {},
  background: {
    service_worker: "src/background.ts",
  },
  content_scripts: [
    {
      matches: ["https://papers.nips.cc/paper_files/paper/*/hash/*-Abstract.html"],
      js: ["src/neurips.ts"],
    },
  ],
  options_page: "src/options.html",
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: crx({ manifest }),
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
});
