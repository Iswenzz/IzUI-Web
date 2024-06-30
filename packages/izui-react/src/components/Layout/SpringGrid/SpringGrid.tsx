import { useMemo, ReactElement, FC, CSSProperties, memo } from "react";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import useBreakpoint, { BreakpointValues } from "@/utils/hooks/useBreakpoint";

import computeSimpleLayout from "./utils/computeSimpleLayout";
import computeMasonryLayout from "./utils/computeMasonryLayout";
import config from "./config";

/**
 * Responsive grid component with masonry layout and spring animation.
 */
const SpringGrid: FC<SpringGridProps> = ({
	children = [],
	columns = config.columns,
	gutter = config.gutter,
	itemSize = config.itemSize,
	layout = "simple",
	style
}) => {
	const responsiveColumns = useBreakpoint(columns, 3);

	const { items, height, width } = useMemo(() => {
		const { positions, gridHeight, gridWidth } =
			layout === "simple"
				? computeSimpleLayout(children, responsiveColumns, gutter, itemSize)
				: computeMasonryLayout(children, responsiveColumns, gutter, itemSize);

		const items = children.map<Item>((item: ReactElement, index: number) => ({
			key: item.key || uuidv4(),
			top: positions[index].y,
			left: positions[index].x,
			index
		}));

		return { items, height: gridHeight, width: gridWidth };
	}, [children, gutter, itemSize, layout, responsiveColumns]);

	return (
		<Grid container component="ul" style={{ ...style, width, height, position: "relative" }}>
			{children.length &&
				items.map(({ key, top, left, index }) => (
					<motion.li
						key={key}
						style={{
							position: "absolute",
							top: `${top}px`,
							left: `${left}px`
						}}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4 }}
					>
						{children[index]}
					</motion.li>
				))}
		</Grid>
	);
};

export type SpringGridProps = {
	children?: ReactElement[];
	columns?: BreakpointValues<number>;
	gutter?: Partial<Size>;
	itemSize?: Partial<Size>;
	style?: CSSProperties;
	layout?: "simple" | "masonry";
};

export type Layout = {
	positions: Point[];
	gridWidth: number;
	gridHeight: number;
};

type Item = {
	key: React.Key;
	top: number;
	left: number;
	index: number;
};

export default memo(SpringGrid);
