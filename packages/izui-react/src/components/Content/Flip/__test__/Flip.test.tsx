import { buildRender, fireEvent } from "@/test/react";
import { Flip, FlipProps } from "@/components";

const view = buildRender<FlipProps, Query>({
	component: Flip,
	defaultProps: {
		front: <div>FRONT</div>,
		back: <div>BACK</div>
	},
	queries: screen => ({
		component: screen.container.firstChild as HTMLElement,
		front: screen.getByText("FRONT"),
		back: screen.getByText("BACK")
	})
});

describe("Flip", () => {
	it("should flip the component", () => {
		const { front, component } = view();

		expect(component).toHaveClass("front");
		fireEvent.click(front);
		expect(component).toHaveClass("back");
	});

	it("should render both front and back", () => {
		const { front, back } = view();

		expect(front).toBeInTheDocument();
		expect(back).toBeInTheDocument();
	});

	it("should render front", () => {
		const { component } = view();

		expect(component).toHaveClass("front");
	});

	it("should render back", () => {
		const { component } = view({ flipped: true });

		expect(component).toHaveClass("back");
	});

	it("should call the flip callback", () => {
		const flipCallback = jest.fn();
		const { front } = view({ flipCallback });

		expect(flipCallback).not.toHaveBeenCalled();
		fireEvent.click(front);
		expect(flipCallback).toHaveBeenCalled();
	});
});

type Query = {
	component: HTMLElement;
	front: HTMLElement;
	back: HTMLElement;
};
