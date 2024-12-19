import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeft } from "lucide-react"

import { Button, ButtonProps } from './component';

const meta: Meta<ButtonProps> = {
  title: 'Shadcn UI/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#000000' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "outline",
        "ghost",
        "link",
        "destructive",
        "ghostText",
      ],
    },
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
  args: { 
    disabled: false,
    fullWidth: false,
  },
  decorators: (Story) => {
    return (
      <div className="flex flex-row justify-center items-center w-screen">
        <Story />
      </div>
    )
  }
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default", 
  },
};

export const IconButtonMd: Story = {
  args: {
    children: (
      <ArrowLeft />
    ),
    variant: "ghost",
    size: "iconMd", 
  },
}
