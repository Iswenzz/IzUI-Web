const path = require("path");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const { createWebpackAliasesFromTSConfig } = require("../../scripts/createAliases");
const packageJson = require("./package.json");
const tsConfigPaths = require("./tsconfig.paths.json");

module.exports = () =>
{
	const argv = yargs(hideBin(process.argv)).options({
		mode: { type: "string", default: "production" },
	}).argv;
	console.log(`Building in ${argv.mode} mode.\n`);

	return {
		mode: argv.mode,
		devtool: "source-map",
		externals: Object.keys(packageJson.peerDependencies),
		entry: {
			index: "./src/index.ts",
		},
		output: {
			filename: "index.js",
			path: path.resolve(__dirname, "build/dist"),
			library: {
				type: "umd"
			}
		},
		resolve: {
			extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".css", ".scss", ".json"],
			alias: {
				"react/jsx-runtime": require.resolve("react/jsx-runtime"),
				...createWebpackAliasesFromTSConfig(tsConfigPaths)
			}
		},
		plugins: [
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: "[name].css",
				chunkFilename: "[id].css",
			}),
			new StylelintPlugin({
				configFile: ".stylelintrc"
			}),
			new ESLintPlugin({
				extensions: ["js", "jsx", "ts", "tsx"]
			}),
			new CopyPlugin({
				patterns: [
					{ from: "src", to: "../src" },
					{ from: "src/types", to: "types" },
					{ from: "src/izui-react.d.ts" },
					{ from: "LICENSE", to: ".." }
				],
			}),
		],
		module: {
			rules: [
				{	// typescript babel
					test: /\.(tsx?)$/,
					include: /(src)/,
					use: "babel-loader"
				},
				{	// typescript definitions
					test: /\.(tsx?)$/,
					include: /(src)/,
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
						"postcss-loader",
						"sass-loader"
					]
				}
			]
		},
		performance: {
			hints: false
		}
	};
};
