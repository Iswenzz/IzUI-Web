import { FC, ElementType } from "react";
import { useTranslation } from "react-i18next";
import { Typography, TypographyProps } from "@mui/material";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

import { animationFade } from "@/utils/animate";

import scss from "../Text.module.scss";

/**
 * Fade text animation.
 */
const FadeText: FC<Props> = ({ children, className, component = "h6", ...rest }) => {
	const { t } = useTranslation();
	const items = Array.isArray(children) ? children : [children];

	return (
		<motion.div initial="exit" animate="enter" variants={animationFade()}>
			{items.map(item => (
				<Typography
					{...rest}
					className={classNames(scss.text, className)}
					component={component}
					key={uuidv4()}
				>
					{t(item)}
				</Typography>
			))}
		</motion.div>
	);
};

type Props = TypographyProps & {
	children: string[] | string;
	component?: ElementType;
};

export default FadeText;
