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
        onClick: () => {
            alert("Button clicked!")
        },
    },
    argTypes: {
        backgroundColor: { control: "color" },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Control: Story = {
    args: {
        size: "medium",
        loading: false,
        backgroundColor: "#4f94d4",
    }
}

export const Primary: Story = {
    args: {
        size: "medium",
        variant: "primary",
        loading: false,
        backgroundColor: "#4f9fd4"
    }
}

export const Secondary: Story = {
    args: {
        size: "medium",
        variant: "secondary",
        loading: false,
        backgroundColor: "#008a20"
    }
}

export const Danger: Story = {
    args: {
        size: "medium",
        variant: "danger",
        loading: false,
        backgroundColor: "#b32d2e"
    }
}

export const Ghost: Story = {
    args: {
        size: "medium",
        variant: "ghost",
        loading: false,
        backgroundColor: "#f6f7f7",
        color: "#101517",
        border: "1px solid #101517"
    }
}