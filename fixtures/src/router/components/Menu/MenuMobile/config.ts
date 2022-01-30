import { SxProps } from "@mui/material";

import { drawerWidth } from "../../config";

export const drawerSx: SxProps = {
	display: { xs: "block", md: "none" },
	"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
};
