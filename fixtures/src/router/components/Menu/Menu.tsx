import { FC } from "react";
import { useResponsive } from "izui-react";

import MenuDesktop from "./MenuDesktop/MenuDesktop";
import MenuMobile from "./MenuMobile/MenuMobile";

/**
 * Responsive documentation menu.
 */
const Menu: FC<Props> = ({ handleDrawerToggle, drawerOpen }) => useResponsive({
	desktop: <MenuDesktop />,
	mobile: <MenuMobile handleDrawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} />
});

type Props = {
	handleDrawerToggle: () => void,
	drawerOpen: boolean
};

export default Menu;
