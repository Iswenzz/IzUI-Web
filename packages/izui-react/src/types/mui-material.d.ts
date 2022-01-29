import "@mui/material/styles";
declare module "@mui/material/styles"
{
	interface Theme
	{
		theme: string,
		isDarkTheme: boolean
	}

	interface ThemeOptions
	{
		theme?: string,
		isDarkTheme?: boolean
	}
}
