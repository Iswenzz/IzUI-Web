import path from "path";

/**
 * Normalize path separators.
 * @param str - The path to normalize
 * @returns
 */
export const normalizePath = (str: string) => str.replace(path.sep, "/");
