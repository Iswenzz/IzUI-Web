const { createJestAliasesFromTSConfig } = require("../../scripts/createAliases");
const tsConfigPaths = require("./tsconfig.paths.json");

module.exports = {
	setupFilesAfterEnv: ["<rootDir>/src/__test__/setupTests.ts"],
	testMatch: ["<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}"],
	collectCoverageFrom: [
		"<rootDir>/src/**/*.{js,jsx,ts,tsx}",
		"!**/node_modules/**",
		"!**/__test__/**/*.js"
	],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
		"^.+\\.scss$": require.resolve("../../scripts/mockTransform.js"),
		"^.+\\.(ico|png|jpg|webp|gif|svg)$": require.resolve("../../scripts/fileTransform.js")
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
