// https://testing-library.com/docs/react-testing-library/setup#custom-render
import { render, RenderResult, RenderOptions } from "@testing-library/react";
import { FC, ReactElement } from "react";

export const customRender = (
	ui: ReactElement,
	renderOptions: CustomRenderOptions = {}
): CustomRenderResult => render(ui, renderOptions);

const buildRender = <Props, Queries>({
	component: Component,
	defaultProps = {},
	queries = () => ({}) as Queries
}: BuildRenderOptions<Props, Queries>) => {
	return (props = defaultProps): BuildRenderResult<Props, Queries> => {
		const view = customRender(<Component {...defaultProps} {...props} />);
		const rerender = (newProps = props) =>
			view.rerender(<Component {...defaultProps} {...newProps} />);
		return { ...view, ...queries(view), rerender };
	};
};

type Object<O> = O | {};

type CustomRenderOptions = RenderOptions;
type CustomRenderResult = RenderResult;

type BuildRenderOptions<Props, Queries> = {
	component: FC<Object<Props>>;
	defaultProps?: Object<Props>;
	queries?: (screen: CustomRenderResult) => Queries;
};

type BuildRenderResult<Props, Queries> = CustomRenderResult &
	Queries & {
		rerender: (props: Object<Props>) => void;
	};

export * from "@testing-library/react";
export { buildRender, customRender as render };
