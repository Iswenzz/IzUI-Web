import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Home, Flip } from "pages";
import { Layout } from "router/components";

/**
 * App router.
 */
const Router: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/components/flip" element={<Flip />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
