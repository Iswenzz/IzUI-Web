import { useState } from "react";

/**
 * Fetch a file.
 * @param url - The file URL.
 * @returns
 */
const useFile = (url: string): Nullable<string> =>
{
	const [file, setFile] = useState<Nullable<string>>(null);

	fetch(url).then(response => response.text()).then(setFile);

	return file;
};

export default useFile;
