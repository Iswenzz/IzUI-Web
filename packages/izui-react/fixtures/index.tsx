import ReactDOM from "react-dom";
import { DarkTheme, Themes } from "@izui/react";

import Router from "router/routes";
import "config/highlight";
import "styles/Main.scss";

ReactDOM.render(
	<Themes theme={DarkTheme}>
		<Router />
	</Themes>,
	document.getElementById("izui-web-root")
);
