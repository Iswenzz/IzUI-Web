import { FC, useEffect, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { CssBaseline, StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";

import { getElementByXPath } from "@/utils/elements";
import "@izui/styles/scss/Main.scss";

/**
 * App themes.
 */
export const Themes: FC<ThemesProps> = ({ theme, scrollLock, children }) =>
{
	const html = useRef<HTMLElement>(getElementByXPath("html") as HTMLElement);

	/**
	 * Dynamic changes.
	 */
	useEffect(() =>
	{
		html.current.style.overflowY = scrollLock ? "hidden" : "visible";
	}, [scrollLock]);

	return (
		<ParallaxProvider>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</StyledEngineProvider>
		</ParallaxProvider>
	);
};

export type ThemesProps = {
	theme: Theme,
	scrollLock?: boolean
};

export default Themes;
