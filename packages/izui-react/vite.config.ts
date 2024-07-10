import { PluginOption } from "vite";
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import stylelintPlugin from "vite-plugin-stylelint";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";

const config = defineConfig(({ mode }) => ({
	root: ".",
	base: "/",
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
				}) as PluginOption
			],
			external: /node_modules/
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
		root: "src",
		globals: true,
		watch: false,
		environment: "jsdom",
		setupFiles: "__test__/setup.ts"
	}
}));

export default config;
