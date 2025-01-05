import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Span, SpanProps } from '.';

const meta: Meta<SpanProps> = {
  title: 'Components/Span',
  component: Span,
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
type Story = StoryObj<SpanProps>;

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