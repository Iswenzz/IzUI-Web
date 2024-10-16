// vite.config.ts
import { defineConfig } from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/vitest/dist/config.js";
import react from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/@vitejs/plugin-react/dist/index.mjs";
import checker from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/vite-plugin-checker/dist/esm/main.js";
import eslintPlugin from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/vite-plugin-eslint/dist/index.mjs";
import stylelintPlugin from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/vite-plugin-stylelint/dist/index.mjs";
import tsconfigPaths from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/vite-plugin-dts/dist/index.mjs";
import { visualizer } from "file:///D:/Users/Iswenzz/Work/Programming/Iswenzz/Iswenzz.com/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";

// package.json
var package_default = {
  name: "@izui/react",
  version: "1.1.0",
  description: "UI component library allowing you to make modern designs using the various components it offers.",
  keywords: [
    "react",
    "react-component",
    "mui",
    "material-ui",
    "iswenzz",
    "izui-web",
    "izui"
  ],
  homepage: "https://iswenzz.com",
  bugs: {
    url: "https://github.com/Iswenzz/IzUI-Web/issues"
  },
  repository: {
    type: "git",
    url: "git+https://github.com/Iswenzz/IzUI-Web.git",
    directory: "packages/izui-react"
  },
  funding: {
    type: "github",
    url: "https://github.com/Iswenzz"
  },
  license: "GPL-3.0+",
  type: "module",
  main: "dist/index.js",
  types: "dist/index.d.ts",
  scripts: {
    build: "vite build",
    lint: "yarn lint:ts && yarn lint:scss",
    "lint:scss": "stylelint '**/*.{scss,css}'",
    "lint:scss:fix": "stylelint --fix '**/*.{scss,css}'",
    "lint:ts": "eslint '**/*.{js,jsx,ts,tsx}'",
    "lint:ts:fix": "eslint --fix '**/*.{js,jsx,ts,tsx}'",
    release: "yarn version patch && npm publish",
    storybook: "storybook dev -p 6006",
    "storybook:build": "storybook build",
    test: "vitest",
    "test:watch": "vitest --ui --watch"
  },
  dependencies: {
    "@izui/assets": "*",
    "@izui/styles": "*"
  },
  devDependencies: {
    "@emotion/cache": "^11.11.0",
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@eslint/js": "^9.6.0",
    "@faker-js/faker": "^8.4.1",
    "@izui/scripts": "*",
    "@izui/types": "*",
    "@mui/material": "^5.15.21",
    "@storybook/addon-essentials": "^8.2.1",
    "@storybook/addon-interactions": "^8.2.1",
    "@storybook/addon-links": "^8.2.1",
    "@storybook/blocks": "^8.2.1",
    "@storybook/react": "^8.2.1",
    "@storybook/react-vite": "^8.2.1",
    "@storybook/test": "^8.2.1",
    "@testing-library/dom": "^10.3.1",
    "@testing-library/jest-dom": "^6.4.6",
    "@testing-library/react": "^16.0.0",
    "@types/lodash": "^4.17.6",
    "@types/markdown-it": "14.1.1",
    "@types/node": "^20.14.9",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@types/react-google-recaptcha": "^2.1.9",
    "@types/react-router-dom": "^5.3.3",
    "@types/uuid": "^10.0.0",
    "@vitejs/plugin-react": "^4.3.1",
    "@vitest/coverage-v8": "^2.0.5",
    "@vitest/ui": "^2.0.5",
    autoprefixer: "^10.4.19",
    classnames: "^2.5.1",
    cssnano: "^7.0.3",
    "embla-carousel": "^8.1.6",
    "embla-carousel-react": "^8.1.6",
    eslint: "^9.6.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-react": "^7.34.3",
    "eslint-plugin-storybook": "^0.8.0",
    "framer-motion": "^11.2.12",
    "highlight.js": "^11.9.0",
    i18next: "^23.11.5",
    jsdoc: "^4.0.3",
    jsdom: "^24.1.0",
    lodash: "^4.17.21",
    "markdown-it": "^14.1.0",
    postcss: "^8.4.39",
    "postcss-preset-env": "^9.5.15",
    "postcss-safe-parser": "^7.0.0",
    prettier: "^3.3.2",
    react: "^18.3",
    "react-data-grid": "7.0.0-beta.44",
    "react-dom": "^18.3",
    "react-google-recaptcha": "^3.1.0",
    "react-i18next": "^14.1.2",
    "react-icons": "^5.2.1",
    "react-player": "^2.16.0",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.24.0",
    "react-scroll-parallax": "^3.4.5",
    "react-use": "^17.5.0",
    "rollup-plugin-visualizer": "^5.12.0",
    sass: "^1.77.8",
    storybook: "^8.2.1",
    stylelint: "^16.6.1",
    "stylelint-config-recommended-scss": "^14.0.0",
    "stylelint-order": "^6.0.4",
    "stylelint-scss": "^6.3.2",
    "ts-node": "^10.9.2",
    typescript: "^5.5.4",
    "typescript-eslint": "^7.14.1",
    uuid: "^10.0.0",
    vite: "^5.3.2",
    "vite-plugin-checker": "^0.7.1",
    "vite-plugin-dts": "^3.9.1",
    "vite-plugin-eslint": "^1.8.1",
    "vite-plugin-stylelint": "^5.3.1",
    "vite-tsconfig-paths": "^4.3.2",
    vitest: "^2.0.1"
  },
  peerDependencies: {
    "@emotion/cache": "^11.11.0",
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@mui/material": "^5.15.21",
    classnames: "^2.5.1",
    "embla-carousel": "^8.1.6",
    "embla-carousel-react": "^8.1.6",
    "framer-motion": "^11.2.12",
    "highlight.js": "^11.9.0",
    i18next: "^23.11.5",
    lodash: "^4.17.21",
    "markdown-it": "^14.1.0",
    react: "^18.3",
    "react-data-grid": "7.0.0-beta.44",
    "react-dom": "^18.3",
    "react-google-recaptcha": "^3.1.0",
    "react-i18next": "^14.1.2",
    "react-icons": "^5.2.1",
    "react-player": "^2.16.0",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.24.0",
    "react-scroll-parallax": "^3.4.5",
    "react-use": "^17.5.0",
    uuid: "^10.0.0"
  }
};

