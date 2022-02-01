export { default as Documentation } from "./Documentation/Documentation";
export * from "./Documentation/Documentation";

export { default as Layout } from "./Layout/Layout";
export { default as LayoutDocumentation } from "./Layout/LayoutDocumentation/LayoutDocumentation";
export { default as LayoutNavigation } from "./Layout/LayoutNavigation/LayoutNavigation";
export { default as LayoutToolbar } from "./Layout/LayoutToolbar/LayoutToolbar";
export * from "./Layout/Layout";

export { default as Menu } from "./Menu/Menu";
export { default as MenuNavigation } from "./Menu/MenuNavigation/MenuNavigation";
export { default as MenuToolbar } from "./Menu/MenuToolbar/MenuToolbar";
export * from "./Menu/Menu";
export * from "./Menu/MenuCollapse";

export { default as SideMenu } from "./SideMenu/SideMenu";
export * from "./SideMenu/SideMenu";

export * from "./config";

export type Route = {
	route: string,
	name: string
};
