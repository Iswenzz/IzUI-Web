import { FC } from "react";

import { Markdown } from "@/components";
import { useFile } from "@/utils/hooks";

import { DemoPreview } from "../Demo";

/**
 * Demo code file.
 */
const DemoCode: FC<Props> = ({ preview }) => {
	const { file } = useFile(preview.source);

	return <Markdown>{`\`\`\`${preview.language}\n${file}\n\`\`\``}</Markdown>;
};

type Props = {
	preview: DemoPreview;
};

export default DemoCode;
