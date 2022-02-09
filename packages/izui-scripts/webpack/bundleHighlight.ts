import { ContextReplacementPlugin, Compiler, WebpackPluginInstance } from "webpack";

/**
 * Bundle only the configured languages.
 */
class BundleHighlightPlugin implements WebpackPluginInstance
{
	public config: BundleHighlightPluginConfig;

	/**
	 * Initialize a new @see BundleHighlightPlugin.
	 * @param config - The plugin config.
	 */
	public constructor(config: BundleHighlightPluginConfig)
	{
		this.config = config;
	}

	/**
	 * Apply the plugin to webpack.
	 * @param compiler - The webpack compiler.
	 */
	public apply(compiler: Compiler)
	{
		new ContextReplacementPlugin(
			new RegExp(`^./(${this.config.languages.join("|")})$`))
			.apply(compiler);
	}
}

export type BundleHighlightPluginConfig = {
	languages: string[]
};

export default BundleHighlightPlugin;
