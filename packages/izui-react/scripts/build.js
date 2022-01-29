const builder = require("../../../scripts/build");
const config = require("../webpack.config")();

builder(config, {
	packageJsonPath: require.resolve("../package.json")
});
