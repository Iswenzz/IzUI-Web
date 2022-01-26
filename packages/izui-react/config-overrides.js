const path = require("path");
const paths = require("react-scripts/config/paths");
const tsConfigPaths = require("./tsconfig.paths.json");
const StylelintPlugin = require("stylelint-webpack-plugin");

const {
	override,
	overrideDevServer,
	watchAll,
	addWebpackAlias,
	addWebpackPlugin
} = require("customize-cra");

const createWebpackAliasesFromTSConfig = () =>
{
	const aliasPaths = tsConfigPaths.compilerOptions.paths;
	return Object.keys(aliasPaths).reduce((alias, currentPath) =>
	{
		const value = aliasPaths[currentPath];
		const target = Array.isArray(value) ? value[0] : value;

		alias[currentPath.replace(/\/\*$/, "")] = path.resolve(paths.appPath, target.replace(/\/\*$/, ""));
		return alias;
	}, {});
};

module.exports.webpack = override(
	addWebpackAlias({
		...createWebpackAliasesFromTSConfig(),
		"react/jsx-runtime": require.resolve("react/jsx-runtime")
	}),
	addWebpackPlugin(new StylelintPlugin({ configPaths: "../../.stylelintrc" }))
);

module.exports.paths = paths =>
{
	paths.appIndexJs = path.resolve(__dirname, "fixtures/src/index.tsx");
	paths.appSrc = path.resolve(__dirname, "fixtures/src");
	return paths;
};

module.exports.devServer = overrideDevServer(
	watchAll()
);
