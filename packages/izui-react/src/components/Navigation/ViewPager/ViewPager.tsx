import { useEffect, RefObject, memo, FC, useRef, useCallback } from "react";
import { useDrag } from "@use-gesture/react";
import { motion, useAnimation } from "framer-motion";
import clamp from "lodash/clamp";

import scss from "./ViewPager.module.scss";

/**
 * Carousel with gesture features.
 */
const ViewPager: FC<ViewPagerProps> = ({
	items,
	startIndex = 0,
	background,
	style,
	onIndexChange,
	onDragState
}) => {
	const index = useRef(startIndex);
	const controls = useAnimation();
	const width = window.innerWidth;

	const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel }) => {
		if (active && Math.abs(mx) > width / 2) {
			index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, items.length - 1);
			if (onIndexChange) onIndexChange(index.current);
			cancel();
		}
		controls.start(i => ({
			x: (i - index.current) * width + (active ? mx : 0),
			scale: active ? 1 - Math.abs(mx) / width / 2 : 1,
			display: "block"
		}));
		if (onDragState) onDragState(active);
	});
	const { onPointerUp } = bind();

	const handlePointerUp = (e: React.PointerEvent<EventTarget>) => {
		if (onPointerUp) onPointerUp(e);
		if (onDragState) onDragState(false);
	};

	const moveToStart = useCallback(async () => {
		if (startIndex) index.current = startIndex;
		await controls.start(i => ({
			x: (i - index.current) * width,
			scale: 1,
			display: items.length <= 1 || i >= index.current - 1 ? "block" : "none"
		}));
	}, [controls, items.length, startIndex, width]);

	/**
	 * Refresh the page on index change.
	 */
	useEffect(() => {
		if (onIndexChange) onIndexChange(index.current);
	}, [index, onIndexChange]);

	/**
	 * Move to the start index.
	 */
	useEffect(() => void moveToStart(), [moveToStart]);

	return (
		<section style={style}>
			{items.map((item, i) => (
				<motion.div
					key={i}
					animate={controls}
					className={scss.viewpager}
					onPointerUp={handlePointerUp}
				>
					<motion.div style={{ background }}>{item}</motion.div>
				</motion.div>
			))}
		</section>
	);
};

export type ViewPagerProps = {
	items: JSX.Element[];
	style?: React.CSSProperties;
	background?: string;
	startIndex?: number;
	config?: ViewPagerConfig;
	onIndexChange?: (index: number) => void;
	onDragState?: (state: boolean) => void;
};

export type ViewPagerConfig = {
	top?: string | number;
	right?: string | number;
	width?: string | number;
	height?: string | number;
	maxWidth?: string | number;
	maxHeight?: string | number;
};

export type ViewPagerState = {
	items?: JSX.Element[];
	mainRef?: RefObject<HTMLDivElement>;
};

export default memo(ViewPager);
