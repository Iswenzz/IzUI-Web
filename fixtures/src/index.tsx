import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";
import { LightTheme, Themes } from "izui-react";

import Router from "./router/routes";
import { unregister } from "./serviceWorker";
import "./styles/Main.scss";

ReactDOM.render((
	<Themes theme={LightTheme}>
		<Router />
	</Themes>
), document.getElementById("izui-react-root"));

unregister();