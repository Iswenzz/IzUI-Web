import { SxProps } from "@mui/material";

import { drawerWidth } from "../config";

export const appBarSx: SxProps = {
	width: { md: `calc(100% - ${drawerWidth}px)` },
	ml: { md: `${drawerWidth}px` },
};

export const boxSx: SxProps = {
	width: { md: drawerWidth },
	flexShrink: { md: 0 }
};

export const iconButtonSx: SxProps = {
	mr: 2,
	display: { md: "none" }
};
