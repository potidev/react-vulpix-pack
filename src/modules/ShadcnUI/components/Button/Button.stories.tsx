import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './component';

const meta: Meta<ButtonProps> = {
  title: 'Shadcn UI/Button',
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
      ],
    },
    disabled: {
      control: "boolean"
    }
  },
  args: { 
    disabled: false,
  },
  
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default", 
  },
};
