import "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Theme {
		theme: string;
		isDark: boolean;
	}

	interface ThemeOptions {
		theme?: string;
		isDark?: boolean;
	}
}
