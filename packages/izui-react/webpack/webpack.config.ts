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

import { createWebpackAliasesFromTSConfig } from "@izui/scripts/utils/createAliases";
import tsConfigPaths from "../tsconfig.paths.json";

const base = () => {
	const argv = yargs(hideBin(process.argv)).options({
		analyze: { type: "boolean", default: false }
	}).argv as CLI;

	const configuration: Configuration = {
		mode: "production",
		entry: {
			index: "./fixtures/index.tsx"
		},
		output: {
			filename: "index.js",
			path: path.resolve("build")
		},
		resolve: {
			extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss", ".json"],
			alias: createWebpackAliasesFromTSConfig(tsConfigPaths)
		},
		plugins: [
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: "[name].css",
				chunkFilename: "[id].css"
			}),
			new StylelintPlugin({
				configFile: ".stylelintrc"
			}),
			new ESLintPlugin({
				extensions: ["js", "jsx", "ts", "tsx"],
				eslintPath: "eslint/use-at-your-own-risk",
				configType: "flat"
			})
		],
		module: {
			rules: [
				{
					// typescript loader
					test: /\.(tsx?)$/,
					include: /(src)/,
					exclude: /(__test__)/,
					use: "ts-loader"
				},
				{
					// file loader
					test: /\.(png|jpg|gif|webp)$/,
					type: "asset"
				},
				{
					// svg & font loader
					test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
					type: "asset/inline"
				},
				{
					// css & scss & postcss loader
					test: /\.(scss|css)$/i,
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
					exclude: /(scripts)/
				})
			]
		}
	};
	if (configuration.plugins) {
		if (argv.analyze) configuration.plugins.push(new BundleAnalyzerPlugin());
	}
	return configuration;
};

export type CLI = {
	analyze: boolean;
};

export default base;
