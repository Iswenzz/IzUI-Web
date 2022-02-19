import ReCAPTCHA from "react-google-recaptcha";
import { useGenericRef } from "@/utils/hooks";

/**
 * Google ReCAPTCHA ref.
 * @returns
 */
const useCaptcha = () => useGenericRef<ReCAPTCHA>();

export default useCaptcha;
