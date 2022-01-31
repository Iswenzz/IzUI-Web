import { FC } from "react";
import classNames from "classnames";

import scss from "./Image.module.scss";

/**
 * Component for images.
 */
const Image: FC<ImageProps> = ({ className, height, alt = "", ...rest }) => (
	<img className={classNames(scss.image, className)} alt={alt} {...rest} height={height} />
);

export type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export default Image;
