import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Documentation, DocumentationRenderer } from "izui-react";

import { Home, componentsConfig, Components, startConfig } from "pages";
import { Layout, MenuNavigation } from "router/components";

/**
 * App router.
 */
const Router: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
			</Route>

			<Route path="/start" element={<Documentation MenuNavigation={MenuNavigation} />}>
				{startConfig.map(({ route, component }) => (
					<Route key={route} path={route} element={(
						<DocumentationRenderer>
							{component}
						</DocumentationRenderer>
					)} />
				))}
			</Route>

			<Route path="/components" element={<Documentation MenuNavigation={MenuNavigation} />}>
				{componentsConfig.map(({ route, demos }) => (
					<Route key={route} path={route} element={(
						<DocumentationRenderer sections={demos.sections}>
							<Components demos={demos.sources} />
						</DocumentationRenderer>
					)} />
				))}
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
