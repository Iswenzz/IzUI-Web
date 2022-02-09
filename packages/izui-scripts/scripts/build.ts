import buildTsc from "@izui/scripts/webpack/buildTsc";

export default () => buildTsc({
	packageJsonPath: require.resolve("../package.json"),
	outputPath: "build",
	copyTo: [
		{ from: "LICENSE" },
		{ from: "README.md" }
	]
});
