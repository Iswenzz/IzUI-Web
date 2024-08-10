import { useEffect, RefObject, FC, useRef } from "react";
import { motion, PanInfo, useAnimation } from "framer-motion";
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
	config = {},
	onChange
}) => {
	const index = useRef(startIndex);
	const controls = useAnimation();
	const width = window.innerWidth;

	const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
		const { offset, velocity } = info;
		const swipe = Math.abs(offset.x) * velocity.x;

		if (swipe < -width / 2 || (swipe < 0 && offset.x < -width / 2)) {
			index.current = clamp(index.current + 1, 0, items.length - 1);
		} else if (swipe > width / 2 || (swipe > 0 && offset.x > width / 2)) {
			index.current = clamp(index.current - 1, 0, items.length - 1);
		}
		if (onChange) onChange(index.current);

		controls.start(i => ({
			x: (i - index.current) * width,
			scale: 1,
			display: "block"
		}));
	};

	/**
	 * Refresh the page on index change.
	 */
	useEffect(() => {
		if (onChange) onChange(index.current);
	}, [index, onChange]);

	/**
	 * Move to the start index.
	 */
	useEffect(() => {
		index.current = startIndex;
		controls.start(i => ({
			x: (i - index.current) * width,
			scale: 1,
			display: "block"
		}));
	}, [controls, items.length, startIndex, width]);

	return (
		<section style={style}>
			{items.map((item, i) => (
				<motion.div
					key={i}
					custom={i}
					animate={controls}
					className={scss.viewpager}
					drag="x"
					whileDrag={{ scale: 0.9 }}
					onDragEnd={handleDragEnd}
					dragConstraints={{ left: 0, right: 0 }}
					style={config}
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
	onChange?: (index: number) => void;
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

export default ViewPager;
