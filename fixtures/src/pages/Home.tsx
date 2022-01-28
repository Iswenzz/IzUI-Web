import { FC } from "react";
import { Flip } from "izui-react";

/**
 * Home page.
 * @returns
 */
const Home: FC = () =>
{
	return (
		<div>
			<Flip front={<h1>1</h1>} back={<h1>1</h1>} />
		</div>
	);
};

export default Home;
