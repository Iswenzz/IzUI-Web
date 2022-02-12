import { execSync } from "child_process";
import path from "path";
import fs from "fs";

import { copyToBuild } from "@izui/scripts/utils/copy";
import { BuilderOptions } from "./buildWebpack";

/**
 * Increment the package version.
 */
export const incrementVersion = () =>
{
	execSync("yarn version patch");
};

/**
 * Build library package.json.
 * @param options - The builder options.
 */
const buildLibraryPackageJson = async ({
	packageJsonPath = "", outputPath = "", types, entry, copyTo
}: BuilderOptions) =>
{
	if (!packageJsonPath || !outputPath)
		throw new Error("Must specify the 'packageJsonPath', 'outputPath' options.");

	if (!fs.existsSync(packageJsonPath))
		throw new Error("'packageJsonPath' option should have the library's package.json resolved path.");
	const packageJson = require(packageJsonPath);

	// Version
	incrementVersion();

	// Modify package.json
	if (entry) packageJson.main = entry;
	if (types) packageJson.types = types;
	delete packageJson.files;
	delete packageJson.private;
	fs.writeFileSync(path.join(outputPath, "package.json"), JSON.stringify(packageJson, null, 4));

	// Copy additional files
	if (copyTo) copyToBuild(copyTo);
};

export default buildLibraryPackageJson;
