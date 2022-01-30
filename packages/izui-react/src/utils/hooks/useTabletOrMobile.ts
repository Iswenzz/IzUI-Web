import { useMediaQuery, useTheme } from "@mui/material";

/**
 * Media query to check if we are on a tablet or a mobile device.
 * @returns - Media query result.
 */
const useTabletOrMobile = (): boolean =>
{
	const { breakpoints } = useTheme();
	return useMediaQuery(`(max-device-width: ${breakpoints.up("lg")})`);
};

export default useTabletOrMobile;
