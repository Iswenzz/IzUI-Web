import { createTheme, responsiveFontSizes, ThemeOptions } from "@mui/material";

export const LightThemeOptions: ThemeOptions = {
	theme: "light",
	isDarkTheme: false,
	palette: {
		mode: "light",
		text: {
			primary: "rgba(60, 60, 60, 0.87)",
			secondary: "rgba(60, 60, 60, 0.54)",
			disabled: "rgba(60, 60, 60, 0.38)",
		},
		primary: {
			light: "#f4f4f4",
			main: "#2c2f33",
			dark: "#23272a",
			contrastText: "#dcdcdc",
		},
		secondary: {
			light: "#ff4081",
			main: "#f50057",
			dark: "#c51162",
			contrastText: "#dcdcdc",
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					scrollbarWidth: "thin",
					scrollbarColor: "#c0c0c0 #d9d9d9",
					backgroundColor: "whitesmoke"
				},
				"::-webkit-scrollbar": {
					width: "12px"
				},
				"::-webkit-scrollbar-track": {
					background: "#d9d9d9",
					borderRadius: "10px"
				},
				"::-webkit-scrollbar-thumb": {
					backgroundColor: "#c0c0c0",
					border: "3px solid #d9d9d9",
					borderRadius: "10px",
				},
			}
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					fontSize: "1em",
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
					backgroundColor: "#e5e5e5"
				},
			}
		},
		MuiDialogTitle: {
			styleOverrides: {
				root: {
					backgroundColor: "#e5e5e5"
				}
			}
		},
		MuiDialogContent: {
			styleOverrides: {
				root: {
					fontFamily: "Ubuntu",
					fontSize: 18,
				}
			}
		}
	},
	typography: {
		subtitle1: {
			fontFamily: "Ubuntu",
		},
		subtitle2: {
			fontFamily: "Poiret One",
			fontWeight: "bold"
		},
		h1: {
			fontFamily: "Roboto Mono",
		},
		h2: {
			fontFamily: "Roboto Mono",
		},
		h3: {
			fontFamily: "Roboto Mono",
		},
		h4: {
			fontFamily: "Roboto Mono",
		},
		h5: {
			fontFamily: "Roboto Mono",
		},
		caption: {
			fontFamily: "Ubuntu",
		}
	}
};

export default responsiveFontSizes(createTheme(LightThemeOptions));
