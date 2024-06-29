export default {
	parser: require("postcss-safe-parser"),
	plugins: [
		require("autoprefixer"),
		require("postcss-preset-env"),
		require("postcss-font-magician"),
		require("postcss-flexbugs-fixes"),
		require("cssnano")
	]
};
