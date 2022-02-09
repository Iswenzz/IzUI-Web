import buildLibraryPackageJson from "./buildLibraryPackageJson";
import { BuilderOptions } from "./buildWebpack";

/**
 * Build extra options.
 * @param options - The options.
 */
const buildExtra = async (options: BuilderOptions) =>
{
	// Build library package
	if (!options.buildLibraryPackageJson)
		options.buildLibraryPackageJson = buildLibraryPackageJson;
	await buildLibraryPackageJson(options);

	// Postbuild
	if (options.postBuild)
		await options.postBuild(options);
};

export default buildExtra;
