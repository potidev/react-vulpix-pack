import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeft } from "lucide-react"

import { Spinner, SpinnerProps } from '.';

const meta: Meta<SpinnerProps> = {
  title: 'Components/Spinner',
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
    size: {
      control: "select",
      options: [
        "small",
        "regular",
        "medium",
        "large",
      ]
    }
  },
  args: { 
  },
};

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    size: "medium",
  },
};

