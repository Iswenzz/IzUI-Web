import { FC } from "react";
import { AppBar, Grid, IconButton, SxProps, Toolbar } from "@mui/material";

import LayoutNavigation from "../LayoutNavigation/LayoutNavigation";
import { iconButtonSx } from "./config";

/**
 * Layout toolbar.
 */
const LayoutToolbar: FC<Props> = ({ children, handleDrawerToggle, drawerOpen, sx }) => (
	<AppBar component="section" position="fixed" sx={sx}>
		<Toolbar>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={() => handleDrawerToggle(!drawerOpen)}
				sx={iconButtonSx}
			/>
			<Grid container component={"ul"} justifyContent={"flex-end"} alignItems={"center"}>
				<LayoutNavigation />
				{children}
			</Grid>
		</Toolbar>
	</AppBar>
);

type Props = {
	handleDrawerToggle: (state: boolean) => void,
	drawerOpen: boolean,
	sx?: SxProps
};

export default LayoutToolbar;
