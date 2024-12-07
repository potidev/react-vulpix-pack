import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './component';
import { CheckboxProps } from "./types";

const meta: Meta<CheckboxProps> = {
  title: 'Clean/Form/Checkbox',
  component: Checkbox,
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
        "primary"
      ] 
    },
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    }
  }
};

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
  },
};