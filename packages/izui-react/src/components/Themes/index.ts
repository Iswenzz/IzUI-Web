import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from "@mui/material";
import merge from "lodash/merge";

import dark from "./Dark/Dark";
import light from "./Light/Light";

const themes: Record<string, Theme> = {};
const options: Record<string, ThemeOptions> = { dark, light };

/**
 * Get a theme by name.
 * @param name - The name of the theme.
 * @returns
 */
export const getThemeByName = (name: string): Theme => themes[name];

/**
 * Register a theme.
 * @param name - The theme name.
 * @param theme - The theme.
 */
export const registerTheme = (name: string, theme: ThemeOptions) =>
	(themes[name] = responsiveFontSizes(createTheme(merge(options[name] || {}, theme))));

registerTheme("dark", dark);
registerTheme("light", light);

export { default as Themes } from "./Themes";
export * from "./Themes";
