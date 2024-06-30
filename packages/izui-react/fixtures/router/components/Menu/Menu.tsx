import { FC } from "react";
import { Divider } from "@mui/material";
import { MenuNavigationProps, MenuToolbar } from "@izui/react";

/**
 * The menu navigation.
 * @returns
 */
const Menu: FC<MenuNavigationProps> = () => (
	<section>
		<MenuToolbar />
		<Divider />
	</section>
);

export default Menu;
