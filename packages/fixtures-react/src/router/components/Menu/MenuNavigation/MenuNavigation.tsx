import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Divider } from "@mui/material";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ArticleIcon from "@mui/icons-material/Article";
import { buildCollapse, MenuCollapse, locationStartWith, MenuNavigationProps, MenuToolbar } from "@izui/react";

import { componentsConfig, startConfig } from "pages";

/**
 * The drawer navigation.
 * @returns
 */
const MenuNavigation: FC<MenuNavigationProps> = ({ handleDrawerToggle }) =>
{
	const location = useLocation();

	const handleClose = () => handleDrawerToggle(false);

	return (
		<section>
			<MenuToolbar />
			<Divider />
			<MenuCollapse title={"Getting Started"} icon={<ArticleIcon />}
				open={locationStartWith(location, "/start")}>
				{buildCollapse(startConfig, handleClose)}
			</MenuCollapse>
			<Divider />
			<MenuCollapse title={"Components"} icon={<ToggleOffIcon />}
				open={locationStartWith(location, "/components")}>
				{buildCollapse(componentsConfig, handleClose)}
			</MenuCollapse>
		</section>
	);
};

export default MenuNavigation;
