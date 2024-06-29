import { createTheme, responsiveFontSizes, ThemeOptions } from "@mui/material";

export const DarkThemeOptions: ThemeOptions = {
	theme: "dark",
	isDarkTheme: true,
	palette: {
		mode: "dark",
		text: {
			primary: "rgba(220, 220, 220, 0.87)",
			secondary: "rgba(220, 220, 220, 0.54)",
			disabled: "rgba(220, 220, 220, 0.38)"
		},
		primary: {
			light: "#f4f4f4",
			main: "#2c2f33",
			dark: "#23272a",
			contrastText: "#dcdcdc"
		},
		secondary: {
			light: "#f50057",
			main: "#f50057",
			dark: "#f50057",
			contrastText: "#dcdcdc"
		}
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					scrollbarWidth: "thin",
					scrollbarColor: "#3a3d41 #23272a",
					backgroundColor: "#111"
				},
				"::-webkit-scrollbar": {
					width: "12px"
				},
				"::-webkit-scrollbar-track": {
					background: "#23272a",
					borderRadius: "10px"
				},
				"::-webkit-scrollbar-thumb": {
					backgroundColor: "#3a3d41",
					border: "3px solid #23272a",
					borderRadius: "10px"
				}
			}
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					fontSize: "1em"
				}
			}
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					backgroundColor: "transparent"
				}
			}
		},
		MuiFab: {
			styleOverrides: {
				primary: {
					backgroundColor: "#2c2f33"
				}
			}
		},
		MuiDialogTitle: {
			styleOverrides: {
				root: {
					backgroundColor: "#23272a"
				}
			}
		},
		MuiDialogContent: {
			styleOverrides: {
				root: {
					fontFamily: "Ubuntu",
					fontSize: 18
				}
			}
		}
	},
	typography: {
		fontFamily: "Ubuntu",
		subtitle1: {
			fontFamily: "Ubuntu"
		},
		subtitle2: {
			fontFamily: "Poiret One",
			fontWeight: "bold"
		},
		h1: {
			fontFamily: "Roboto Mono"
		},
		h2: {
			fontFamily: "Roboto Mono"
		},
		h3: {
			fontFamily: "Roboto Mono"
		},
		h4: {
			fontFamily: "Roboto Mono"
		},
		h5: {
			fontFamily: "Roboto Mono"
		},
		caption: {
			fontFamily: "Ubuntu"
		}
	}
};

export default responsiveFontSizes(createTheme(DarkThemeOptions));
