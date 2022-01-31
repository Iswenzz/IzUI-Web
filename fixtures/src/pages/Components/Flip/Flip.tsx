import { FC } from "react";
import { Flip, Image, Demo } from "izui-react";

import nature1 from "assets/images/background/nature1.jpg";
import nature2 from "assets/images/background/nature2.jpg";

import demo from "./demo";

/**
 * Flip component page.
 */
const FlipPage: FC = () => (
	<>
		<Demo demo={demo}>
			<Flip
				front={<Image src={nature1} />}
				back={<Image src={nature2} />}
			/>
		</Demo>
	</>
);

export default FlipPage;