// vite.config.ts
var config = defineConfig(({ mode }) => ({
  build: {
    outDir: "dist",
    lib: {
      name: "@izui/react",
      entry: "./src/index.ts",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      plugins: [
        visualizer({
          filename: "./dist/stats.html",
          open: mode === "development"
        })
      ],
      external: [
        ...Object.keys(package_default.peerDependencies),
        /react\/jsx-runtime/,
        /react-icons\/*/,
        /highlight.js\/*/,
        /lodash\/*/
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
    checker({ typescript: true }),
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
  test: {
    include: ["src/**/*.test.*"],
    passWithNoTests: true,
    globals: true,
    watch: false,
    environment: "jsdom",
    setupFiles: "src/__test__/setup.ts",
    coverage: {
      enabled: true,
      reporter: ["cobertura", "html"]
    }
  }
}));
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcVXNlcnNcXFxcSXN3ZW56elxcXFxXb3JrXFxcXFByb2dyYW1taW5nXFxcXElzd2VuenpcXFxcSXN3ZW56ei5jb21cXFxcd2VidWlcXFxccGFja2FnZXNcXFxcaXp1aS13ZWJcXFxccGFja2FnZXNcXFxcaXp1aS1yZWFjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcVXNlcnNcXFxcSXN3ZW56elxcXFxXb3JrXFxcXFByb2dyYW1taW5nXFxcXElzd2VuenpcXFxcSXN3ZW56ei5jb21cXFxcd2VidWlcXFxccGFja2FnZXNcXFxcaXp1aS13ZWJcXFxccGFja2FnZXNcXFxcaXp1aS1yZWFjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovVXNlcnMvSXN3ZW56ei9Xb3JrL1Byb2dyYW1taW5nL0lzd2VuenovSXN3ZW56ei5jb20vd2VidWkvcGFja2FnZXMvaXp1aS13ZWIvcGFja2FnZXMvaXp1aS1yZWFjdC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXN0L2NvbmZpZ1wiO1xuXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgY2hlY2tlciBmcm9tIFwidml0ZS1wbHVnaW4tY2hlY2tlclwiO1xuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tZXNsaW50XCI7XG5pbXBvcnQgc3R5bGVsaW50UGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1zdHlsZWxpbnRcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XG5cbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIjtcblxuY29uc3QgY29uZmlnID0gZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcblx0YnVpbGQ6IHtcblx0XHRvdXREaXI6IFwiZGlzdFwiLFxuXHRcdGxpYjoge1xuXHRcdFx0bmFtZTogXCJAaXp1aS9yZWFjdFwiLFxuXHRcdFx0ZW50cnk6IFwiLi9zcmMvaW5kZXgudHNcIixcblx0XHRcdGZpbGVOYW1lOiBcImluZGV4XCIsXG5cdFx0XHRmb3JtYXRzOiBbXCJlc1wiXVxuXHRcdH0sXG5cdFx0cm9sbHVwT3B0aW9uczoge1xuXHRcdFx0cGx1Z2luczogW1xuXHRcdFx0XHR2aXN1YWxpemVyKHtcblx0XHRcdFx0XHRmaWxlbmFtZTogXCIuL2Rpc3Qvc3RhdHMuaHRtbFwiLFxuXHRcdFx0XHRcdG9wZW46IG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIlxuXHRcdFx0XHR9KSBhcyBQbHVnaW5PcHRpb25cblx0XHRcdF0sXG5cdFx0XHRleHRlcm5hbDogW1xuXHRcdFx0XHQuLi5PYmplY3Qua2V5cyhwYWNrYWdlSnNvbi5wZWVyRGVwZW5kZW5jaWVzKSxcblx0XHRcdFx0L3JlYWN0XFwvanN4LXJ1bnRpbWUvLFxuXHRcdFx0XHQvcmVhY3QtaWNvbnNcXC8qLyxcblx0XHRcdFx0L2hpZ2hsaWdodC5qc1xcLyovLFxuXHRcdFx0XHQvbG9kYXNoXFwvKi9cblx0XHRcdF1cblx0XHR9XG5cdH0sXG5cdGNzczoge1xuXHRcdG1vZHVsZXM6IHtcblx0XHRcdGxvY2Fsc0NvbnZlbnRpb246IFwiY2FtZWxDYXNlT25seVwiLFxuXHRcdFx0Z2VuZXJhdGVTY29wZWROYW1lOiBcIltsb2NhbF0tLVtoYXNoOmJhc2U2NDo1XVwiXG5cdFx0fVxuXHR9LFxuXHRwbHVnaW5zOiBbXG5cdFx0ZHRzKCksXG5cdFx0cmVhY3QoKSxcblx0XHRjaGVja2VyKHsgdHlwZXNjcmlwdDogdHJ1ZSB9KSxcblx0XHRlc2xpbnRQbHVnaW4oe1xuXHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdFx0Zml4OiB0cnVlLFxuXHRcdFx0aW5jbHVkZTogW1wic3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9XCJdLFxuXHRcdFx0ZXhjbHVkZTogW1wibm9kZV9tb2R1bGVzXCJdXG5cdFx0fSksXG5cdFx0c3R5bGVsaW50UGx1Z2luKHtcblx0XHRcdGZpbGVzOiBbXCJzcmMvKiovKi57Y3NzLHNjc3N9XCJdLFxuXHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdFx0Zml4OiB0cnVlXG5cdFx0fSksXG5cdFx0dHNjb25maWdQYXRocyh7XG5cdFx0XHRjb25maWdOYW1lczogW1widHNjb25maWcucGF0aHMuanNvblwiXVxuXHRcdH0pXG5cdF0sXG5cdHRlc3Q6IHtcblx0XHRpbmNsdWRlOiBbXCJzcmMvKiovKi50ZXN0LipcIl0sXG5cdFx0cGFzc1dpdGhOb1Rlc3RzOiB0cnVlLFxuXHRcdGdsb2JhbHM6IHRydWUsXG5cdFx0d2F0Y2g6IGZhbHNlLFxuXHRcdGVudmlyb25tZW50OiBcImpzZG9tXCIsXG5cdFx0c2V0dXBGaWxlczogXCJzcmMvX190ZXN0X18vc2V0dXAudHNcIixcblx0XHRjb3ZlcmFnZToge1xuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdHJlcG9ydGVyOiBbXCJjb2JlcnR1cmFcIiwgXCJodG1sXCJdXG5cdFx0fVxuXHR9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiIsICJ7XG5cdFwibmFtZVwiOiBcIkBpenVpL3JlYWN0XCIsXG5cdFwidmVyc2lvblwiOiBcIjEuMS4wXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJVSSBjb21wb25lbnQgbGlicmFyeSBhbGxvd2luZyB5b3UgdG8gbWFrZSBtb2Rlcm4gZGVzaWducyB1c2luZyB0aGUgdmFyaW91cyBjb21wb25lbnRzIGl0IG9mZmVycy5cIixcblx0XCJrZXl3b3Jkc1wiOiBbXG5cdFx0XCJyZWFjdFwiLFxuXHRcdFwicmVhY3QtY29tcG9uZW50XCIsXG5cdFx0XCJtdWlcIixcblx0XHRcIm1hdGVyaWFsLXVpXCIsXG5cdFx0XCJpc3dlbnp6XCIsXG5cdFx0XCJpenVpLXdlYlwiLFxuXHRcdFwiaXp1aVwiXG5cdF0sXG5cdFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2lzd2VuenouY29tXCIsXG5cdFwiYnVnc1wiOiB7XG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vSXN3ZW56ei9JelVJLVdlYi9pc3N1ZXNcIlxuXHR9LFxuXHRcInJlcG9zaXRvcnlcIjoge1xuXHRcdFwidHlwZVwiOiBcImdpdFwiLFxuXHRcdFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9Jc3dlbnp6L0l6VUktV2ViLmdpdFwiLFxuXHRcdFwiZGlyZWN0b3J5XCI6IFwicGFja2FnZXMvaXp1aS1yZWFjdFwiXG5cdH0sXG5cdFwiZnVuZGluZ1wiOiB7XG5cdFx0XCJ0eXBlXCI6IFwiZ2l0aHViXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vSXN3ZW56elwiXG5cdH0sXG5cdFwibGljZW5zZVwiOiBcIkdQTC0zLjArXCIsXG5cdFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuXHRcIm1haW5cIjogXCJkaXN0L2luZGV4LmpzXCIsXG5cdFwidHlwZXNcIjogXCJkaXN0L2luZGV4LmQudHNcIixcblx0XCJzY3JpcHRzXCI6IHtcblx0XHRcImJ1aWxkXCI6IFwidml0ZSBidWlsZFwiLFxuXHRcdFwibGludFwiOiBcInlhcm4gbGludDp0cyAmJiB5YXJuIGxpbnQ6c2Nzc1wiLFxuXHRcdFwibGludDpzY3NzXCI6IFwic3R5bGVsaW50ICcqKi8qLntzY3NzLGNzc30nXCIsXG5cdFx0XCJsaW50OnNjc3M6Zml4XCI6IFwic3R5bGVsaW50IC0tZml4ICcqKi8qLntzY3NzLGNzc30nXCIsXG5cdFx0XCJsaW50OnRzXCI6IFwiZXNsaW50ICcqKi8qLntqcyxqc3gsdHMsdHN4fSdcIixcblx0XHRcImxpbnQ6dHM6Zml4XCI6IFwiZXNsaW50IC0tZml4ICcqKi8qLntqcyxqc3gsdHMsdHN4fSdcIixcblx0XHRcInJlbGVhc2VcIjogXCJ5YXJuIHZlcnNpb24gcGF0Y2ggJiYgbnBtIHB1Ymxpc2hcIixcblx0XHRcInN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBkZXYgLXAgNjAwNlwiLFxuXHRcdFwic3Rvcnlib29rOmJ1aWxkXCI6IFwic3Rvcnlib29rIGJ1aWxkXCIsXG5cdFx0XCJ0ZXN0XCI6IFwidml0ZXN0XCIsXG5cdFx0XCJ0ZXN0OndhdGNoXCI6IFwidml0ZXN0IC0tdWkgLS13YXRjaFwiXG5cdH0sXG5cdFwiZGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcIkBpenVpL2Fzc2V0c1wiOiBcIipcIixcblx0XHRcIkBpenVpL3N0eWxlc1wiOiBcIipcIlxuXHR9LFxuXHRcImRldkRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJAZW1vdGlvbi9jYWNoZVwiOiBcIl4xMS4xMS4wXCIsXG5cdFx0XCJAZW1vdGlvbi9yZWFjdFwiOiBcIl4xMS4xMS40XCIsXG5cdFx0XCJAZW1vdGlvbi9zdHlsZWRcIjogXCJeMTEuMTEuNVwiLFxuXHRcdFwiQGVzbGludC9qc1wiOiBcIl45LjYuMFwiLFxuXHRcdFwiQGZha2VyLWpzL2Zha2VyXCI6IFwiXjguNC4xXCIsXG5cdFx0XCJAaXp1aS9zY3JpcHRzXCI6IFwiKlwiLFxuXHRcdFwiQGl6dWkvdHlwZXNcIjogXCIqXCIsXG5cdFx0XCJAbXVpL21hdGVyaWFsXCI6IFwiXjUuMTUuMjFcIixcblx0XHRcIkBzdG9yeWJvb2svYWRkb24tZXNzZW50aWFsc1wiOiBcIl44LjIuMVwiLFxuXHRcdFwiQHN0b3J5Ym9vay9hZGRvbi1pbnRlcmFjdGlvbnNcIjogXCJeOC4yLjFcIixcblx0XHRcIkBzdG9yeWJvb2svYWRkb24tbGlua3NcIjogXCJeOC4yLjFcIixcblx0XHRcIkBzdG9yeWJvb2svYmxvY2tzXCI6IFwiXjguMi4xXCIsXG5cdFx0XCJAc3Rvcnlib29rL3JlYWN0XCI6IFwiXjguMi4xXCIsXG5cdFx0XCJAc3Rvcnlib29rL3JlYWN0LXZpdGVcIjogXCJeOC4yLjFcIixcblx0XHRcIkBzdG9yeWJvb2svdGVzdFwiOiBcIl44LjIuMVwiLFxuXHRcdFwiQHRlc3RpbmctbGlicmFyeS9kb21cIjogXCJeMTAuMy4xXCIsXG5cdFx0XCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjYuNC42XCIsXG5cdFx0XCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCI6IFwiXjE2LjAuMFwiLFxuXHRcdFwiQHR5cGVzL2xvZGFzaFwiOiBcIl40LjE3LjZcIixcblx0XHRcIkB0eXBlcy9tYXJrZG93bi1pdFwiOiBcIjE0LjEuMVwiLFxuXHRcdFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTQuOVwiLFxuXHRcdFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjMuM1wiLFxuXHRcdFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4zLjBcIixcblx0XHRcIkB0eXBlcy9yZWFjdC1nb29nbGUtcmVjYXB0Y2hhXCI6IFwiXjIuMS45XCIsXG5cdFx0XCJAdHlwZXMvcmVhY3Qtcm91dGVyLWRvbVwiOiBcIl41LjMuM1wiLFxuXHRcdFwiQHR5cGVzL3V1aWRcIjogXCJeMTAuMC4wXCIsXG5cdFx0XCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIl40LjMuMVwiLFxuXHRcdFwiQHZpdGVzdC9jb3ZlcmFnZS12OFwiOiBcIl4yLjAuNVwiLFxuXHRcdFwiQHZpdGVzdC91aVwiOiBcIl4yLjAuNVwiLFxuXHRcdFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMTlcIixcblx0XHRcImNsYXNzbmFtZXNcIjogXCJeMi41LjFcIixcblx0XHRcImNzc25hbm9cIjogXCJeNy4wLjNcIixcblx0XHRcImVtYmxhLWNhcm91c2VsXCI6IFwiXjguMS42XCIsXG5cdFx0XCJlbWJsYS1jYXJvdXNlbC1yZWFjdFwiOiBcIl44LjEuNlwiLFxuXHRcdFwiZXNsaW50XCI6IFwiXjkuNi4wXCIsXG5cdFx0XCJlc2xpbnQtY29uZmlnLXByZXR0aWVyXCI6IFwiXjkuMS4wXCIsXG5cdFx0XCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjcuMzQuM1wiLFxuXHRcdFwiZXNsaW50LXBsdWdpbi1zdG9yeWJvb2tcIjogXCJeMC44LjBcIixcblx0XHRcImZyYW1lci1tb3Rpb25cIjogXCJeMTEuMi4xMlwiLFxuXHRcdFwiaGlnaGxpZ2h0LmpzXCI6IFwiXjExLjkuMFwiLFxuXHRcdFwiaTE4bmV4dFwiOiBcIl4yMy4xMS41XCIsXG5cdFx0XCJqc2RvY1wiOiBcIl40LjAuM1wiLFxuXHRcdFwianNkb21cIjogXCJeMjQuMS4wXCIsXG5cdFx0XCJsb2Rhc2hcIjogXCJeNC4xNy4yMVwiLFxuXHRcdFwibWFya2Rvd24taXRcIjogXCJeMTQuMS4wXCIsXG5cdFx0XCJwb3N0Y3NzXCI6IFwiXjguNC4zOVwiLFxuXHRcdFwicG9zdGNzcy1wcmVzZXQtZW52XCI6IFwiXjkuNS4xNVwiLFxuXHRcdFwicG9zdGNzcy1zYWZlLXBhcnNlclwiOiBcIl43LjAuMFwiLFxuXHRcdFwicHJldHRpZXJcIjogXCJeMy4zLjJcIixcblx0XHRcInJlYWN0XCI6IFwiXjE4LjNcIixcblx0XHRcInJlYWN0LWRhdGEtZ3JpZFwiOiBcIjcuMC4wLWJldGEuNDRcIixcblx0XHRcInJlYWN0LWRvbVwiOiBcIl4xOC4zXCIsXG5cdFx0XCJyZWFjdC1nb29nbGUtcmVjYXB0Y2hhXCI6IFwiXjMuMS4wXCIsXG5cdFx0XCJyZWFjdC1pMThuZXh0XCI6IFwiXjE0LjEuMlwiLFxuXHRcdFwicmVhY3QtaWNvbnNcIjogXCJeNS4yLjFcIixcblx0XHRcInJlYWN0LXBsYXllclwiOiBcIl4yLjE2LjBcIixcblx0XHRcInJlYWN0LXJlZHV4XCI6IFwiXjkuMS4yXCIsXG5cdFx0XCJyZWFjdC1yb3V0ZXItZG9tXCI6IFwiXjYuMjQuMFwiLFxuXHRcdFwicmVhY3Qtc2Nyb2xsLXBhcmFsbGF4XCI6IFwiXjMuNC41XCIsXG5cdFx0XCJyZWFjdC11c2VcIjogXCJeMTcuNS4wXCIsXG5cdFx0XCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjogXCJeNS4xMi4wXCIsXG5cdFx0XCJzYXNzXCI6IFwiXjEuNzcuOFwiLFxuXHRcdFwic3Rvcnlib29rXCI6IFwiXjguMi4xXCIsXG5cdFx0XCJzdHlsZWxpbnRcIjogXCJeMTYuNi4xXCIsXG5cdFx0XCJzdHlsZWxpbnQtY29uZmlnLXJlY29tbWVuZGVkLXNjc3NcIjogXCJeMTQuMC4wXCIsXG5cdFx0XCJzdHlsZWxpbnQtb3JkZXJcIjogXCJeNi4wLjRcIixcblx0XHRcInN0eWxlbGludC1zY3NzXCI6IFwiXjYuMy4yXCIsXG5cdFx0XCJ0cy1ub2RlXCI6IFwiXjEwLjkuMlwiLFxuXHRcdFwidHlwZXNjcmlwdFwiOiBcIl41LjUuNFwiLFxuXHRcdFwidHlwZXNjcmlwdC1lc2xpbnRcIjogXCJeNy4xNC4xXCIsXG5cdFx0XCJ1dWlkXCI6IFwiXjEwLjAuMFwiLFxuXHRcdFwidml0ZVwiOiBcIl41LjMuMlwiLFxuXHRcdFwidml0ZS1wbHVnaW4tY2hlY2tlclwiOiBcIl4wLjcuMVwiLFxuXHRcdFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiXjMuOS4xXCIsXG5cdFx0XCJ2aXRlLXBsdWdpbi1lc2xpbnRcIjogXCJeMS44LjFcIixcblx0XHRcInZpdGUtcGx1Z2luLXN0eWxlbGludFwiOiBcIl41LjMuMVwiLFxuXHRcdFwidml0ZS10c2NvbmZpZy1wYXRoc1wiOiBcIl40LjMuMlwiLFxuXHRcdFwidml0ZXN0XCI6IFwiXjIuMC4xXCJcblx0fSxcblx0XCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcIkBlbW90aW9uL2NhY2hlXCI6IFwiXjExLjExLjBcIixcblx0XHRcIkBlbW90aW9uL3JlYWN0XCI6IFwiXjExLjExLjRcIixcblx0XHRcIkBlbW90aW9uL3N0eWxlZFwiOiBcIl4xMS4xMS41XCIsXG5cdFx0XCJAbXVpL21hdGVyaWFsXCI6IFwiXjUuMTUuMjFcIixcblx0XHRcImNsYXNzbmFtZXNcIjogXCJeMi41LjFcIixcblx0XHRcImVtYmxhLWNhcm91c2VsXCI6IFwiXjguMS42XCIsXG5cdFx0XCJlbWJsYS1jYXJvdXNlbC1yZWFjdFwiOiBcIl44LjEuNlwiLFxuXHRcdFwiZnJhbWVyLW1vdGlvblwiOiBcIl4xMS4yLjEyXCIsXG5cdFx0XCJoaWdobGlnaHQuanNcIjogXCJeMTEuOS4wXCIsXG5cdFx0XCJpMThuZXh0XCI6IFwiXjIzLjExLjVcIixcblx0XHRcImxvZGFzaFwiOiBcIl40LjE3LjIxXCIsXG5cdFx0XCJtYXJrZG93bi1pdFwiOiBcIl4xNC4xLjBcIixcblx0XHRcInJlYWN0XCI6IFwiXjE4LjNcIixcblx0XHRcInJlYWN0LWRhdGEtZ3JpZFwiOiBcIjcuMC4wLWJldGEuNDRcIixcblx0XHRcInJlYWN0LWRvbVwiOiBcIl4xOC4zXCIsXG5cdFx0XCJyZWFjdC1nb29nbGUtcmVjYXB0Y2hhXCI6IFwiXjMuMS4wXCIsXG5cdFx0XCJyZWFjdC1pMThuZXh0XCI6IFwiXjE0LjEuMlwiLFxuXHRcdFwicmVhY3QtaWNvbnNcIjogXCJeNS4yLjFcIixcblx0XHRcInJlYWN0LXBsYXllclwiOiBcIl4yLjE2LjBcIixcblx0XHRcInJlYWN0LXJlZHV4XCI6IFwiXjkuMS4yXCIsXG5cdFx0XCJyZWFjdC1yb3V0ZXItZG9tXCI6IFwiXjYuMjQuMFwiLFxuXHRcdFwicmVhY3Qtc2Nyb2xsLXBhcmFsbGF4XCI6IFwiXjMuNC41XCIsXG5cdFx0XCJyZWFjdC11c2VcIjogXCJeMTcuNS4wXCIsXG5cdFx0XCJ1dWlkXCI6IFwiXjEwLjAuMFwiXG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUU3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8scUJB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
