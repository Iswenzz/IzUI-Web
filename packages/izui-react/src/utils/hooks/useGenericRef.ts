import { useRef } from "react";

/**
 * Base hook for typed ref.
 * @returns
 */
const useGenericRef = <T>() =>
{
	const ref = useRef<T>(null);

	return ref;
};

export default useGenericRef;
