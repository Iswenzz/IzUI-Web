import { SxProps } from "@mui/material";

import { drawerWidth } from "../config";

export const boxSx: SxProps = {
	width: { md: drawerWidth },
	flexShrink: { md: 0 }
};

export const drawerSx: SxProps = {
	display: { xs: "block", md: "none" },
	"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
};
