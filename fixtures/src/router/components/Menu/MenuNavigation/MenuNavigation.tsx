import { FC } from "react";
import { Divider, List, ListItem, ListItemText } from "@mui/material";

import MenuToolbar from "../MenuToolbar/MenuToolbar";

/**
 * The drawer navigation.
 * @returns
 */
const MenuNavigation: FC = () => (
	<section>
		<MenuToolbar />
		<Divider />
		<List>
			{["Inbox", "Starred", "Send email", "Drafts"].map(text => (
				<ListItem button key={text}>
					<ListItemText primary={text} />
				</ListItem>
			))}
		</List>
		<Divider />
		<List>
			{["All mail", "Trash", "Spam"].map(text => (
				<ListItem button key={text}>
					<ListItemText primary={text} />
				</ListItem>
			))}
		</List>
	</section>
);

export default MenuNavigation;
