import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  base: "/",
  publicDir: "public",
  server: {
    open: true
  },
  plugins: [
    cssInjectedByJsPlugin(), // css 注入到 js 中
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
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    cssTarget: 'chrome61', // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式。
  }
});
