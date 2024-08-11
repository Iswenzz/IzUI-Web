import { MouseEvent, MouseEventHandler } from "react";

import { delay } from "@/utils/misc";

import useCancellablePromises, { CancellablePromiseException } from "./useCancellablePromises";

/**
 * Hook to handle double click with event prevention.
 * @param onClick - The click callaback.
 * @param onDoubleClick - The double click callback.
 */
const useDoubleClick = (onClick?: MouseEventHandler, onDoubleClick?: MouseEventHandler) => {
	const cancellable = useCancellablePromises();

	const handleClick = async (event: MouseEvent) => {
		event.preventDefault();

		const promise = delay(300);
		cancellable.clear();
		cancellable.add(promise);

		try {
			await promise;
			if (onClick) onClick(event);
		} catch (ex) {
			const e = ex as CancellablePromiseException;
			if (!e.isCanceled) throw e.error;
		} finally {
			cancellable.remove(promise);
		}
	};

	const handleDoubleClick = (event: MouseEvent) => {
		event.preventDefault();
		cancellable.clear();
		if (onDoubleClick) onDoubleClick(event);
	};
	return [handleClick, handleDoubleClick];
};

export default useDoubleClick;
