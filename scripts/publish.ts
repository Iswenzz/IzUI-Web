import fs from "fs";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import publishPackage from "@izui/scripts/commands/publish";

type CLI = { _: string[] };

const argv = yargs(hideBin(process.argv)).demandCommand(1, "Usage: pnpm publish <packageName>")
	.argv as CLI;

const commands = argv._;

/**
 * Build and publish packages.
 */
const publish = async () => {
	for (const packageName of commands) {
		const packagePath = path.join("packages", packageName);

		if (!fs.existsSync(packagePath)) {
			throw new Error(`Could not find package ${packagePath}`);
		}
		await publishPackage({
			packageName,
			packagePath,
			publishOnNpmJS: true,
			publishOnGPR: false
		});
	}
};

publish();
