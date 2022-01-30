import { FC } from "react";
import { Box, Drawer } from "@mui/material";

import { MenuNavigation } from "router/components";
import { boxSx, drawerSx } from "./config";

/**
 * Mobile documentation menu.
 */
const MenuMobile: FC<Props> = ({ handleDrawerToggle, drawerOpen }) => (
	<Box component="nav" sx={boxSx}>
		<Drawer variant="temporary" open={drawerOpen} onClose={handleDrawerToggle}
			ModalProps={{ keepMounted: true }} sx={drawerSx}>
			<MenuNavigation />
		</Drawer>
	</Box>
);

type Props = {
	handleDrawerToggle: () => void,
	drawerOpen: boolean
};

export default MenuMobile;
