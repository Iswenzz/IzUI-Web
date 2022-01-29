import { Theme } from "@mui/material";

import DarkTheme from "./app/Dark/Dark";
import LightTheme from "./app/Light/Light";

let registredThemes: Record<string, Theme> = {
	light: LightTheme,
	dark: DarkTheme
};

/**
 * Get a theme by name.
 * @param name - The name of the theme.
 * @returns
 */
export const getThemeByName = (name: string): Theme => registredThemes[name];

/**
 * Register a theme.
 * @param name - The theme name.
 * @param theme - The MUI theme.
 */
export const registerTheme = (name: string, theme: Theme) => registredThemes = {
	...registredThemes,
	[name]: theme
};

export { default as Themes } from "./Themes";

export {
	DarkTheme,
	LightTheme
};
