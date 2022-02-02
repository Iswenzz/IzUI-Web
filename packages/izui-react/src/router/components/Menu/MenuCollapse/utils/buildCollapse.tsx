import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";

import { Text } from "@/components";
import { Route } from "@/router/utils";

/**
 * Build the navigation collapse.
 * @param items - The items to collapse.
 * @param route - The redirection route.
 * @returns
 */
export const buildCollapse = (
	routes: Route[], onClick: React.MouseEventHandler<HTMLAnchorElement>
) => routes.map(({ name, route }) => (
	<Link key={name} className="nolink" to={route} onClick={onClick}>
		<ListItem button sx={{ pl: 5 }}>
			<Text color={"textPrimary"}>{name}</Text>
		</ListItem>
	</Link>
));
