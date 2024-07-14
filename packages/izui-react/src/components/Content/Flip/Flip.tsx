import { FC, useState } from "react";
import classNames from "classnames";

import scss from "./Flip.module.scss";

/**
 * Card component that flips on mouse click.
 */
const Flip: FC<FlipProps> = ({
	flipped = false,
	flipCallback,
	back,
	front,
	direction = "vertical"
}) => {
	const [isFlipped, setIsFlipped] = useState(flipped);
	const rotate = (value: number) => `rotate${direction === "vertical" ? "X" : "Y"}(${value}deg)`;

	const styles = classNames(scss.container, {
		[scss.flipped]: isFlipped,
		[scss.vertical]: direction === "vertical",
		[scss.horizontal]: direction === "horizontal"
	});

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
		const flip = !isFlipped;
		setIsFlipped(flip);
		if (flipCallback) flipCallback(flip);
	};

	const transform = (isFront: boolean) =>
		isFront
			? isFlipped
				? { transform: rotate(180) }
				: { transform: rotate(0) }
			: isFlipped
				? { transform: rotate(0) }
				: { transform: rotate(-180) };

	return (
		<div aria-label={isFlipped ? "back" : "front"} className={styles} onClick={handleClick}>
			<div className={scss.face} style={transform(true)}>
				{front}
			</div>
			<div className={scss.face} style={transform(false)}>
				{back}
			</div>
		</div>
	);
};

export type FlipProps = {
	style?: React.CSSProperties;
	back?: React.ReactNode;
	front?: React.ReactNode;
	flipped?: boolean;
	direction?: "vertical" | "horizontal";
	flipCallback?: (flipState: boolean) => void;
};

export default Flip;
