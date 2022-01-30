import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Toolbar } from "@mui/material";

import { LayoutToolbar, Menu } from "router/components";

/**
 * The page layout.
 * @returns
 */
const Layout: FC = () =>
{
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	/**
	 * Toggle the drawer.
	 * @returns
	 */
	const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

	return (
		<>
			<Menu handleDrawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} />
			<LayoutToolbar handleDrawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} />
			<Toolbar />
			<Outlet />
		</>
	);
};

export default Layout;
