import { FC } from "react";
import { Link } from "react-router-dom";
import { MdArticle } from "react-icons/md";
import { Button } from "@mui/material";

import { Text } from "@/components";

/**
 * Documentation toolbar navigation.
 */
const DocumentationNavigation: FC = () => (
	<>
		<li>
			<Link className="nolink" to="/start/installation">
				<Button size="large" color="secondary" startIcon={<MdArticle />}>
					<Text color="textPrimary">Documentation</Text>
				</Button>
			</Link>
		</li>
	</>
);

export default DocumentationNavigation;
