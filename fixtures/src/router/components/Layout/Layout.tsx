import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";

import { Menu, LayoutToolbar } from "router/components";
import { boxSx } from "./config";

/**
 * The navigation layout.
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
		<Box display={"flex"}>
			<Menu handleDrawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} />
			<Box component="main" sx={boxSx}>
				<LayoutToolbar handleDrawerToggle={handleDrawerToggle} />
				<Toolbar />
				<Outlet />
			</Box>
		</Box>
	);
};

export default Layout;
