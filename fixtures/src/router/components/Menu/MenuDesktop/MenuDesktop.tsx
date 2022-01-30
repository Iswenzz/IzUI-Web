import { FC } from "react";
import { Box, Drawer } from "@mui/material";

import { MenuNavigation } from "router/components";
import { boxSx, drawerSx } from "./config";

/**
 * Desktop documentation menu.
 */
const MenuDesktop: FC<Props> = ({ handleDrawerToggle, drawerOpen, desktopOpen }) =>
{
	const isOpen = drawerOpen && desktopOpen;

	return (
		<Box component="nav" sx={boxSx}>
			<Drawer variant={isOpen ? "permanent" : undefined} sx={drawerSx} open={isOpen}>
				<MenuNavigation handleDrawerToggle={handleDrawerToggle} />
			</Drawer>
		</Box>
	);
};

type Props = {
	handleDrawerToggle: (state: boolean) => void,
	drawerOpen: boolean,
	desktopOpen: boolean
};

export default MenuDesktop;
