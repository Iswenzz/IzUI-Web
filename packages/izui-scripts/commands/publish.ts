import chalk from "chalk";
import { execSync } from "child_process";

/**
 * Publish a package.
 */
export const publishPackage = async ({
	packageName,
	packagePath,
	publishDryRun,
	publishOnNpmJS,
	publishOnGPR
}: PublishOptions) => {
	const cwd = process.cwd();

	// Build
	process.chdir(packagePath);
	console.log(chalk.green(`Building ${packageName}`));
	execSync("pnpm version patch");
	execSync("pnpm build");

	// Publish
	console.log(chalk.blue(`Publishing ${packageName}`));
	if (publishDryRun) execSync("npm publish --dry-run");
	if (publishOnNpmJS)
		execSync("npm publish --access public --registry=https://registry.npmjs.org");
	if (publishOnGPR) execSync("npm publish --access public --registry=https://npm.pkg.github.com");
	process.chdir(cwd);
};

export type PublishOptions = {
	packageName: string;
	packagePath: string;
	publishDryRun?: boolean;
	publishOnNpmJS?: boolean;
	publishOnGPR?: boolean;
};

export default publishPackage;
