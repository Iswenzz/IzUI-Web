import { basename } from "path";

export const process = (src: string, filename: string) =>
	`export default ${JSON.stringify(basename(filename))};`;
