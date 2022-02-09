import type { Config } from "@jest/types";

import { createJestAliasesFromTSConfig } from "@izui/scripts/utils/createAliases";
import tsConfigPaths from "./tsconfig.paths.json";

const config: Config.InitialOptions = {
	setupFilesAfterEnv: ["<rootDir>/src/__test__/setupTests.ts"],
	testMatch: ["<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}"],
	collectCoverageFrom: [
		"<rootDir>/src/**/*.{js,jsx,ts,tsx}",
		"!**/node_modules/**",
		"!**/__test__/**/*.js"
	],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": require.resolve("ts-jest"),
		"^.+\\.scss$": require.resolve("@izui/scripts/mock/mockTransform"),
		"^.+\\.(ico|png|jpg|webp|gif|svg)$": require.resolve("@izui/scripts/mock/fileTransform")
	},
	moduleNameMapper: {
		...createJestAliasesFromTSConfig(tsConfigPaths),
		".*\\.scss$": "identity-obj-proxy"
	},
	testURL: "http://localhost/",
	testEnvironment: "jest-environment-jsdom",
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "scss"],
	coverageReporters: ["text", "cobertura", "lcov"]
};

export default config;
