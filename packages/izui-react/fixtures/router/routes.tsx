import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Home } from "@/fixtures/pages";
import { Layout } from "@/fixtures/router/components";

/**
 * App router.
 */
const Router: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
