import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Configuration } from "webpack";

import ESLintPlugin from "eslint-webpack-plugin";
import StylelintPlugin from "stylelint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import TerserPlugin from "terser-webpack-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

import { createWebpackAliasesFromTSConfig } from "@izui/scripts/utils/createAliases";
import packageJson from "./package.json";
import tsConfigPaths from "./tsconfig.paths.json";

const config = () =>
{
	const argv = yargs(hideBin(process.argv)).options({
		mode: { type: "string", default: "production" },
		analyze: { type: "boolean", default: false }
	}).argv as CLI;
	console.log(`Building in ${argv.mode} mode.\n`);

	const configuration: Configuration = {
		mode: argv.mode,
		devtool: "source-map",
		externals: Object.keys(packageJson.peerDependencies),
		entry: {
			index: "./src/index.ts",
		},
		output: {
			filename: "index.js",
			path: path.resolve(__dirname, "build"),
			library: {
				type: "umd"
			}
		},
		resolve: {
			extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".css", ".scss", ".json"],
			alias: createWebpackAliasesFromTSConfig(tsConfigPaths)
		},
		plugins: [
			new CleanWebpackPlugin(),
			new NodePolyfillPlugin(),
			new MiniCssExtractPlugin({
				filename: "[name].css",
				chunkFilename: "[id].css",
			}),
			new StylelintPlugin({
				configFile: ".stylelintrc"
			}),
			new ESLintPlugin({
				extensions: ["js", "jsx", "ts", "tsx"]
			})
		],
		module: {
			rules: [
				{	// typescript babel
					test: /\.(tsx?)$/,
					include: /(src)/,
					exclude: /(__test__)/,
					use: "babel-loader"
				},
				{	// typescript definitions
					test: /\.(tsx?)$/,
					include: /(src)/,
					exclude: /(__test__)/,
					use: "ts-loader"
				},
				{	// file loader
					test: /\.(png|jpg|gif|webp)$/,
					type: "asset"
				},
				{	// font loader
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					type: "asset/inline"
				},
				{	// svg inline loader
					test: /\.(svg)$/,
					type: "asset/inline"
				},
				{	// css & sass & postcss loader
					test: /\.(s[ac]ss|css)$/i,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: {
								modules: {
									mode: "local",
									localIdentName: "[local]--[hash:base64:5]"
								}
							}
						},
						"resolve-url-loader",
						"postcss-loader",
						"sass-loader"
					]
				}
			]
		},
		performance: {
			hints: false
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					exclude: /(scripts)/,
				}),
			],
		},
	};

	if (configuration.plugins)
	{
		if (argv.analyze)
			configuration.plugins.push(new BundleAnalyzerPlugin());
	}
	return configuration;
};

export type CLI = {
	mode: "none" | "development" | "production",
	analyze: boolean
};

export default config;
