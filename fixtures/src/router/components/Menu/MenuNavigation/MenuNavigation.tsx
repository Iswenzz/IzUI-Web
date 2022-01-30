import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { locationStartWith, Text } from "izui-react";
import { Divider, ListItem } from "@mui/material";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ArticleIcon from "@mui/icons-material/Article";

import MenuToolbar from "../MenuToolbar/MenuToolbar";
import MenuCollapse from "../MenuCollapse/MenuCollapse";

/**
 * Build the navigation collapse.
 * @param items - The items to collapse.
 * @param route - The redirection route.
 * @returns
 */
const buildCollapse = (
	items: string[], route: string, handleDrawerToggle: (state: boolean) => void
) => items.map(name => (
	<Link key={name} className="nolink calli-h1" to={`${route}/${name}`} onClick={() => handleDrawerToggle(false)}>
		<ListItem button sx={{ pl: 5 }}>
			<Text color={"textPrimary"}>{name}</Text>
		</ListItem>
	</Link>
));

/**
 * The drawer navigation.
 * @returns
 */
const MenuNavigation: FC<Props> = ({ handleDrawerToggle }) =>
{
	const location = useLocation();

	return (
		<section>
			<MenuToolbar />
			<Divider />
			<MenuCollapse title={"Getting Started"} icon={<ArticleIcon />}
				open={locationStartWith(location, "/start")}>
				{buildCollapse(["Installation"], "/start", handleDrawerToggle)}
			</MenuCollapse>
			<Divider />
			<MenuCollapse title={"Components"} icon={<ToggleOffIcon />}
				open={locationStartWith(location, "/components")}>
				{buildCollapse(["Flip", "SpringGrid"], "/components", handleDrawerToggle)}
			</MenuCollapse>
		</section>
	);
};

type Props = {
	handleDrawerToggle: (state: boolean) => void
};

export default MenuNavigation;
