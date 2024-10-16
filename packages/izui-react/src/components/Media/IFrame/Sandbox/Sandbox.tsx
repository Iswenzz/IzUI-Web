import { cloneElement, FC, useCallback, useEffect, useMemo, useState } from "react";

import createCache from "@emotion/cache";
import { CacheProvider, Global } from "@emotion/react";
import { useTheme } from "@mui/material";

import { Themes } from "@/components";
import { getComponentStyles, isStyleNode, isClassesInStyle } from "@/utils/elements";

/**
 * Sandbox styles and react component within an IFrame.
 */
const Sandbox: FC<Props> = ({ children, frameDocument }) => {
	const theme = useTheme();
	const [componentClasses, setComponentClasses] = useState<string[]>([]);

	/**
	 * Fetch the component class names.
	 */
	const fetchComponentStyles = useCallback(
		async () => setComponentClasses(await getComponentStyles(children)),
		[children]
	);

	/**
	 * Get the frame document window.
	 */
	const getWindow = useCallback(() => frameDocument.defaultView, [frameDocument]);

	useEffect(() => {
		fetchComponentStyles();
	}, [fetchComponentStyles]);

	useEffect(
		() => void (frameDocument.body.dir = theme.direction),
		[frameDocument, theme.direction]
	);

	const cache = useMemo(
		() =>
			createCache({
				key: `iframe-demo-${theme.direction}`,
				prepend: true,
				container: frameDocument.head
			}),
		[frameDocument, theme.direction]
	);

	const computedStyles = useMemo(
		() =>
			Array.from(document.head.childNodes)
				.filter(isStyleNode)
				.map(style => style.innerHTML)
				.filter(isClassesInStyle(componentClasses))
				.join(" "),
		[componentClasses]
	);

	return (
		<CacheProvider value={cache}>
			{cloneElement(
				<Themes theme={theme}>
					<Global styles={computedStyles} />
					{children}
				</Themes>,
				{ window: getWindow }
			)}
		</CacheProvider>
	);
};

type Props = {
	children?: React.ReactNode;
	frameDocument: Document;
};

export default Sandbox;
