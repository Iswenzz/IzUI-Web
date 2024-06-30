import { ReactElement } from "react";
import { Location } from "react-router";

export type Route = {
	route: string;
	name: string;
};

export type RouteComponent = Route & {
	component: ReactElement;
};

/**
 * Check if the location start with the specified path.
 * @param location - The location.
 * @param path - The location path.
 * @returns
 */
export const locationStartWith = (location: Location, path: string) =>
	location.pathname.includes(path);
