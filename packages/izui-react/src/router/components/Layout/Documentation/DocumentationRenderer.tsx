import { FC } from "react";
import { Container, Grid } from "@mui/material";

import { useResponsive } from "@/utils/hooks";
import { SideMenu } from "@/router/components";

/**
 * Documentation container.
 */
const DocumentationRenderer: FC<Props> = ({ children, sections }) => {
	const size = useResponsive({
		desktop: { page: 10, side: 2 },
		mobile: { page: 12, side: 0 }
	});
	return (
		<Grid container>
			<Grid item xs={size.page}>
				<Container maxWidth="md">{children}</Container>
			</Grid>
			{size.side > 0 && (
				<Grid item xs={size.side}>
					<SideMenu sections={sections} />
				</Grid>
			)}
		</Grid>
	);
};

type Props = {
	children?: React.ReactNode;
	sections?: string[];
};

export default DocumentationRenderer;
