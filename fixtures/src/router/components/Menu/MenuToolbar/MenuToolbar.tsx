import { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonBase, Toolbar } from "@mui/material";
import { Text } from "izui-react";

/**
 * Menu toolbar.
 */
const MenuToolbar: FC = ({ children }) => (
	<Toolbar component="section">
		<ButtonBase sx={{ p: 1, px: 3 }}>
			<Link className="nolink" to="/">
				<Text component="h1" className="ubuntu-h3" color="textPrimary">
				IzUI-React
				</Text>
			</Link>
		</ButtonBase>
		{children}
	</Toolbar>
);

export default MenuToolbar;
