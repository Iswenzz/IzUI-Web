import { SxProps } from "@mui/material";

import { drawerWidth } from "../../config";

export const appBarSx: SxProps = {
	width: { md: `calc(100% - ${drawerWidth}px)` },
	ml: { md: `${drawerWidth}px` },
};

export const boxSx: SxProps = {
	flexGrow: 1,
	p: 3,
	width: {
		md: `calc(100% - ${drawerWidth}px)`
	}
};
