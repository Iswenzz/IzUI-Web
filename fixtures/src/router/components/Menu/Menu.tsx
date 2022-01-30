import { FC } from "react";
import { useResponsive } from "izui-react";

import MenuDesktop from "./MenuDesktop/MenuDesktop";
import MenuMobile from "./MenuMobile/MenuMobile";

/**
 * Responsive documentation menu.
 */
const Menu: FC<Props> = ({ handleDrawerToggle, drawerOpen, desktopOpen = false }) => useResponsive({
	desktop: <MenuDesktop handleDrawerToggle={handleDrawerToggle}
		drawerOpen={drawerOpen || desktopOpen} desktopOpen={desktopOpen}  />,
	mobile: <MenuMobile handleDrawerToggle={handleDrawerToggle}
		drawerOpen={drawerOpen} />
});

type Props = {
	handleDrawerToggle: (state: boolean) => void,
	drawerOpen: boolean,
	desktopOpen?: boolean
};

export default Menu;
