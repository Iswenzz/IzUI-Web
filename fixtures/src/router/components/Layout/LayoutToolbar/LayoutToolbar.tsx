import { FC } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Text } from "izui-react";

import { appBarSx, iconButtonSx } from "./config";

/**
 * Layout toolbar.
 */
const LayoutToolbar: FC<Props> = ({ children, handleDrawerToggle }) => (
	<AppBar component="section" position="fixed" sx={appBarSx}>
		<Toolbar>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={handleDrawerToggle}
				sx={iconButtonSx}
			/>
			<Text variant="h6" noWrap component="div">
				Responsive drawer
			</Text>
			{children}
		</Toolbar>
	</AppBar>
);

type Props = {
	handleDrawerToggle: () => void
};

export default LayoutToolbar;
