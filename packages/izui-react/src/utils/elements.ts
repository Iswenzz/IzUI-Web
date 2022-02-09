import ReactDOM from "react-dom";

/**
 * Check if the child node is a <style> element.
 * @param node - The child node.
 * @returns
 */
export const isStyleNode = (node: ChildNode): node is HTMLStyleElement =>
	node instanceof HTMLStyleElement;

/**
* Checks if the style contains these classes.
* @param classes - The classes to check.
* @returns
*/
export const isClassesInStyle = (classes: string[]) => (style: string): boolean =>
	classes.some(cssClass => style.includes(cssClass));

/**
* Recurse every child of the specified element and retrieve all class names.
* @param element - The element to recurse.
* @returns
*/
export const recurseChildClassNames = (element: Element): string[] =>
{
	const classNames: string[] = Array.from(element.classList);

	Array.from(element.children).forEach(e =>
		classNames.push(...recurseChildClassNames(e)));

	return classNames;
};

/**
* Get the component styles.
* @param component - The component to render.
* @returns
*/
export const getComponentStyles = async (component: React.ReactNode): Promise<string[]> =>
{
	if (!component) return [];

	const mockElement = document.createElement("div");
	await new Promise((res: any) => void ReactDOM.render(
		component as React.ReactElement, mockElement, res));
	return recurseChildClassNames(mockElement);
};

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
