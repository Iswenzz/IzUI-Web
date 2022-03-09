import { FC } from "react";
import { Element as HashElement } from "react-scroll";

/**
 * Hash element for smooth scrolling.
 */
const Element: FC<Props> = ({ name, id = name }) => (
	<HashElement name={name} id={id} />
);

type Props = {
	name: string,
	id?: string
};

export default Element;
