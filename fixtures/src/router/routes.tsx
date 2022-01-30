import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Home, Flip, Installation } from "pages";
import { Layout, LayoutDocumentation } from "router/components";

/**
 * App router.
 */
const Router: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
			</Route>
			<Route path="/start" element={<LayoutDocumentation />}>
				<Route path="/start/installation" element={<Installation />} />
			</Route>
			<Route path="/components" element={<LayoutDocumentation />}>
				<Route path="/components/flip" element={<Flip />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
