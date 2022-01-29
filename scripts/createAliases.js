const path = require("path");

const createWebpackAliasesFromTSConfig = config =>
{
	const aliasPaths = config.compilerOptions.paths;
	return Object.keys(aliasPaths).reduce((alias, current) =>
	{
		const row = aliasPaths[current];
		const paths = Array.isArray(row) ? row : [row];

		const computedAliases = [];
		paths.forEach(targetPath => computedAliases.push(path.resolve(
			process.cwd(), removeWildCard(targetPath))));
		alias[removeWildCard(current)] = computedAliases;
		return alias;
	}, {});
};

const createJestAliasesFromTSConfig = config =>
{
	const aliasPaths = config.compilerOptions.paths;
	return Object.keys(aliasPaths).reduce((alias, current) =>
	{
		const row = aliasPaths[current];
		const paths = Array.isArray(row) ? row : [row];

		const computedAliases = [];
		paths.forEach(targetPath => computedAliases.push(path.resolve(
			process.cwd(), removeWildCard(targetPath))));

		const entry = `^${removeWildCard(current)}${hasWildCard(current) ? "(.*)" : ""}$`;
		alias[entry] = `${computedAliases}${hasWildCard(current) ? "$1" : ""}`;
		return alias;
	}, {});
};

const hasWildCard = string => /\/\*$/.test(string);
const removeWildCard = string => string.replace(/\/\*$/, "");

module.exports = {
	createWebpackAliasesFromTSConfig,
	createJestAliasesFromTSConfig,
	removeEndSlash: removeWildCard
};
