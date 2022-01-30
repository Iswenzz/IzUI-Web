import { FC } from "react";
import { Toolbar } from "@mui/material";

/**
 * Menu toolbar.
 */
const MenuToolbar: FC = ({ children }) => (
	<Toolbar>{children}</Toolbar>
);

export default MenuToolbar;
