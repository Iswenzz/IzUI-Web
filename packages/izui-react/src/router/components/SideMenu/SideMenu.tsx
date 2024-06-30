import { FC, useState } from "react";
import { Tab, Tabs } from "@mui/material";

import scss from "./SideMenu.module.scss";

/**
 * Side menu page navigation.
 */
const SideMenu: FC<Props> = ({ sections = [] }) => {
	const [tabIndex, setTabIndex] = useState(0);

	const handleTabChange = (_: React.SyntheticEvent<Element, Event>, value: number) =>
		setTabIndex(value);

	return (
		<Tabs
			className={scss.menu}
			orientation="vertical"
			value={tabIndex}
			onChange={handleTabChange}
			textColor="secondary"
			indicatorColor="secondary"
			variant="scrollable"
		>
			{sections.map(section => (
				<Tab key={section} href={`#${section}`} label={section} />
			))}
		</Tabs>
	);
};

type Props = {
	sections?: string[];
};

export default SideMenu;
