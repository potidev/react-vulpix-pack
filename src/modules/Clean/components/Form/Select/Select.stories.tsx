import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SelectRoot } from './SelectRoot';
import { SelectContent } from './SelectContent';
import { SelectItem } from './SelectItem';
import { SelectTrigger } from './SelectTrigger';
import { SelectValue } from '@radix-ui/react-select';


const meta: Meta<any> = {
  title: 'Clean/Select',
  component: SelectRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
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
    open: true,
  }
};

export default meta;
type Story = StoryObj<any>;

export const Simple: Story = {
  args: {
    children: (
      <>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </>
    )
  },
};
