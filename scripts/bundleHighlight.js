const { ContextReplacementPlugin } = require("webpack");

/**
 * Bundle only the configured languages.
 */
class BundleHighlightPlugin
{
	constructor(config)
	{
		this.config = config;
	}

	apply(compiler)
	{
		new ContextReplacementPlugin(new RegExp(`^./(${this.config.languages.join('|')})$`))
			.apply(compiler);
	}
}

module.exports = BundleHighlightPlugin
