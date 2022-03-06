import { useState } from "react";

/**
 * Fetch a file.
 * @param url - The file URL.
 * @returns
 */
const useFile = (url?: string): File =>
{
	const [file, setFile] = useState<Optional<string>>(undefined);
	const [isLoading, setIsLoading] = useState(true);

	if (!url) return { file: undefined, isLoading: false };

	fetch(url).then(response => response.text()).then(file =>
	{
		setFile(file);
		setIsLoading(false);
	});

	return { file, isLoading };
};

type File = {
	file?: string,
	isLoading: boolean
};

export default useFile;
