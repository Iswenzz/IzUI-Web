import path from "path";
import chalk from "chalk";
import { execSync } from "child_process";

/**
 * Increment the package version.
 */
export const incrementVersion = () =>
{
	execSync("yarn version patch");
};

/**
 * Publish a package.
 * @param packagePath - The package path.
 */
export const publishPackage = async (packagePath: string) =>
{
	const packageName = path.basename(packagePath);
	process.chdir(packagePath);

	incrementVersion();

	try
	{
		// Build script
		const buildScript = require.resolve(path.join(packagePath, "scripts/build"));
		console.log(chalk.green(`Building ${packageName}`));

		if (buildScript)
		{
			const { default: buildCallback } = require(buildScript);
			await buildCallback();
			process.chdir("build");
		}
	}
	catch { }

	console.log(chalk.blue(`Publishing ${packageName}`));
	execSync("npm publish --access public");
};

export default publishPackage;
