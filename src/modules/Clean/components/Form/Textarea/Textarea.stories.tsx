import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './component';
import { TextareaProps } from './types';

const meta: Meta<TextareaProps> = {
  title: 'Clean/Form/Textarea',
  component: Textarea,
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
        "background",
        "text",
        "primary",
      ]
    },
    backgroundColor: {
      control: "select",
      options: [
        "shape",
        "soft",
        "background",
      ],
    },
    disabled: {
      control: "boolean",
    }
  },
};

export default meta;
type Story = StoryObj<TextareaProps>;

export const Default: Story = {
  args: {
    
  },
};


export const Placehodler: Story = {
  args: {
    placeholder: "Your name here"
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "John Due",
    placeholder: "Your name here",
  },
};