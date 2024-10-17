import { FC, PropsWithChildren } from "react";

import { markdown } from "@/utils/markdown";

/**
 * Render markdown string.
 */
const Markdown: FC<PropsWithChildren> = ({ children }) => (
	<section
		className="markdown"
		dangerouslySetInnerHTML={{ __html: markdown(children as string) }}
	/>
);

export default Markdown;
