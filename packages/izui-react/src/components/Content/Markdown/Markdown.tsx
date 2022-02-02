import { FC } from "react";
import { useTheme } from "@mui/material";
import classNames from "classnames";

import { markdown } from "@utils/markdown";

/**
 * Render markdown string.
 */
const Markdown: FC<Props> = ({ children }) =>
{
	const { theme } = useTheme();

	return <section className={classNames("markdown", theme)}
		dangerouslySetInnerHTML={{ __html: markdown(children) }} />;
};

type Props = {
	children: string
};

export default Markdown;
