import { forwardRef, ForwardRefRenderFunction } from "react";
import { useNavigate } from "react-router-dom";

import useDoubleClick from "@/utils/hooks/useDoubleClick";

/**
 * React Router link wrapper.
 */
const Link: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (
	{ className, children, mode = "click", to, onClick, onDoubleClick, smooth, ...rest },
	ref
) => {
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

	const handleRedirect = (handler: Mode) => (event: React.MouseEvent) => {
		event.preventDefault();
		event.stopPropagation();

		if (handler === "click") onClick?.(event);
		if (handler === "doubleclick") onDoubleClick?.(event);

		if (handler === mode) {
			if (smooth) {
				const element = document.getElementById(to.replace("#", ""));
				if (element) scrollToElement(element, 1000);
			}
			navigate(to);
		}
	};

	const [onClickHook, onDoubleClickHook] = useDoubleClick(
		handleRedirect("click"),
		handleRedirect("doubleclick")
	);

	return (
		<a
			ref={ref}
			className={`nolink ${className}`}
			href={to}
			onClick={onClickHook}
			onDoubleClick={onDoubleClickHook}
			{...rest}
		>
			{children}
		</a>
	);
};

type Props = React.HTMLAttributes<HTMLAnchorElement> & {
	to: string;
	mode?: Mode;
	smooth?: boolean;
	onClick?: React.MouseEventHandler;
	onDoubleClick?: React.MouseEventHandler;
};

type Mode = "click" | "doubleclick";

export default forwardRef(Link);
