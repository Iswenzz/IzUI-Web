import { FC } from "react";
import { Text, useResponsive } from "izui-react";
import { Box, AppBar, IconButton } from "@mui/material";

import MenuDesktop from "./MenuDesktop/MenuDesktop";
import MenuMobile from "./MenuMobile/MenuMobile";
import MenuToolbar from "./MenuToolbar/MenuToolbar";
import { appBarSx, boxSx, iconButtonSx } from "./config";

/**
 * Responsive documentation menu.
 */
const Menu: FC<Props> = ({ handleDrawerToggle, drawerOpen }) =>
{
	const ResponsiveMenu = useResponsive({
		desktop: <MenuDesktop />,
		mobile: <MenuMobile handleDrawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} />
	});

	return (
		<>
			<AppBar position="fixed" sx={appBarSx}>
				<MenuToolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={iconButtonSx}
					/>
					<Text variant="h6" noWrap component="div">
						Responsive drawer
					</Text>
				</MenuToolbar>
			</AppBar>
			<Box component="nav" sx={boxSx} aria-label="mailbox folders">
				{ResponsiveMenu}
			</Box>
		</>
	);
};

type Props = {
	handleDrawerToggle: () => void,
	drawerOpen: boolean
};

export default Menu;
