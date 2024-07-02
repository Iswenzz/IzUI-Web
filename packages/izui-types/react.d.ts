import * as React from "react";
import "@mui/material/styles";

declare module "*.svg" {
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;

	const src: string;
	export default src;
}

declare module "@mui/material/styles" {
	interface Theme {
		theme: string;
		isDarkTheme: boolean;
	}

	interface ThemeOptions {
		theme?: string;
		isDarkTheme?: boolean;
	}
}
