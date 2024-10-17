import { FC, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { CssBaseline, StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";

/**
 * Themes container.
 */
const Themes: FC<ThemesProps> = ({ theme, scrollLock, children }) => {
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme.name);
	}, [theme]);

	useEffect(() => {
		if (scrollLock) document.documentElement.classList.add("lock");
		else document.documentElement.classList.remove("lock");
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
	theme: Theme;
	scrollLock?: boolean;
	children: React.ReactNode;
};

export default Themes;
