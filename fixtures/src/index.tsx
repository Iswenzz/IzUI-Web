import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";

import Router from "./router/routes";
import { unregister } from "./serviceWorker";

ReactDOM.render((
	// <Themes theme={DarkTheme}>
	// 	<Router />
	// </Themes>
	<Router />
), document.getElementById("izui-react-root"));

unregister();
