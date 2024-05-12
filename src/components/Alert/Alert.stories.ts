import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from ".";

const meta = {
  title: "Atomic/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    text: "HELLO WORLD",
    type: "info",
  },
};
