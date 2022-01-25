import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";

import { Themes, DarkTheme } from "components"; // @todo remove DarkTheme
import Router from "fixtures/router/routes";

import { unregister } from "./serviceWorker";

ReactDOM.render((
	<Themes theme={DarkTheme}>
		<Router />
	</Themes>
), document.getElementById("izui-react-root"));

unregister();
