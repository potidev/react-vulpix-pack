import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './component';
import { SpinnerProps } from './types';

const meta: Meta<SpinnerProps> = {
  title: 'Clean/Spinner',
  component: Spinner,
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
    color: {
      control: "select",
      options: [
        "text",
        "background",
        "primary"
      ],
    }
  },
};

export default meta;
type Story = StoryObj<SpinnerProps>;

export const Default: Story = {
  args: {
    color: "default"
  },
};
