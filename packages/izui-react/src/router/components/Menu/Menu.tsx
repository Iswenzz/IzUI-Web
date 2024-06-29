import { FC } from "react";

import { useResponsive } from "@/utils/hooks";

import MenuDesktop from "./MenuDesktop/MenuDesktop";
import MenuMobile from "./MenuMobile/MenuMobile";

/**
 * Responsive documentation menu.
 */
const Menu: FC<Props> = ({ children, handleDrawerToggle, drawerOpen, desktopOpen = false }) =>
	useResponsive({
		desktop: (
			<MenuDesktop
				handleDrawerToggle={handleDrawerToggle}
				drawerOpen={drawerOpen || desktopOpen}
				desktopOpen={desktopOpen}
			>
				{children}
			</MenuDesktop>
		),
		mobile: (
			<MenuMobile handleDrawerToggle={handleDrawerToggle} drawerOpen={drawerOpen}>
				{children}
			</MenuMobile>
		)
	});

type Props = MenuNavigationProps & {
	children?: FC<MenuNavigationProps>;
	drawerOpen: boolean;
	desktopOpen?: boolean;
};

export type MenuNavigationProps = {
	handleDrawerToggle: (state: boolean) => void;
};

export default Menu;
