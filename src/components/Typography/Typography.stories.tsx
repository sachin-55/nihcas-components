import type { Meta, StoryObj } from "@storybook/react";

import Typography from "."; 

const meta = {
  title: "Atomic/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children:"This is a typography component."
  },
};
