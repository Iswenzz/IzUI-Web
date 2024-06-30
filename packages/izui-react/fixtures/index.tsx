import { createRoot } from "react-dom/client";
import { DarkTheme, Themes } from "@izui/react";

import Router from "@/fixtures/router/routes";
import "@/fixtures/config/highlight";
import "@/fixtures/styles/Main.scss";

const container = document.getElementById("izui");

if (container) {
	const root = createRoot(container);
	root.render(
		<Themes theme={DarkTheme}>
			<Router />
		</Themes>
	);
}
