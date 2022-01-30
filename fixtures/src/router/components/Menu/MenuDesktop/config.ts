import { SxProps } from "@mui/material";

import { drawerWidth } from "../../config";

export const drawerSx: SxProps = {
	display: { xs: "none", md: "block" },
	"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
};
