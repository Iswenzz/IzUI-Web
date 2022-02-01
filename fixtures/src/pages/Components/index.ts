import { DemoSources } from "izui-react";
import { Route } from "router/components";

export { default as Components } from "./Components";

export const componentsConfig: ComponentRoute[] = [
	{ route: "/components/Content/Card", name: "Card", demos: require("./Card/demos").default },
	{ route: "/components/Content/Flip", name: "Flip", demos: require("./Flip/demos").default }
];

export type ComponentRoute = Route & {
	demos: DemoSources
};
