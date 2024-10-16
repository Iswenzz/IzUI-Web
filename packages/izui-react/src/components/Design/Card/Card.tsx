import { FC, ReactNode } from "react";

import {
	Card as MCard,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography
} from "@mui/material";

import scss from "./Card.module.scss";

/**
 * Media card component.
 */
const Card: FC<CardProps> = ({
	className,
	mediaClass,
	image,
	icon,
	title,
	description,
	children
}) => (
	<MCard className={`${scss.card} ${className}`}>
		{image && (
			<CardActionArea component="header">
				<CardMedia component="img" className={mediaClass} image={image} title={title} />
			</CardActionArea>
		)}
		{icon && <figure>{icon}</figure>}
		<Grid
			container
			component="section"
			className={scss.container}
			direction="column"
			alignItems="center"
			justifyContent="space-between"
		>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{title}
				</Typography>
				<Typography variant="body2" color="textSecondary" paragraph>
					{description}
				</Typography>
			</CardContent>
			<CardActions className={scss.actions}>{children}</CardActions>
		</Grid>
	</MCard>
);

export type CardProps = React.HTMLProps<HTMLElement> & {
	image?: string;
	mediaClass?: string;
	description?: string;
	height?: number | string;
	width?: number | string;
	icon?: ReactNode;
};

export default Card;
