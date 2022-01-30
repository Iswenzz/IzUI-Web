import { Button } from "@mui/material";
import { Text } from "izui-react";
import { FC } from "react";
import { Link } from "react-router-dom";

/**
 * Layout toolbar navigation.
 */
const LayoutNavigation: FC = () => (
	<>
		<li>
			<Link className="nolink" to={"/start/installation"}>
				<Button size="large" color="inherit">
					<Text color="textPrimary">Documentation</Text>
				</Button>
			</Link>
		</li>
	</>
);

export default LayoutNavigation;
