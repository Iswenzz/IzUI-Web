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
export const publishPackage = async ({
	packagePath,
	buildScriptPath = "scripts/build",
	publishDryRun,
	publishOnNpmJS,
	publishOnGPR
}: PublishOptions) =>
{
	const packageName = path.basename(packagePath);
	process.chdir(packagePath);

	// Version
	incrementVersion();

	// Build
	try
	{
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

	// Publish
	console.log(chalk.blue(`Publishing ${packageName}`));
	if (publishDryRun)
		execSync("npm publish --dry-run");
	if (publishOnNpmJS)
		execSync("npm publish --access public --registry=https://registry.npmjs.org");
	if (publishOnGPR)
		execSync("npm publish --access public --registry=https://npm.pkg.github.com");
};

export type PublishOptions = {
	packagePath: string,
	buildScriptPath?: string,
	publishDryRun?: boolean,
	publishOnNpmJS?: boolean,
	publishOnGPR?: boolean
};

export default publishPackage;
