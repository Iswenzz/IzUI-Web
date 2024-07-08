// vite.config.ts
import { defineConfig } from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/@vitejs/plugin-react/dist/index.mjs";
import eslintPlugin from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/vite-plugin-eslint/dist/index.mjs";
import stylelintPlugin from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/vite-plugin-stylelint/dist/index.mjs";
import tsconfigPaths from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/vite-plugin-dts/dist/index.mjs";
import cssInjectedByJsPlugin from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import { visualizer } from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var config = defineConfig(({ mode }) => ({
  root: ".",
  base: "/",
  build: {
    outDir: "build",
    lib: {
      entry: "./src/index.ts",
      formats: ["es"]
    },
    rollupOptions: {
      plugins: [
        visualizer({
          filename: "./build/stats.html",
          open: mode === "development"
        })
      ]
    }
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: "[local]--[hash:base64:5]"
    }
  },
  plugins: [
    dts(),
    react(),
    cssInjectedByJsPlugin(),
    eslintPlugin({
      cache: false,
      fix: true,
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: ["node_modules"]
    }),
    stylelintPlugin({
      files: ["src/**/*.{css,scss}"],
      cache: false,
      fix: true
    }),
    tsconfigPaths({
      configNames: ["tsconfig.paths.json"]
    })
  ],
  server: {
    open: true,
    port: 3e3
  }
}));
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxVc2Vyc1xcXFxJc3dlbnp6XFxcXFdvcmtcXFxcUHJvZ3JhbW1pbmdcXFxcSXN3ZW56elxcXFxJc3dlbnp6LmNvbVxcXFx3ZWJ1aVxcXFxwYWNrYWdlc1xcXFxpenVpLXdlYlxcXFxwYWNrYWdlc1xcXFxpenVpLXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxVc2Vyc1xcXFxJc3dlbnp6XFxcXFdvcmtcXFxcUHJvZ3JhbW1pbmdcXFxcSXN3ZW56elxcXFxJc3dlbnp6LmNvbVxcXFx3ZWJ1aVxcXFxwYWNrYWdlc1xcXFxpenVpLXdlYlxcXFxwYWNrYWdlc1xcXFxpenVpLXJlYWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Vc2Vycy9Jc3dlbnp6L1dvcmsvUHJvZ3JhbW1pbmcvSXN3ZW56ei9Jc3dlbnp6LmNvbS93ZWJ1aS9wYWNrYWdlcy9penVpLXdlYi9wYWNrYWdlcy9penVpLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBQbHVnaW5PcHRpb24gfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tZXNsaW50XCI7XG5pbXBvcnQgc3R5bGVsaW50UGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1zdHlsZWxpbnRcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCBjc3NJbmplY3RlZEJ5SnNQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLWNzcy1pbmplY3RlZC1ieS1qc1wiO1xuXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xuXG5jb25zdCBjb25maWcgPSBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuXHRyb290OiBcIi5cIixcblx0YmFzZTogXCIvXCIsXG5cdGJ1aWxkOiB7XG5cdFx0b3V0RGlyOiBcImJ1aWxkXCIsXG5cdFx0bGliOiB7XG5cdFx0XHRlbnRyeTogXCIuL3NyYy9pbmRleC50c1wiLFxuXHRcdFx0Zm9ybWF0czogW1wiZXNcIl1cblx0XHR9LFxuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdHBsdWdpbnM6IFtcblx0XHRcdFx0dmlzdWFsaXplcih7XG5cdFx0XHRcdFx0ZmlsZW5hbWU6IFwiLi9idWlsZC9zdGF0cy5odG1sXCIsXG5cdFx0XHRcdFx0b3BlbjogbW9kZSA9PT0gXCJkZXZlbG9wbWVudFwiXG5cdFx0XHRcdH0pIGFzIFBsdWdpbk9wdGlvblxuXHRcdFx0XVxuXHRcdH1cblx0fSxcblx0Y3NzOiB7XG5cdFx0bW9kdWxlczoge1xuXHRcdFx0bG9jYWxzQ29udmVudGlvbjogXCJjYW1lbENhc2VPbmx5XCIsXG5cdFx0XHRnZW5lcmF0ZVNjb3BlZE5hbWU6IFwiW2xvY2FsXS0tW2hhc2g6YmFzZTY0OjVdXCJcblx0XHR9XG5cdH0sXG5cdHBsdWdpbnM6IFtcblx0XHRkdHMoKSxcblx0XHRyZWFjdCgpLFxuXHRcdGNzc0luamVjdGVkQnlKc1BsdWdpbigpLFxuXHRcdGVzbGludFBsdWdpbih7XG5cdFx0XHRjYWNoZTogZmFsc2UsXG5cdFx0XHRmaXg6IHRydWUsXG5cdFx0XHRpbmNsdWRlOiBbXCJzcmMvKiovKi57anMsanN4LHRzLHRzeH1cIl0sXG5cdFx0XHRleGNsdWRlOiBbXCJub2RlX21vZHVsZXNcIl1cblx0XHR9KSxcblx0XHRzdHlsZWxpbnRQbHVnaW4oe1xuXHRcdFx0ZmlsZXM6IFtcInNyYy8qKi8qLntjc3Msc2Nzc31cIl0sXG5cdFx0XHRjYWNoZTogZmFsc2UsXG5cdFx0XHRmaXg6IHRydWVcblx0XHR9KSxcblx0XHR0c2NvbmZpZ1BhdGhzKHtcblx0XHRcdGNvbmZpZ05hbWVzOiBbXCJ0c2NvbmZpZy5wYXRocy5qc29uXCJdXG5cdFx0fSlcblx0XSxcblx0c2VydmVyOiB7XG5cdFx0b3BlbjogdHJ1ZSxcblx0XHRwb3J0OiAzMDAwXG5cdH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2ZSxTQUFTLG9CQUFrQztBQUN4aEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sU0FBUztBQUNoQixPQUFPLDJCQUEyQjtBQUVsQyxTQUFTLGtCQUFrQjtBQUUzQixJQUFNLFNBQVMsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDMUMsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNmO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDZCxTQUFTO0FBQUEsUUFDUixXQUFXO0FBQUEsVUFDVixVQUFVO0FBQUEsVUFDVixNQUFNLFNBQVM7QUFBQSxRQUNoQixDQUFDO0FBQUEsTUFDRjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSixTQUFTO0FBQUEsTUFDUixrQkFBa0I7QUFBQSxNQUNsQixvQkFBb0I7QUFBQSxJQUNyQjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLHNCQUFzQjtBQUFBLElBQ3RCLGFBQWE7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFNBQVMsQ0FBQywwQkFBMEI7QUFBQSxNQUNwQyxTQUFTLENBQUMsY0FBYztBQUFBLElBQ3pCLENBQUM7QUFBQSxJQUNELGdCQUFnQjtBQUFBLE1BQ2YsT0FBTyxDQUFDLHFCQUFxQjtBQUFBLE1BQzdCLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxJQUNOLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxNQUNiLGFBQWEsQ0FBQyxxQkFBcUI7QUFBQSxJQUNwQyxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1A7QUFDRCxFQUFFO0FBRUYsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
