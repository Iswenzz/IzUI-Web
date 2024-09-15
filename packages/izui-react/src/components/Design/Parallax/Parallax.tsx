import { FC } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxBannerProps } from "react-scroll-parallax";

import { Spacing } from "@/components";

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
}) => (
	<ParallaxBanner
		layers={[{ image, speed }]}
		style={{ ...style, filter: `blur(${blur}px)` }}
		{...rest}
	>
		{spacingTop && <Spacing height={spacingTop} />}
		{children}
		{spacingBottom && <Spacing height={spacingBottom} />}
	</ParallaxBanner>
);

type Props = ParallaxBannerProps & {
	spacingTop?: string;
	spacingBottom?: string;
	image?: string;
	speed?: number;
	blur?: number;
};

export default Parallax;
