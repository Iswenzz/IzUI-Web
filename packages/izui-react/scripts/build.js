const builder = require("@izui/scripts/webpack/build");
const config = require("../webpack.config")();

builder(config, {
	packageJsonPath: require.resolve("../package.json")
});
