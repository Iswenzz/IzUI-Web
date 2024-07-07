import path from "path";

export const process = (sourceText: string, sourcePath: string) => ({
	code: `export default ${JSON.stringify(path.basename(sourcePath))};`
});
