import { FC } from "react";
import classNames from "classnames";

import scss from "./Image.module.scss";

/**
 * Component for images.
 */
const Image: FC<ImageProps> = ({
	className,
	width = "100%",
	height = "100%",
	alt = "",
	...rest
}) => (
	<img
		className={classNames(scss.image, className, "noselect")}
		alt={alt}
		height={height}
		width={width}
		{...rest}
	/>
);

export type ImageProps = React.DetailedHTMLProps<
	React.ImgHTMLAttributes<HTMLImageElement>,
	HTMLImageElement
>;

export default Image;
