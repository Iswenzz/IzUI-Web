import { useEffect, RefObject, memo, FC, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import clamp from "lodash/clamp";

import scss from "./ViewPager.module.scss";

/**
 * Carousel with gesture features.
 */
const ViewPager: FC<ViewPagerProps> = ({
	items,
	index: startIndex = 0,
	background,
	style,
	onIndexChange,
	onDragState
}) => {
	const index = useRef(startIndex);
	const controls = useAnimation();
	const width = window.innerWidth;

	const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: any) => {
		const { offset, velocity } = info;
		const swipe = Math.abs(offset.x) * velocity.x;

		if (swipe < -width / 2 || (swipe < 0 && offset.x < -width / 2)) {
			index.current = clamp(index.current + 1, 0, items.length - 1);
		} else if (swipe > width / 2 || (swipe > 0 && offset.x > width / 2)) {
			index.current = clamp(index.current - 1, 0, items.length - 1);
		}
		if (onIndexChange) onIndexChange(index.current);

		controls.start(i => ({
			x: (i - index.current) * width,
			scale: 1,
			display: "block"
		}));

		if (onDragState) onDragState(false);
	};

	const handleDragStart = () => {
		if (onDragState) onDragState(true);
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
					drag="x"
					onDragStart={handleDragStart}
					onDragEnd={handleDragEnd}
					dragConstraints={{ left: 0, right: 0 }}
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
	index?: number;
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
