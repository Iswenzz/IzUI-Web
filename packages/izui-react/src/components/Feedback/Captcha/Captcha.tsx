import { forwardRef, ForwardRefRenderFunction } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "@mui/material";

/**
 * Google ReCAPTCHA.
 * @returns
 */
const Captcha: ForwardRefRenderFunction<ReCAPTCHA> = (props, ref) => {
	const { isDark } = useTheme();

	return (
		<ReCAPTCHA
			ref={ref}
			sitekey={process.env.VITE_RECAPTCHA_TOKEN as string}
			size="invisible"
			badge="inline"
			theme={isDark ? "dark" : "light"}
		/>
	);
};

export default forwardRef(Captcha);
