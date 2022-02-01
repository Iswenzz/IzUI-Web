import { DemoSources } from "izui-react";

import Flip from "assets/sources/components/Flip/Flip";
import TS_Flip from "assets/sources/components/Flip/Flip.tsx.preview";

const demos: DemoSources = {
	sections: [],
	sources: [
		{
			title: "Flip",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.",
			render: <Flip />,
			previews: [
				{
					icon: "https://iswenzz.com/iswenzz/devicons/typescript.svg",
					label: "Typescript",
					language: "tsx",
					source: TS_Flip
				}
			]
		}
	]
};

export default demos;
