import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Flip from "./Flip";

const meta = {
	title: "Content/Flip",
	component: Flip,
	args: { flipCallback: fn() }
} satisfies Meta<typeof Flip>;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {
		front: <div style={{ background: "blue", width: 400, height: 200 }} />,
		back: <div style={{ background: "cyan", width: 400, height: 200 }} />
	}
};

export default meta;
