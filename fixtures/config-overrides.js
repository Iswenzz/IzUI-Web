const StylelintPlugin = require("stylelint-webpack-plugin");

const {
	override,
	overrideDevServer,
	watchAll,
	addWebpackPlugin
} = require("customize-cra");

module.exports.webpack = override(
	addWebpackPlugin(new StylelintPlugin({ configPaths: "../../.stylelintrc" }))
);

module.exports.devServer = overrideDevServer(
	watchAll()
);
