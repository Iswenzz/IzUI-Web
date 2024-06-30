import { FC } from "react";

/**
 * Spacing component.
 */
const Spacing: FC<SpacingProps> = ({ height, children, style, ...rest }) => (
	<div {...rest} style={{ ...style, height }}>
		{children}
	</div>
);

type SpacingProps = React.HTMLAttributes<HTMLDivElement> & {
	height?: string;
};

export default Spacing;
