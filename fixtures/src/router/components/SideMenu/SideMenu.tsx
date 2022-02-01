import { FC } from "react";

import scss from "./SideMenu.module.scss";

/**
 * Side menu page navigation.
 */
const SideMenu: FC<Props> = ({ sections = [] }) =>
{
	return (
		<h1>{sections}</h1>
	);
};

type Props = {
	sections?: string[]
};

export default SideMenu;
