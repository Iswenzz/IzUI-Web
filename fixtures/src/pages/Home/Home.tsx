import { FC } from "react";
import { Flip, HintDrag, Parallax } from "izui-react";

/**
 * Home page.
 * @returns
 */
const Home: FC = () => (
	<section>
		<HintDrag />
		<Flip front={1} back={2} />
		<Parallax spacingTop="100px" />
	</section>
);

export default Home;
