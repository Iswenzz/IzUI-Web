import { FC } from "react";
import { Toolbar } from "@mui/material";

/**
 * Navigation toolbar.
 */
const NavigationToolbar: FC = ({ children }) => (
	<Toolbar>{children}</Toolbar>
);

export default NavigationToolbar;
