import { FC } from "react";
import { Drawer } from "@mui/material";

import { Navigation } from "router/components";
import { drawerSx } from "./config";

/**
 * Mobile documentation menu.
 */
const MenuMobile: FC<Props> = ({ handleDrawerToggle, drawerOpen }) => (
	<Drawer variant="temporary" open={drawerOpen} onClose={handleDrawerToggle}
		ModalProps={{ keepMounted: true }} sx={drawerSx}>
		<Navigation />
	</Drawer>
);

type Props = {
	handleDrawerToggle: () => void,
	drawerOpen: boolean
};

export default MenuMobile;
