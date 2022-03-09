import { forwardRef, ForwardRefRenderFunction } from "react";
import { useNavigate } from "react-router-dom";

import useDoubleClick from "@/utils/hooks/useDoubleClick";

/**
 * React Router DOM Link wrapper.
 */
const Link: ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (props, ref) =>
{
	const { className, children, to, onDoubleClick, onClick, redirectOnDoubleClick, ...rest } = props;
	const navigate = useNavigate();

	const onLinkClick = (event: React.MouseEvent) =>
	{
		event.preventDefault();
		event.stopPropagation();

		if (redirectOnDoubleClick && onDoubleClick)
			onDoubleClick(event);
		else if (onClick)
			onClick(event);
		navigate(to);
	};

	const [onClickHook, onDoubleClickHook] = useDoubleClick(
		!redirectOnDoubleClick ? onLinkClick : onClick,
		redirectOnDoubleClick ? onLinkClick : onDoubleClick
	);

	return (
		<a ref={ref} className={`nolink ${className}`} {...rest} href={to}
			onClick={onClickHook} onDoubleClick={onDoubleClickHook}>
			{children}
		</a>
	);
};

export type LinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
	to: string,
	onClick?: (event?: React.MouseEvent) => void,
	onDoubleClick?: (event?: React.MouseEvent) => void,
	redirectOnDoubleClick?: boolean
};

export default forwardRef(Link);
