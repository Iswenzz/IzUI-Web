import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Home, Installation, Flip, SpringGrid } from "pages";
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
				<Route path="/components/Flip" element={<Flip />} />
				<Route path="/components/SpringGrid" element={<SpringGrid />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
