declare module "*.mp4" {
	const src: string;
	export default src;
}

declare module "*.jpg" {
	const src: string;
	export default src;
}

declare module "*.png" {
	const src: string;
	export default src;
}

declare module "*.webp" {
	const src: string;
	export default src;
}

declare module "*.css" {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module "*.scss" {
	const classes: { readonly [key: string]: string };
	export default classes;
}