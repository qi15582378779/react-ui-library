import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  publicDir: "public",
  plugins: [
    react(),
    dts({
      tsconfigPath: "tsconfig.app.json",
      insertTypesEntry: true,
      outDir: "dist/types",
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["src/**/*.test.ts", "src/**/*.test.tsx"],
      rollupTypes: true,
      staticImport: true,
      compilerOptions: {
        baseUrl: ".",
        paths: {
          "@/*": ["src/*"]
        }
      },
    }),
  ],
  css: {
    modules: false,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactUILibrary",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // assetFileNames: (assetInfo) => {
        //   if (assetInfo.name === 'style.css') return 'style.css';
        //   return assetInfo.name || 'unknown.css';
        // },
        assetFileNames: 'style.css',
      },
    },
    cssCodeSplit: false,
    sourcemap: true
  }
});
