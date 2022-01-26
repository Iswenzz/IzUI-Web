/**
 * Get a DOM Element by XPath.
 * @param xpath - XPath pattern.
 * @param contextNode - The target document.
 */
export const getElementsByXPath = (xpath: string, contextNode?: Document) =>
{
	let xpathResult = null;
	if(contextNode === undefined)
		xpathResult = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
	else
		xpathResult = contextNode.evaluate(xpath, contextNode, null, XPathResult.ANY_TYPE, null);

	const array = [];
	let element;
	element = xpathResult.iterateNext();
	while(element)
	{
		array[array.length] = element;
		element = xpathResult.iterateNext();
	}
	return array;
};

/**
 * Get multiple DOM Elements by XPath.
 * @param xpath - The XPath pattern.
 * @param contextNode - The target document.
 */
export const getElementByXPath = (xpath: string, contextNode?: Document) =>
{
	let xpathResult = null;
	if (contextNode === undefined)
		xpathResult = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
	else
		xpathResult = contextNode.evaluate(xpath, contextNode, null, XPathResult.ANY_TYPE, null);
	return xpathResult.iterateNext();
};
