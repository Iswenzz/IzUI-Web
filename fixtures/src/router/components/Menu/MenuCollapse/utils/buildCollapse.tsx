import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";
import { Text } from "izui-react";

/**
 * Build the navigation collapse.
 * @param items - The items to collapse.
 * @param route - The redirection route.
 * @returns
 */
export const buildCollapse = (
	items: string[], route: string, onClick: React.MouseEventHandler<HTMLAnchorElement>
) => items.map(name => (
	<Link key={name} className="nolink calli-h1" to={`${route}/${name}`} onClick={onClick}>
		<ListItem button sx={{ pl: 5 }}>
			<Text color={"textPrimary"}>{name}</Text>
		</ListItem>
	</Link>
));
