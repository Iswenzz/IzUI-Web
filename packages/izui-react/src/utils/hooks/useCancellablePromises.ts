import { useRef } from "react";

/**
 * Hook to handle pending promises.
 */
const useCancellablePromises = <Result>() => {
	const promises = useRef<CancellablePromise<Result>[]>([]);

	const add = (promise: Promise<Result>) => promises.current.push(wrap(promise));
	const clear = () => promises.current.forEach(p => p.cancel());

	const remove = (promise: Promise<Result>) =>
		(promises.current = promises.current.filter(p => p.promise !== promise));

	return { add, remove, clear, wrap };
};

/**
 * Cancel a promise.
 * @param promise - The promise.
 */
const wrap = <Result>(promise: Promise<Result>): CancellablePromise<Result> => {
	let isCanceled = false;
	const wrapper = new Promise<Result>((resolve, reject) =>
		promise.then(
			value => (isCanceled ? reject({ isCanceled, value }) : resolve(value)),
			error => reject({ isCanceled, error })
		)
	);
	return {
		promise: wrapper,
		cancel: () => (isCanceled = true)
	};
};

export type CancellablePromise<Result> = {
	promise: Promise<Result>;
	cancel: () => void;
};

export type CancellablePromiseException = {
	isCanceled: boolean;
	error: string;
};

export default useCancellablePromises;
