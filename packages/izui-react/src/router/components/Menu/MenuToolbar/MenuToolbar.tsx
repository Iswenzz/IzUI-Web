import { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonBase, Toolbar } from "@mui/material";

import { Text } from "@/components";

/**
 * Menu toolbar.
 */
const MenuToolbar: FC<Props> = ({ children, name = "", iconLeft, iconRight }) => (
	<Toolbar component="section">
		<ButtonBase sx={{ p: 1, px: 3 }}>
			<Link className="nolink" to="/">
				{iconLeft}
				<Text component="h1" className="ubuntu-h3" color="textPrimary">
					{name}
				</Text>
				{iconRight}
			</Link>
		</ButtonBase>
		{children}
	</Toolbar>
);

type Props = {
	children?: React.ReactElement,
	name?: string,
	iconLeft?: React.ReactElement,
	iconRight?: React.ReactElement
};

export default MenuToolbar;
