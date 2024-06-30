import { Configuration } from "webpack";
import "webpack-dev-server";

import base from "./webpack.config";

const dev = (): Configuration => {
	const config = base();
	return {
		...config,
		mode: "development",
		devtool: "eval-source-map",
		devServer: {
			static: {
				directory: "public"
			},
			client: {
				overlay: {
					errors: true,
					warnings: false
				}
			},
			compress: true,
			hot: true,
			port: 3000
		}
	};
};

export default dev;
