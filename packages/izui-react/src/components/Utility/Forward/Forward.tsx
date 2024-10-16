import { forwardRef, ForwardRefRenderFunction } from "react";

/**
 * Forward ref component.
 */
const Forward: ForwardRefRenderFunction<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>> = (
	{ children, ...rest },
	ref
) => (
	<div {...rest} ref={ref}>
		{children}
	</div>
);

export default forwardRef(Forward);
