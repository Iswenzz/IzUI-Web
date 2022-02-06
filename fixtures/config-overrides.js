const path = require("path");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const StylelintPlugin = require("stylelint-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const BundleHighlightPlugin = require("../scripts/bundleHighlight");
const { createWebpackAliasesFromTSConfig } = require("../scripts/createAliases");
const highlightConfig = require("./src/config/highlight.json");
const tsConfigPaths = require("./tsconfig.paths.json");

const {
	override,
	overrideDevServer,
	watchAll,
	addWebpackAlias,
	addWebpackPlugin,
	babelInclude,
} = require("customize-cra");

const argv = yargs(hideBin(process.argv)).options({
	mode: { type: "string", default: "production" },
	analyze: { type: "boolean", default: false }
}).argv;
console.log(`Building in ${argv.mode} mode.\n`);

module.exports.webpack = override(
	addWebpackAlias({
		...createWebpackAliasesFromTSConfig(tsConfigPaths),
		"react/jsx-runtime": require.resolve("react/jsx-runtime")
	}),
	addWebpackPlugin(new BundleHighlightPlugin(highlightConfig)),
	addWebpackPlugin(new StylelintPlugin({ configPaths: ".stylelintrc" })),
	argv.analyze ? addWebpackPlugin(new BundleAnalyzerPlugin()) : null,
	babelInclude([
		path.resolve("src"),
		path.resolve("../packages/izui-react/src")
	])
);

module.exports.devServer = overrideDevServer(
	watchAll()
);
