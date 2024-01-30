import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
    title: "Components/Buttons",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        label: "Button",
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Control: Story = {
    args: {
        primary: true,
        size: "medium"
    }
}

export const Primary: Story = {
    args: {
        size: "medium"
    }
}