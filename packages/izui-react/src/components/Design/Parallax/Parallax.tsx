import { FC } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer, ParallaxBannerProps } from "react-scroll-parallax";
import starsDark from "@izui/assets/images/background/stars-dark.svg";
import starsLight from "@izui/assets/images/background/stars-light.svg";

import { Spacing } from "@/components";
import { useThemeMode } from "@/utils/hooks";

import scss from "./Parallax.module.scss";

/**
 * Parallax background.
 */
const Parallax: FC<Props> = ({
	speed = -30,
	spacingTop,
	spacingBottom,
	image,
	blur = 0,
	children,
	style,
	...rest
}) => {
	const { parallaxImage } = useThemeMode({
		parallaxImage: [starsDark, starsLight]
	});
	const layers: BannerLayer[] = [
		{
			className: scss.layer,
			image: image || parallaxImage,
			speed
		}
	];
	return (
		<ParallaxBanner
			layers={layers}
			style={{ ...style, filter: `blur(${blur}px)`, zIndex: -1 }}
			{...rest}
		>
			{spacingTop && <Spacing height={spacingTop} />}
			{children}
			{spacingBottom && <Spacing height={spacingBottom} />}
		</ParallaxBanner>
	);
};

type Props = ParallaxBannerProps & {
	spacingTop?: string;
	spacingBottom?: string;
	image?: string;
	speed?: number;
	blur?: number;
};

export default Parallax;
