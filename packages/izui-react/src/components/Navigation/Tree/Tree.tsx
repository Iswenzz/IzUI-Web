import { FC } from "react";
import classNames from "classnames";

import scss from "./Tree.module.scss";

/**
 * Tree container.
 */
const Tree: FC<Props> = ({ className, children }) => (
	<ul className={classNames(scss.tree, className)}>{children}</ul>
);

type Props = {
	className?: string;
};

export default Tree;
