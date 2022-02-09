import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	testMatch: ["<rootDir>/**/*.(test).{js,jsx,ts,tsx}"],
	collectCoverageFrom: [
		"<rootDir>/**/*.{js,jsx,ts,tsx}",
		"!**/scripts/**",
		"!**/node_modules/**",
		"!**/__test__/**/*.js"
	],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "ts-jest"
	},
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "scss"],
	coverageReporters: ["text", "cobertura", "lcov"]
};

export default config;
