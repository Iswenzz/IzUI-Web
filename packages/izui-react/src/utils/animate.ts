import { Variants } from "framer-motion";

/**
 * Fade animation.
 */
export const animationFade: Animation = ({ all, enter, exit } = {}) => ({
	enter: {
		opacity: 1,
		transition: {
			duration: 1
		},
		...all,
		...enter
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 1
		},
		...all,
		...exit
	}
});

/**
 * Trail animation.
 */
export const animationTrail: Animation = ({ all, enter, exit } = {}) => ({
	enter: (index: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: index * 0.05
		},
		...all,
		...enter
	}),
	exit: {
		y: "100%",
		opacity: 0,
		...all,
		...exit
	}
});

/**
 * Scale and fade animation to original position up.
 */
export const animationScaleFadeUp: Animation = ({ all, enter, exit } = {}) => ({
	enter: {
		y: "0%",
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			ease: "easeOut"
		},
		...all,
		...enter
	},
	exit: {
		y: "100%",
		opacity: 0,
		scale: 0.4,
		transition: {
			duration: 1,
			ease: "easeIn"
		},
		...all,
		...exit
	}
});

/**
 * Scale and fade animation to original position down.
 */
export const animationScaleFadeDown: Animation = ({ all, enter, exit } = {}) => ({
	enter: {
		y: "0%",
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			ease: "easeOut"
		},
		...all,
		...enter
	},
	exit: {
		y: "-100%",
		opacity: 0,
		scale: 0.4,
		transition: {
			duration: 1,
			ease: "easeIn"
		},
		...all,
		...exit
	}
});

/**
 * Move from offscreen to original position up.
 */
export const animationUp: Animation = ({ all, enter, exit } = {}) => ({
	enter: {
		y: "0%",
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			ease: "easeOut"
		},
		...all,
		...enter
	},
	exit: {
		y: "100%",
		opacity: 0,
		scale: 1,
		transition: {
			duration: 1,
			ease: "easeIn"
		},
		...all,
		...exit
	}
});

/**
 * Move from offscreen to original position down.
 */
export const animationDown: Animation = ({ all, enter, exit } = {}) => ({
	enter: {
		y: "0%",
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			ease: "easeOut"
		},
		...all,
		...enter
	},
	exit: {
		y: "-100%",
		opacity: 0,
		scale: 1,
		transition: {
			duration: 1,
			ease: "easeIn"
		},
		...all,
		...exit
	}
});

/**
 * Move from offscreen to original position on the right.
 */
export const animationRight: Animation = ({ all, enter, exit } = {}) => ({
	enter: {
		x: "0%",
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			ease: "easeOut"
		},
		...all,
		...enter
	},
	exit: {
		x: "100%",
		opacity: 0,
		scale: 1,
		transition: {
			duration: 1,
			ease: "easeIn"
		},
		...all,
		...exit
	}
});

/**
 * Move from offscreen to original position on the left.
 */
export const animationLeft: Animation = ({ all, enter, exit } = {}) => ({
	enter: {
		x: "0%",
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			ease: "easeOut"
		},
		...all,
		...enter
	},
	exit: {
		x: "-100%",
		opacity: 0,
		scale: 1,
		transition: {
			duration: 1,
			ease: "easeIn"
		},
		...all,
		...exit
	}
});

export type Animation = (options?: Record<string, Variants>) => Variants;
