import { FC, useState } from "react";
import ReactCardFlip from "react-card-flip";
import classNames from "classnames";

import scss from "./Flip.module.scss";

/**
 * Card component that flips on mouse click.
 */
const Flip: FC<FlipProps> = ({ flipped = false, flipCallback, back, front, direction = "vertical" }) =>
{
	const [isFlipped, setIsFlipped] = useState<boolean>(flipped);
	const containerStyles = classNames(scss.container, { back: isFlipped, front: !isFlipped });

	/**
	 * FlipCard click callback.
	 * @param e - Click event args.
	 */
	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
	{
		const flip = !isFlipped;
		e.preventDefault();

		setIsFlipped(flip);
		if (flipCallback)
			flipCallback(flip);
	};

	return (
		<ReactCardFlip containerClassName={containerStyles}
			isFlipped={isFlipped} flipDirection={direction}>
			<section className={scss.flip} onClick={handleClick}>
				{front}
			</section>
			<section className={scss.flip} onClick={handleClick}>
				{back}
			</section>
		</ReactCardFlip>
	);
};

export type FlipProps = {
	style?: React.CSSProperties,
	back?: React.ReactNode,
	front?: React.ReactNode,
	flipped?: boolean,
	direction?: "vertical" | "horizontal",
	flipCallback?: (flipState: boolean) => void
};

export default Flip;
