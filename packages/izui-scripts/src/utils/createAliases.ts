import path from "path";

/**
 * Create webpack aliases.
 * @param config - The TS config.
 * @returns
 */
export const createWebpackAliasesFromTSConfig = (config: TSConfig, rootDir = process.cwd()) => {
	const aliasPaths = config.compilerOptions.paths;
	return Object.keys(aliasPaths).reduce<TSPaths>((alias, current) => {
		const row = aliasPaths[current];
		const [currentPath] = Array.isArray(row) ? row : [row];
		const computedAliases = path.resolve(rootDir, removeWildCard(currentPath));
		alias[removeWildCard(current)] = computedAliases;
		return alias;
	}, {});
};

/**
 * Create Jest aliases.
 * @param config - The TS config.
 * @returns
 */
export const createJestAliasesFromTSConfig = (config: TSConfig, rootDir = process.cwd()) => {
	const aliasPaths = config.compilerOptions.paths;
	return Object.keys(aliasPaths).reduce<JestPaths>((alias, current) => {
		const row = aliasPaths[current];
		const [currentPath] = Array.isArray(row) ? row : [row];
		const computedAliases = path.resolve(rootDir, removeWildCard(currentPath));
		const entry = `^${removeWildCard(current)}${hasWildCard(current) ? "(.*)" : ""}$`;
		alias[entry] = `${computedAliases}${hasWildCard(current) ? "$1" : ""}`;
		return alias;
	}, {});
};

/**
 * String has wildcard.
 * @param string - The string value.
 * @returns
 */
export const hasWildCard = (string: string) => /\/\*$/.test(string);

/**
 * Remove wildcard from string.
 * @param string - The string value.
 * @returns
 */
export const removeWildCard = (string: string) => string.replace(/\/\*$/, "");

export type TSConfig = {
	compilerOptions: {
		paths: Record<string, string | string[]>;
	};
};

export type TSPaths = Record<string, string>;
export type JestPaths = Record<string, string>;
