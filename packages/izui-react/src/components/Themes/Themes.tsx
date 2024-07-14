import { FC, useEffect, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { CssBaseline, StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";

import { getElementByXPath } from "@/utils/elements";

/**
 * Themes container.
 */
const Themes: FC<ThemesProps> = ({ theme, scrollLock, children }) => {
	const html = useRef<HTMLElement>(getElementByXPath("html") as HTMLElement);

	useEffect(() => {
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
	theme: Theme;
	scrollLock?: boolean;
	children: React.ReactNode;
};

export default Themes;
