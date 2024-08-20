import { PluginOption } from "vite";
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import eslintPlugin from "vite-plugin-eslint";
import stylelintPlugin from "vite-plugin-stylelint";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";

import packageJson from "./package.json";

const config = defineConfig(({ mode }) => ({
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
			external: [
				...Object.keys(packageJson.peerDependencies),
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

export default config;
