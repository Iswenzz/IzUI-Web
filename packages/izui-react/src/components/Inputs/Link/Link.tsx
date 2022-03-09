import { forwardRef, ForwardRefRenderFunction } from "react";
import { scroller } from "react-scroll";
import { ReactScrollLinkProps } from "react-scroll/modules/components/Link";
import { useNavigate } from "react-router-dom";

import useDoubleClick from "@/utils/hooks/useDoubleClick";

/**
 * React Router DOM Link wrapper.
 */
const Link: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (props, ref) =>
{
	const { className, children, to, onDoubleClick, onClick, redirectOnDoubleClick, smooth,
		duration = 1000, delay = 0, offset = 0, ...rest } = props;

	const navigate = useNavigate();

	const onLinkClick = (event: React.MouseEvent) =>
	{
		event.preventDefault();
		event.stopPropagation();

		// Handle double click or simple click
		if (redirectOnDoubleClick && onDoubleClick)
			onDoubleClick(event);
		else if (onClick)
			onClick(event);

		// Handle smooth navigation or router navigation
		if (smooth)
		{
			scroller.scrollTo(to, {
				duration, delay, offset, smooth
			});
			navigate(`#${to}`);
		}
		else
			navigate(to);
	};

	const [onClickHook, onDoubleClickHook] = useDoubleClick(
		!redirectOnDoubleClick ? onLinkClick : onClick,
		redirectOnDoubleClick ? onLinkClick : onDoubleClick
	);

	return (
		<a ref={ref} className={`nolink ${className}`} {...rest} href={`${smooth ? "#" : ""}${to}`}
			onClick={onClickHook} onDoubleClick={onDoubleClickHook}>
			{children}
		</a>
	);
};

type Props = ReactScrollLinkProps & React.HTMLAttributes<HTMLAnchorElement> & {
	to: string,
	onClick?: (event?: React.MouseEvent) => void,
	onDoubleClick?: (event?: React.MouseEvent) => void,
	redirectOnDoubleClick?: boolean
};

export default forwardRef(Link);
