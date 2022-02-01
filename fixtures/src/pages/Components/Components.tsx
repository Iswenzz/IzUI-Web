import { FC } from "react";
import { DemoSource, Demo } from "izui-react";

/**
 * Components demos.
 */
const Components: FC<Props> = ({ demos }) => (
	<>
		{demos?.map(demo => (
			<Demo key={demo.title} demo={demo} iframe={demo.iframe}>
				{demo.render}
			</Demo>
		))}
	</>
);

type Props = {
	demos: DemoSource[]
};

export default Components;
