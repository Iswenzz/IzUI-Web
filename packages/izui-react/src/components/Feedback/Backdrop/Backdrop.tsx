import { FC } from "react";
import noop from "lodash/noop";
import { Backdrop as MBackdrop, BackdropProps } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

import { animationFade } from "@/utils/animate";

import scss from "./Backdrop.module.scss";

/**
 * Backdrop component.
 */
const Backdrop: FC<Props> = ({
	disableClose = false,
	onClick = noop,
	open,
	className,
	...props
}) => {
	const handleClose = (e: React.MouseEvent<HTMLElement>) => (disableClose ? null : onClick(e));

	return (
		<AnimatePresence>
			<motion.div
				variants={animationFade()}
				initial="enter"
				animate={open ? "enter" : "exit"}
				exit="exit"
			>
				<MBackdrop
					{...props}
					className={classNames(className, scss.backdrop)}
					open={open}
					onClick={handleClose}
				/>
			</motion.div>
		</AnimatePresence>
	);
};

/**
 * Create a backdrop with dynamic disabled state.
 * @param disableState - The disable state for closing the backdrop.
 * @returns
 */
export const createBackdrop = (disableState: boolean) => (props: BackdropProps) => (
	<Backdrop {...props} transitionDuration={0} disableClose={disableState} />
);

type Props = BackdropProps & {
	disableClose?: boolean;
};

export default Backdrop;
