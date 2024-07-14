import { forwardRef, ForwardRefRenderFunction } from "react";
import { useNavigate } from "react-router-dom";

import useDoubleClick from "@/utils/hooks/useDoubleClick";

/**
 * React Router link wrapper.
 */
const Link: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (props, ref) => {
	const {
		className,
		children,
		to,
		onDoubleClick,
		onClick,
		redirectOnDoubleClick,
		smooth,
		...rest
	} = props;

	const navigate = useNavigate();

	const scrollToElement = (element: HTMLElement, duration: number) => {
		const start = window.scrollY;
		const end = element.getBoundingClientRect().top + start;
		const startTime = performance.now();

		const smoothStep = (start: number, end: number, point: number) => {
			if (point <= 0) return start;
			if (point >= 1) return end;
			return start + (end - start) * (point * (2 - point));
		};
		const step = (currentTime: number) => {
			const elapsed = (currentTime - startTime) / duration;
			const progress = Math.min(elapsed, 1);
			window.scrollTo(0, smoothStep(start, end, progress));
			if (progress < 1) requestAnimationFrame(step);
		};
		requestAnimationFrame(step);
	};

	const onLinkClick = (event: React.MouseEvent) => {
		event.preventDefault();
		event.stopPropagation();

		// Handle double click or single click
		if (redirectOnDoubleClick && onDoubleClick) onDoubleClick(event);
		else if (onClick) onClick(event);

		if (smooth) {
			const element = document.getElementById(to.replace("#", ""));
			if (element) scrollToElement(element, 1000);
		}
		navigate(to);
	};

	const [onClickHook, onDoubleClickHook] = useDoubleClick(
		!redirectOnDoubleClick ? onLinkClick : onClick,
		redirectOnDoubleClick ? onLinkClick : onDoubleClick
	);

	return (
		<a
			ref={ref}
			className={`nolink ${className}`}
			{...rest}
			href={to}
			onClick={onClickHook}
			onDoubleClick={onDoubleClickHook}
		>
			{children}
		</a>
	);
};

type Props = React.HTMLAttributes<HTMLAnchorElement> & {
	to: string;
	smooth?: boolean;
	onClick?: (event?: React.MouseEvent) => void;
	onDoubleClick?: (event?: React.MouseEvent) => void;
	redirectOnDoubleClick?: boolean;
};

export default forwardRef(Link);
