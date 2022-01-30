import { FC } from "react";
import { Box, Drawer } from "@mui/material";

import { MenuNavigation } from "router/components";
import { boxSx, drawerSx } from "./config";

/**
 * Mobile documentation menu.
 */
const MenuMobile: FC<Props> = ({ handleDrawerToggle, drawerOpen }) => (
	<Box component="nav" sx={boxSx}>
		<Drawer variant="temporary" open={drawerOpen} onClose={() => handleDrawerToggle(false)}
			ModalProps={{ keepMounted: true }} sx={drawerSx}>
			<MenuNavigation handleDrawerToggle={handleDrawerToggle} />
		</Drawer>
	</Box>
);

type Props = {
	handleDrawerToggle: (state: boolean) => void,
	drawerOpen: boolean
};

export default MenuMobile;
