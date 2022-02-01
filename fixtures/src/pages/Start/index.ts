import { Route } from "router/components";

export { default as Installation } from "./Installation";
export * from "./Installation";

export const startConfig: Route[] = [
	{ "route": "/start/installation", "name": "Installation" }
];
