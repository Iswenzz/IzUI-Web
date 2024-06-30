import fs from "fs";
import path from "path";

/**
 * Copy files to build directory.
 * @param files - The files to copy.
 * @param outputPath - The build directory path.
 */
export const copyToBuild = (files: FilePattern[], outputPath = "build") => {
	if (!fs.existsSync(outputPath)) throw new Error("Can't find the build directory.");

	files.forEach(({ from, to = "" }) => {
		if (fs.existsSync(from)) {
			if (fs.lstatSync(from).isDirectory())
				fs.cpSync(from, path.join(outputPath, to), { recursive: true });
			else fs.copyFileSync(from, path.join(path.join(outputPath, to), path.basename(from)));
		}
	});
};

export type FilePattern = {
	from: string;
	to?: string;
};
