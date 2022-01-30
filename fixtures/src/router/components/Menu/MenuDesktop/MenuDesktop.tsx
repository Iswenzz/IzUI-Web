import { FC } from "react";
import { Box, Drawer } from "@mui/material";

import { MenuNavigation } from "router/components";
import { boxSx, drawerSx } from "./config";

/**
 * Desktop documentation menu.
 */
const MenuDesktop: FC = () => (
	<Box component="nav" sx={boxSx}>
		<Drawer variant="permanent" sx={drawerSx} open>
			<MenuNavigation />
		</Drawer>
	</Box>
);

export default MenuDesktop;
