import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Grid, Toolbar } from "@mui/material";

import { Menu, MenuNavigationProps } from "@/router/components";

import DocumentationToolbar from "./DocumentationToolbar/DocumentationToolbar";
import { appBarSx, boxSx } from "./config";

/**
 * The documentation layout.
 * @returns
 */
const Documentation: FC<Props> = ({ navigationClassName, navigationChildren, MenuNavigation }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	/**
	 * Toggle the drawer.
	 * @returns
	 */
	const handleDrawerToggle = (state: boolean) => setDrawerOpen(state);

	return (
		<Box display="flex">
			<Menu handleDrawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} desktopOpen>
				{MenuNavigation}
			</Menu>
			<Grid container component="main" sx={boxSx}>
				<DocumentationToolbar
					className={navigationClassName}
					handleDrawerToggle={handleDrawerToggle}
					drawerOpen={drawerOpen}
					sx={appBarSx}
				>
					{navigationChildren}
				</DocumentationToolbar>
				<Toolbar />
				<Outlet />
			</Grid>
		</Box>
	);
};

type Props = {
	MenuNavigation?: FC<MenuNavigationProps>;
	navigationClassName?: string;
	navigationChildren?: React.ReactElement;
};

export default Documentation;
