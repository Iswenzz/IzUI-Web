import { Location } from "react-router-dom";

/**
 * Check if the location start with the specified path.
 * @param location - The location.
 * @param path - The location path.
 * @returns
 */
export const locationStartWith = (location: Location, path: string) =>
	location.pathname.includes(path);
