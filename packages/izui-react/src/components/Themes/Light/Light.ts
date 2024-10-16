import { ThemeOptions } from "@mui/material";

const theme: ThemeOptions = {
	theme: "light",
	isDark: false,
	palette: {
		mode: "light",
		text: {
			primary: "rgba(60, 60, 60, 0.87)",
			secondary: "rgba(60, 60, 60, 0.54)",
			disabled: "rgba(60, 60, 60, 0.38)"
		},
		primary: {
			light: "#60a5fa",
			main: "#3b82f6",
			dark: "#2563eb"
		},
		secondary: {
			light: "#fb7185",
			main: "#f50057",
			dark: "#e11d48"
		},
		error: {
			light: "#f87171",
			main: "#ef4444",
			dark: "#dc2626"
		},
		warning: {
			light: "#fb923c",
			main: "#f97316",
			dark: "#ea580c"
		},
		info: {
			light: "#38bdf8",
			main: "#0ea5e9",
			dark: "#0284c7"
		},
		success: {
			light: "#4ade80",
			main: "#22c55e",
			dark: "#16a34a"
		}
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
					borderRadius: "10px"
				}
			}
		}
	},
	typography: {
		fontFamily: "Ubuntu",
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
		},
		subtitle1: {
			fontFamily: "Ubuntu"
		},
		subtitle2: {
			fontFamily: "Ubuntu"
		}
	}
};

export default theme;
