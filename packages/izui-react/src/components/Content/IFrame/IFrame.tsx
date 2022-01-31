import { FC, useEffect, useReducer, useRef } from "react";
import { createPortal } from "react-dom";

import Sandbox from "./Sandbox/Sandbox";

const defaultSize: Size = { width: 550, height: 300 };

/**
 * Iframe wrapper.
 */
const IFrame: FC<Props> = ({ children, size = defaultSize, title, ...props }) =>
{
	const frameRef = useRef<Nullable<HTMLIFrameElement>>(null);
	const frameDocument = frameRef.current?.contentDocument;

	// If we portal content into the iframe before the load event then that content is dropped in firefox.
	const [iframeLoaded, onLoad] = useReducer(() => true, false);

	useEffect(() =>
	{
		const frameDocument = frameRef.current?.contentDocument;

		// When we hydrate the iframe then the load event is already dispatched
		// once the iframe markup is parsed (maybe later but the important part is
		// that it happens before React can attach event listeners).
		// We need to check the readyState of the document once the iframe is mounted
		// and "replay" the missed load event.
		// See https://github.com/facebook/react/pull/13862 for ongoing effort in React
		// (though not with iframes in mind).
		if (frameDocument != null && frameDocument.readyState === "complete" && !iframeLoaded)
			onLoad();
	}, [iframeLoaded]);

	return (
		<iframe {...props} title={title} ref={frameRef} onLoad={onLoad} width={size.width} height={size.height}>
			{iframeLoaded && frameDocument && createPortal((
				<Sandbox frameDocument={frameDocument}>{children}</Sandbox>
			), frameDocument.body)}
		</iframe>
	);
};

type Props = React.IframeHTMLAttributes<HTMLIFrameElement> & {
	size?: Size,
	title: string
};

export default IFrame;
