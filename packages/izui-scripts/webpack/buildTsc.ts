import { execSync } from "child_process";

import buildExtra from "./buildExtra";
import { BuilderOptions } from "./buildWebpack";

const buildTsc = async (options: BuilderOptions) =>
{
	// Build typescript
	execSync("yarn tsc --build --verbose");

	await buildExtra(options);
};

export default buildTsc;
