import path from "path";

import buildWebpack from "@izui/scripts/webpack/buildWebpack";
import config from "../webpack.config";

export default () => buildWebpack(config(), {
	packageJsonPath: require.resolve("../package.json"),
	outputPath: path.resolve(path.join(__dirname, "../build")),
	entry: "index.js",
	types: "izui-react.d.ts",
	copyTo: [
		{ from: "src/types", to: "types" },
		{ from: "src/izui-react.d.ts" },
		{ from: "LICENSE" },
		{ from: "README.md" }
	]
});
