import { FC } from "react";
import { AppBar, Grid, IconButton, SxProps, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import classNames from "classnames";

import DocumentationNavigation from "../DocumentationNavigation/DocumentationNavigation";
import { iconButtonSx } from "./config";

import scss from "./DocumentationToolbar.module.scss";

/**
 * Documentation toolbar.
 */
const DocumentationToolbar: FC<Props> = ({
	children,
	className,
	handleDrawerToggle,
	drawerOpen,
	sx
}) => (
	<AppBar
		className={classNames(className, scss.appBar)}
		color="transparent"
		component="section"
		position="fixed"
		sx={sx}
	>
		<Toolbar>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={() => handleDrawerToggle(!drawerOpen)}
				sx={iconButtonSx}
			>
				<MenuIcon />
			</IconButton>
			<Grid container component="ul" justifyContent="flex-end" alignItems="center">
				<DocumentationNavigation />
				{children}
			</Grid>
		</Toolbar>
	</AppBar>
);

type Props = {
	children?: React.ReactNode;
	className?: string;
	handleDrawerToggle: (state: boolean) => void;
	drawerOpen: boolean;
	sx?: SxProps;
};

export default DocumentationToolbar;
