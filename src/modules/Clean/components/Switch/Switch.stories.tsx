import React, { useState } from "react";
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Switch } from './component';
import { SwitchProps } from './types';

const meta: Meta<SwitchProps> = {
  title: 'Clean/Switch',
  component: Switch,
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
    checked: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
};

export default meta;
type Story = StoryObj<SwitchProps>;

export const Default: Story = {
  args: {
  },
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
};

export const WithLabel: Story = {
  args: {
    label: "Label",
    id: "with-label",
    labelHtmlFor: "with-label"
  },
};