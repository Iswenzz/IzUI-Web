import { useMemo, ReactElement, FC, CSSProperties } from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import useBreakpoint, { BreakpointValues } from "@/utils/hooks/useBreakpoint";

import computeSimpleLayout from "./utils/computeSimpleLayout";
import computeMasonryLayout from "./utils/computeMasonryLayout";
import { config, animation } from "./config";

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
			x: positions[index].x,
			y: positions[index].y,
			index
		}));

		return { items, height: gridHeight, width: gridWidth };
	}, [children, gutter, itemSize, layout, responsiveColumns]);

	return (
		<Grid container component="ul" style={{ ...style, width, height, position: "relative" }}>
			{children.length &&
				items.map(({ key, x, y, index }) => (
					<motion.li
						key={key}
						style={{ position: "absolute" }}
						variants={animation(x, y)}
						animate="enter"
						initial="enter"
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
	x: number;
	y: number;
	index: number;
};

export default SpringGrid;
