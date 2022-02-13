
import { FC, ReactElement } from "react";
import { createPortal } from "react-dom";

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */
const Portal: FC<Props> = ({ children, container = document.body, disablePortal = false }) =>
	disablePortal ? createPortal(children, container) : children;

type Props = {
	children: ReactElement,
	container?: HTMLElement,
	disablePortal?: boolean
};

export default Portal;
