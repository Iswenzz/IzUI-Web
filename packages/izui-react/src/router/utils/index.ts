import { ReactElement } from "react";

export type Route = {
	route: string,
	name: string
};

export type RouteComponent = Route & {
	component: ReactElement
};
