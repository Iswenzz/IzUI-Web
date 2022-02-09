import path from "path";

/**
 * Create webpack aliases.
 * @param config - The TS config.
 * @returns
 */
export const createWebpackAliasesFromTSConfig = (config: any) =>
{
	const aliasPaths: TSPaths = config.compilerOptions.paths;
	return Object.keys(aliasPaths).reduce<TSPaths>((alias, current) =>
	{
		const row = aliasPaths[current];
		const paths = Array.isArray(row) ? row : [row];

		const computedAliases: string[] = [];
		paths.forEach(targetPath => computedAliases.push(path.resolve(
			process.cwd(), removeWildCard(targetPath))));
		alias[removeWildCard(current)] = computedAliases;
		return alias;
	}, {});
};

/**
 * Create webpack babel include.
 * @param config - The TS config.
 * @returns
 */
export const createWebpackBabelIncludeFromTSConfig = (config: any) =>
	config.include.map((current: string) => path.resolve(current));

/**
 * Create Jest aliases.
 * @param config - The TS config.
 * @returns
 */
export const createJestAliasesFromTSConfig = (config: any) =>
{
	const aliasPaths: TSPaths = config.compilerOptions.paths;
	return Object.keys(aliasPaths).reduce<JestPaths>((alias, current) =>
	{
		const row = aliasPaths[current];
		const paths = Array.isArray(row) ? row : [row];

		const computedAliases: string[] = [];
		paths.forEach(targetPath => computedAliases.push(path.resolve(
			process.cwd(), removeWildCard(targetPath))));

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

export type TSPaths = Record<string, string[]>;
export type JestPaths = Record<string, string>;
