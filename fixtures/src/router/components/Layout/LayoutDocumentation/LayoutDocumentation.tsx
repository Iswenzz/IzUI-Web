import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Grid, Toolbar } from "@mui/material";

import { Menu, LayoutToolbar } from "router/components";
import { appBarSx, boxSx } from "./config";

/**
 * The documentation layout.
 * @returns
 */
const LayoutDocumentation: FC = () =>
{
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	/**
	 * Toggle the drawer.
	 * @returns
	 */
	const handleDrawerToggle = (state: boolean) => setDrawerOpen(state);

	return (
		<Box display={"flex"}>
			<Menu handleDrawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} desktopOpen />
			<Grid container component="main" sx={boxSx}>
				<LayoutToolbar handleDrawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} sx={appBarSx} />
				<Toolbar />
				<Outlet />
			</Grid>
		</Box>
	);
};

export default LayoutDocumentation;
