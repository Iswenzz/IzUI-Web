import { FC } from "react";
import { Box, Drawer } from "@mui/material";

import { MenuNavigationProps } from "../Menu";
import { boxSx, drawerSx } from "./config";

/**
 * Desktop documentation menu.
 */
const MenuDesktop: FC<Props> = ({ handleDrawerToggle, drawerOpen, desktopOpen, children: MenuNavigation }) =>
{
	const isOpen = drawerOpen && desktopOpen;

	return (
		<Box component="nav" sx={boxSx}>
			<Drawer variant={isOpen ? "permanent" : undefined} sx={drawerSx} open={isOpen}>
				{MenuNavigation && <MenuNavigation handleDrawerToggle={handleDrawerToggle} />}
			</Drawer>
		</Box>
	);
};

type Props = {
	handleDrawerToggle: (state: boolean) => void,
	children?: FC<MenuNavigationProps>,
	drawerOpen: boolean,
	desktopOpen: boolean
};

export default MenuDesktop;
