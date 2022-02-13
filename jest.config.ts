import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	projects: ["<rootDir>/packages/*"],
	modulePathIgnorePatterns: ["<rootDir>/build"],
	coverageDirectory: "coverage",
	coverageReporters: ["text", "cobertura", "lcov"],
	collectCoverage: true,
};

export default config;
