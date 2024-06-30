import { MouseEvent } from "react";

import { delay } from "@/utils/misc";
import useCancellablePromises, {
	cancellablePromise,
	CancellablePromiseException
} from "./useCancellablePromises";

/**
 * Hook to handle double click with event prevention.
 * @param onClick - The click callaback.
 * @param onDoubleClick - The double click callback.
 */
const useDoubleClick = (onClick?: Callback, onDoubleClick?: Callback) => {
	const cancellable = useCancellablePromises();

	const handleClick = async (event: MouseEvent) => {
		event.preventDefault();

		cancellable.clearPendingPromises();
		const waitForClick = cancellablePromise(delay(300));
		cancellable.appendPendingPromise(waitForClick);

		try {
			await waitForClick.promise;
			cancellable.removePendingPromise(waitForClick);
			if (onClick) onClick(event);
		} catch (ex) {
			const e = ex as CancellablePromiseException;
			cancellable.removePendingPromise(waitForClick);
			if (!e.isCanceled) throw e.error;
		}
	};

	const handleDoubleClick = (event: MouseEvent) => {
		event.preventDefault();
		cancellable.clearPendingPromises();

		if (onDoubleClick) onDoubleClick(event);
	};
	return [handleClick, handleDoubleClick];
};

type ClickCallback = (event?: React.MouseEvent) => void;
type ClickCallbackHandler = React.MouseEventHandler | undefined;
type Callback = ClickCallback | ClickCallbackHandler;

export default useDoubleClick;
