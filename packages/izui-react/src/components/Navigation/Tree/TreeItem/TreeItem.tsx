import classNames from "classnames";
import { CSSProperties, FC, memo, useState } from "react";
import { useMeasure, usePrevious } from "react-use";
import { motion } from "framer-motion";

import { CloseSquare, MinusSquare, PlusSquare } from "../TreeIcons/TreeIcons";

import scss from "./TreeItem.module.scss";

/**
 * Represent an item or a list in a Tree component.
 */
const TreeItem: FC<TreeProps> = ({ className, children, name, style, defaultOpen = false }) => {
	const [isOpen, setOpen] = useState(defaultOpen);
	const previous = usePrevious(isOpen);

	const [ref, { height: viewHeight }] = useMeasure<HTMLDivElement>();

	const variants = {
		open: {
			height: viewHeight,
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 30
			}
		},
		closed: {
			height: 0,
			opacity: 0,
			x: 20,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 30
			}
		}
	};
	const contentVariants = {
		open: { opacity: 1, height: "auto" },
		closed: { opacity: 0, height: 0 }
	};
	const Icon = children ? (isOpen ? MinusSquare : PlusSquare) : CloseSquare;
	const Frame = children ? motion.ul : motion.li;

	const contentHeight = isOpen && previous === isOpen ? "auto" : "0";
	const iconOpacity = children ? 1 : 0.3;

	return (
		<Frame
			className={classNames(scss.item, className)}
			initial="closed"
			animate={isOpen ? "open" : "closed"}
		>
			<Icon
				className={scss.icon}
				style={{ opacity: iconOpacity }}
				onClick={() => setOpen(!isOpen)}
			/>
			<span className={scss.title} style={style}>
				{name}
			</span>
			<motion.div
				className={scss.content}
				variants={contentVariants}
				animate={isOpen ? "open" : "closed"}
				style={{ overflow: "hidden", height: contentHeight }}
			>
				<motion.div ref={ref} variants={variants}>
					{children}
				</motion.div>
			</motion.div>
		</Frame>
	);
};

export type TreeProps = {
	name: string | React.ReactNode;
	className?: string;
	style?: CSSProperties;
	defaultOpen?: boolean;
	children?: React.ReactNode[] | React.ReactNode;
};

export default memo(TreeItem);
