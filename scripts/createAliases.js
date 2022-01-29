const path = require("path");
const reactScriptPaths = require("react-scripts/config/paths");

const removeEndSlash = string => string.replace(/\/\*$/, "");

const createWebpackAliasesFromTSConfig = config =>
{
	const aliasPaths = config.compilerOptions.paths;
	return Object.keys(aliasPaths).reduce((alias, current) =>
	{
		const row = aliasPaths[current];
		const paths = Array.isArray(row) ? row : [row];

		const computedAliases = [];
		paths.forEach(targetPath => computedAliases.push(path.resolve(
			reactScriptPaths.appPath, removeEndSlash(targetPath))));
		alias[removeEndSlash(current)] = computedAliases;
		return alias;
	}, {});
};

module.exports = createWebpackAliasesFromTSConfig;
module.exports.removeEndSlash = removeEndSlash;
