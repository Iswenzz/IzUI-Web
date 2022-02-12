import path from "path";
import chalk from "chalk";
import { execSync } from "child_process";

/**
 * Publish a package.
 * @param packagePath - The package path.
 */
export const publishPackage = async (packagePath: string, buildScriptPath = "scripts/build") =>
{
	const packageName = path.basename(packagePath);
	process.chdir(packagePath);

	try
	{
		// Build script
		const buildScript = require.resolve(path.join(packagePath, buildScriptPath));
		console.log(chalk.green(`Building ${packageName}`));

		if (buildScript)
		{
			const { default: buildCallback } = require(buildScript);
			try
			{
				await buildCallback();
				process.chdir("build");
			}
			catch (err)
			{
				console.error(err);
				process.exit(-1);
			}
		}
	}
	catch { }

	console.log(chalk.blue(`Publishing ${packageName}`));
	execSync("npm publish --access public");
};

export default publishPackage;
