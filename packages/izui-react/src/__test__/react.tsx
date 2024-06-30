// https://testing-library.com/docs/react-testing-library/setup#custom-render
import { render, fireEvent, RenderResult, RenderOptions } from "@testing-library/react";
import { FC, ReactElement } from "react";

export const customRender = (ui: ReactElement, { ...renderOptions }: RenderOptions = {}) => ({
	...render(ui, { ...renderOptions })
});

const buildRender = <Props, Queries>({
	component: Component,
	defaultProps = {},
	queries = mockQueries
}: BuildRender<Props, Queries>) => {
	return (props = {}) => {
		const view = customRender(<Component {...defaultProps} {...props} />);
		const rerender = (newProps = props) => {
			return view.rerender(<Component {...defaultProps} {...newProps} />);
		};
		return { ...view, rerender, ...queries({ ...view }) };
	};
};

type Object<O> = O | {};
type Render = RenderResult;

type BuildRender<Props, Queries> = {
	component: FC;
	defaultProps?: Object<Props>;
	queries?: (screen: Render) => Queries;
};

const mockObserverFunc = jest.fn().mockImplementation(() => ({
	disconnect: jest.fn(),
	observe: jest.fn(),
	unobserve: jest.fn()
}));

const mockQueries = <Queries,>() => ({}) as Queries;

window.ResizeObserver = window.ResizeObserver || mockObserverFunc;
window.MutationObserver = window.MutationObserver || mockObserverFunc;

export { fireEvent, buildRender, customRender as render };
