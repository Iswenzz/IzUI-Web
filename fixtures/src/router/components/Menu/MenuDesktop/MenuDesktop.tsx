import { FC } from "react";
import { Drawer } from "@mui/material";

import { Navigation } from "router/components";
import { drawerSx } from "./config";

/**
 * Desktop documentation menu.
 */
const MenuDesktop: FC = () => (
	<Drawer variant="permanent" sx={drawerSx} open>
		<Navigation />
	</Drawer>
);

export default MenuDesktop;
