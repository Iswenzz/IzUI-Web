import { FC, PropsWithChildren, ReactElement } from "react";
import { Grid } from "@mui/material";
import classNames from "classnames";

import { FadeText, Parallax } from "@/components";

import scss from "./Header.module.scss";

/**
 * Header with a parallax background & title.
 */
const Header: FC<HeaderProps> = ({
	children,
	id,
	className,
	titleClassName,
	descriptionClassName,
	title,
	description = "",
	background,
	parallaxStrength = -30,
	parallaxBlur = 0,
	TextComponent = FadeText
}) => (
	<header id={id}>
		<Parallax
			className={classNames(scss.parallax, className)}
			image={background || false}
			blur={parallaxBlur}
			speed={parallaxStrength}
		>
			<Grid
				component="section"
				container
				className={scss.grid}
				direction="column"
				justifyContent="center"
				alignItems="center"
			>
				<TextComponent
					className={classNames("calli-big bold noselect", titleClassName)}
					align="center"
					variant="h1"
					component="h1"
				>
					{title}
				</TextComponent>
				<TextComponent
					className={classNames("poiret bold noselect", descriptionClassName)}
					align="center"
					variant="h3"
					component="h3"
				>
					{description}
				</TextComponent>
				{children}
			</Grid>
		</Parallax>
	</header>
);

type HeaderProps = {
	children?: ReactElement;
	id?: string;
	className?: string;
	titleClassName?: string;
	descriptionClassName?: string;
	title: string;
	description?: string;
	background?: string;
	parallaxStrength?: number;
	parallaxBlur?: number;
	TextComponent?: FC<PropsWithChildren>;
};

export default Header;
