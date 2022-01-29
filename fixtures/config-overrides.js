const path = require("path");
const tsConfigPaths = require("./tsconfig.paths.json");
const StylelintPlugin = require("stylelint-webpack-plugin");
const createWebpackAliasesFromTSConfig = require("../scripts/createAliases");

const {
	override,
	overrideDevServer,
	watchAll,
	addWebpackAlias,
	addWebpackPlugin,
	babelInclude,
} = require("customize-cra");

module.exports.webpack = override(
	addWebpackAlias({
		...createWebpackAliasesFromTSConfig(tsConfigPaths),
		"react/jsx-runtime": require.resolve("react/jsx-runtime")
	}),
	addWebpackPlugin(new StylelintPlugin({ configPaths: ".stylelintrc" })),
	babelInclude([
		path.resolve("src"),
		path.resolve("../packages/izui-react/src")
	])
);

module.exports.devServer = overrideDevServer(
	watchAll()
);
