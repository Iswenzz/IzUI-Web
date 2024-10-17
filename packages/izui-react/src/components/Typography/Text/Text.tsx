import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Typography, TypographyProps } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

import scss from "./Text.module.scss";

/**
 * Typography wrapper for multiple strings.
 */
const Text: FC<Props> = ({ children, className, component = "h6", ...rest }) => {
	const { t } = useTranslation();
	const items = Array.isArray(children) ? children : [children];

	return items.map(item => (
		<Typography
			{...rest}
			className={classNames(scss.text, className)}
			component={component}
			key={uuidv4()}
		>
			{t(item)}
		</Typography>
	));
};

type Props = TypographyProps & {
	children: string[] | string;
};

export default Text;
