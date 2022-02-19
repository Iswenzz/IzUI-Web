// https://testing-library.com/docs/react-testing-library/setup#custom-render
import { render, fireEvent, RenderResult } from "@testing-library/react";
import { FC, ReactElement } from "react";

const mockQueries = <Queries,>() => ({ }) as Queries;

export const customRender = (ui: ReactElement) => ({
	...render(ui)
});

type Object<O> = O | {};

type BuildRenderOptions<Props, Queries> = {
	component: FC,
	defaultProps?: Object<Props>,
	queries?: (queries: Render) => Queries;
};

type Render<Queries = {}> = RenderResult & Queries;

const buildRender = <Props, Queries>({
	component: Component,
	defaultProps = { },
	queries = mockQueries }: BuildRenderOptions<Props, Queries>) =>
{
	return (props: Object<Props> = { }): Render<Queries> =>
	{
		const view = customRender(<Component {...defaultProps} {...props} />);
		const rerender = (newProps = props) =>
			view.rerender(<Component {...defaultProps} {...newProps} />);

		// There is another way to handle custom queries
		// https://testing-library.com/docs/dom-testing-library/api-helpers#custom-queries
		// but it seems to return only functions
		return {
			...view,
			rerender,
			...queries(view)
		};
	};
};

const mockObserverFunc = jest.fn().mockImplementation(() => ({
	disconnect: jest.fn(),
	observe: jest.fn(),
	unobserve: jest.fn()
}));

window.ResizeObserver = window.ResizeObserver || mockObserverFunc;
window.MutationObserver = window.MutationObserver || mockObserverFunc;

export { fireEvent, buildRender, customRender as render };
