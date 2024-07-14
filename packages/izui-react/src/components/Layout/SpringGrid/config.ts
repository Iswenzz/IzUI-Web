import { Variants } from "framer-motion";

export const config = {
	columns: {
		xs: 2,
		sm: 3,
		md: 4,
		lg: 6
	},
	gutter: {
		width: 30,
		height: 0
	},
	itemSize: {
		width: 200,
		height: 200
	}
};

export const animation = (x: number, y: number): Variants => ({
	enter: {
		x,
		y,
		scale: 1,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 120,
			damping: 12
		}
	}
});
