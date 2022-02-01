import { RouteComponent } from "router/components";

import Installation from "./Installation";
export { default as Installation } from "./Installation";
export * from "./Installation";

export const startConfig: RouteComponent[] = [
	{ route: "/start/installation", name: "Installation", component: <Installation /> }
];
