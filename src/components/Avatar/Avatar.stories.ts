import type { Meta, StoryObj } from "@storybook/react";
import Avatar from ".";

const meta = {
  title: "Atomic/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultImage: Story = {
  args: {},
};
