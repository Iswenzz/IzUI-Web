import webpack, { Stats, Configuration } from "webpack";
import buildExtra from "./buildExtra";

/**
 * Build webpack.
 * @param config - The webpack config.
 * @param options - The builder options.
 */
const buildWebpack = async (config: Configuration, options: BuilderOptions = {}) =>
{
	const compiler = webpack(config);

	// Build webpack
	await new Promise<void>(resolve =>
	{
		compiler.run(async (_, stats?: Stats) =>
		{
			if (stats)
			{
				console.log(stats.toString({ minimal: true, colors: true, errorDetails: true }));
				if (stats.hasErrors())
					throw new Error("Webpack compilation failed.");
			}
			resolve();
		});
	});

	await buildExtra(options);
};

export type BuilderOptions = Partial<{
	postBuild: (options: BuilderOptions) => Promise<void>,
	buildLibraryPackageJson: (options: BuilderOptions) => Promise<void>,
	packageJsonPath: string,
	copyTo: FilePattern[],
	outputPath: string,
	entry: string,
	types: string
}>;

export type FilePattern = {
	from: string,
	to?: string
};

export default buildWebpack;
