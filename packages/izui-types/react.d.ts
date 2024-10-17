import "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Theme {
		name: string;
		isDark: boolean;
	}

	interface ThemeOptions {
		name?: string;
		isDark?: boolean;
	}
}
