import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectTrigger } from './component';
import { SelectRoot } from '../SelectRoot';
import { SelectValue } from "../SelectValue";


const meta: Meta<any> = {
  title: 'Clean/Form/Select/SelectTrigger',
  component: SelectTrigger,
  tags: ['autodocs'],
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
  args: {
    className: "page",
  }
};

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  render: (args) => (
    <SelectRoot>
      <SelectTrigger {...args}>
        <SelectValue placeholder="Select Trigger" />
      </SelectTrigger>
    </SelectRoot>
  ),
};
