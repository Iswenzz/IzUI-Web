import { FC } from "react";
import { useLocation } from "react-router-dom";
import { locationStartWith } from "izui-react";
import { Divider } from "@mui/material";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ArticleIcon from "@mui/icons-material/Article";

import { StartConfig, ComponentsConfig } from "pages";

import MenuToolbar from "../MenuToolbar/MenuToolbar";
import MenuCollapse from "../MenuCollapse/MenuCollapse";
import { buildCollapse } from "../MenuCollapse";

/**
 * The drawer navigation.
 * @returns
 */
const MenuNavigation: FC<Props> = ({ handleDrawerToggle }) =>
{
	const location = useLocation();

	const handleClose = () => handleDrawerToggle(false);

	return (
		<section>
			<MenuToolbar />
			<Divider />
			<MenuCollapse title={"Getting Started"} icon={<ArticleIcon />}
				open={locationStartWith(location, "/start")}>
				{buildCollapse(StartConfig.pages, "/start", handleClose)}
			</MenuCollapse>
			<Divider />
			<MenuCollapse title={"Components"} icon={<ToggleOffIcon />}
				open={locationStartWith(location, "/components")}>
				{buildCollapse(ComponentsConfig.pages, "/components", handleClose)}
			</MenuCollapse>
		</section>
	);
};

type Props = {
	handleDrawerToggle: (state: boolean) => void
};

export default MenuNavigation;
