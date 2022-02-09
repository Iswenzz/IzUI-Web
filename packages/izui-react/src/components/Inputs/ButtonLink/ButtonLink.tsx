import { forwardRef, ForwardRefRenderFunction } from "react";
import { Button, ButtonProps } from "@mui/material";

/**
 * Forward MUI Button.
 */
const ButtonLink: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref) => (
	<Button ref={ref} {...props} />
);

export default forwardRef(ButtonLink);
