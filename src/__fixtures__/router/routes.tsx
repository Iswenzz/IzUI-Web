import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "fixtures/pages/Home";

/**
 * App router.
 */
const Router: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
