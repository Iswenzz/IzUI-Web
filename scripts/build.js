const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

const normalizePath = str => str.replace(path.sep, "/");

const buildLibraryPackage = async (config, options) =>
{
	const { packageJsonPath } = options;
	const { path: outputPath, filename } = config.output;

	if (!fs.existsSync(packageJsonPath))
		throw new Error("'packageJsonPath' option should have the library's package.json resolved path.");
	const packageJson = require(packageJsonPath);

	packageJson.main = normalizePath(path.join("dist", filename));
	packageJson.types = normalizePath(path.join("dist", `${packageJson.name}.d.ts`));
	packageJson.files = ["src", "dist"];
	fs.writeFileSync(path.join(outputPath, "..", "package.json"), JSON.stringify(packageJson, null, 4));
};

module.exports = async (config, options) =>
{
	const compiler = webpack(config);
	compiler.run(async (errors, stats) =>
	{
		console.log(stats.toString({ minimal: true, colors: true, errorDetails: true }));

		// Build library package
		if (!options.buildLibraryPackage)
			options.buildLibraryPackage = buildLibraryPackage;
		await buildLibraryPackage(config, options);

		if (options.onClose)
			await options.onClose();
	});
};
module.exports.buildLibraryPackage = buildLibraryPackage;
