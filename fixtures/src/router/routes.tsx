import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Home, Installation, componentsConfig, Components, startConfig } from "pages";
import { Layout, LayoutDocumentation, Documentation } from "router/components";

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
				{startConfig.map(({ route, component }) => (
					<Route key={route} path={route} element={(
						<Documentation>
							{component}
						</Documentation>
					)} />
				))}
			</Route>

			<Route path="/components" element={<LayoutDocumentation />}>
				{componentsConfig.map(({ route, demos }) => (
					<Route key={route} path={route} element={(
						<Documentation sections={demos.sections}>
							<Components demos={demos.sources} />
						</Documentation>
					)} />
				))}
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
