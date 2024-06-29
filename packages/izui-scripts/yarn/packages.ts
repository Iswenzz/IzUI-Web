import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import chalk from "chalk";

/**
 * Run command on package.
 * @param packagePath - The package path.
 */
export const runOnPackage = async (packagePath: string, command: string) => {
	const packageName = path.basename(packagePath);
	process.chdir(packagePath);

	console.log(chalk.blue(`Running "${command}" on ${packageName}`));
	execSync(command);
};

/**
 * Run command on packages.
 * @param name - Packages starting with this name.
 * @param packagesDir - The packages folder path.
 */
const runOnPackages = async ({
	runOnPackage: run = runOnPackage,
	packagesDirectory,
	packagesFilter,
	command = ""
}: PackageOptions) => {
	const packages = fs
		.readdirSync(packagesDirectory)
		.filter(packageName => packageName.startsWith(packagesFilter || ""));
	console.log("packages", packages);

	for (const packageName of packages)
		await run(path.join(path.resolve(packagesDirectory), packageName), command);
};

export type PackageOptions = {
	runOnPackage?: (packagePath: string, command: string) => Promise<void>;
	packagesFilter?: string;
	packagesDirectory: string;
	command?: string;
};

export default runOnPackages;
