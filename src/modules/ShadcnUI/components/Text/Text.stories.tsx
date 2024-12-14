import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from '.';

const meta: Meta<TextProps> = {
  title: 'Shadcn UI/Components/Text',
  component: Text,
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
  },
  args: { 
  },
};

export default meta;
type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: { 
    color: "default",
    children: "Hello World",
  },
};

export const Soft: Story = {
  args: { 
    color: "soft",
    children: "Hello World",
  },
};

export const hasChild: Story = {
  args: { 
    color: "default",
    asChild: true,
    children: <h1 className="text-destructive">Hello World</h1>,
  },
};