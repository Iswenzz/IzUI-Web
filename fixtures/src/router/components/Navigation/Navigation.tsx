import { FC } from "react";
import { Divider, List, ListItem, ListItemText, Toolbar } from "@mui/material";

/**
 * The documentation drawer.
 * @returns
 */
const DrawerContent: FC = () => (
	<div>
		<Toolbar />
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
	</div>
);

export default DrawerContent;
