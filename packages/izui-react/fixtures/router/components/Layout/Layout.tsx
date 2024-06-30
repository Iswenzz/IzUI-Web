import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Toolbar } from "@mui/material";
import { DocumentationToolbar, Menu } from "@izui/react";

/**
 * The page layout.
 * @returns
 */
const Layout: FC = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

	return (
		<>
			<Menu handleDrawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} />
			<DocumentationToolbar handleDrawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} />
			<Toolbar />
			<Outlet />
		</>
	);
};

export default Layout;
