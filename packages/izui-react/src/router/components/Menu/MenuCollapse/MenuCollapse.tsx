import { FC, useState } from "react";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const MenuCollapse: FC<Props> = ({ children = [], icon, title, open = false }) => {
	const [isOpen, setOpen] = useState(open);
	const handleClick = () => setOpen(!isOpen);

	return (
		<>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={title} />
				{isOpen ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={isOpen} timeout="auto" unmountOnExit>
				<List disablePadding>{children}</List>
			</Collapse>
		</>
	);
};

type Props = {
	icon?: React.ReactElement;
	title: string;
	open?: boolean;
	children: React.ReactElement[];
};

export default MenuCollapse;
