import type { Meta, StoryObj } from "@storybook/react";
import Image from ".";

const meta = {
  title: "Atomic/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultImage: Story = {
  args: {},
};
