import { FC } from "react";
import { Box, Drawer } from "@mui/material";

import { MenuNavigationProps } from "../Menu";
import { boxSx, drawerSx } from "./config";

/**
 * Mobile documentation menu.
 */
const MenuMobile: FC<Props> = ({ handleDrawerToggle, drawerOpen, children: MenuNavigation }) => (
	<Box component="nav" sx={boxSx}>
		<Drawer variant="temporary" open={drawerOpen} onClose={() => handleDrawerToggle(false)}
			ModalProps={{ keepMounted: true }} sx={drawerSx}>
			{MenuNavigation && <MenuNavigation handleDrawerToggle={handleDrawerToggle} />}
		</Drawer>
	</Box>
);

type Props = {
	handleDrawerToggle: (state: boolean) => void,
	children?: FC<MenuNavigationProps>,
	drawerOpen: boolean
};

export default MenuMobile;
