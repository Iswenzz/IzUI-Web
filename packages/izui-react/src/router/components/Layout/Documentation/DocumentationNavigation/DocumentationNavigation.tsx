import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

import { Text } from "components";

/**
 * Documentation toolbar navigation.
 */
const DocumentationNavigation: FC = () => (
	<>
		<li>
			<Link className="nolink" to={"/start/installation"}>
				<Button size="large" color="secondary" startIcon={<ArticleIcon />}>
					<Text color="textPrimary">Documentation</Text>
				</Button>
			</Link>
		</li>
	</>
);

export default DocumentationNavigation;
