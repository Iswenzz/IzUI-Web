import fs from "fs";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import publishPackage from "@izui/scripts/yarn/publish";

const argv = yargs(hideBin(process.argv))
	.demandCommand(1, "Usage: yarn publish <packageDirectory>")
	.argv as CLI;
const commands = argv._;

/**
 * Build and publish packages.
 */
const publish = async () =>
{
	for (const command of commands)
	{
		process.chdir(path.join(__dirname, ".."));
		const packagePath = path.join("packages", command);
		const resolvedPackagePath = path.resolve(packagePath);

		if (fs.existsSync(packagePath))
		{
			await publishPackage({
				packagePath: resolvedPackagePath,
				publishOnNpmJS: true,
				publishOnGPR: false
			});
		}
		else
			throw new Error(`Could not find package ${resolvedPackagePath}`);
	}
};

type CLI = { _: string[] };

publish();
