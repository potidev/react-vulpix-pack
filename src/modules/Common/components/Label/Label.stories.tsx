import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Label, LabelProps } from './component';

const meta: Meta<LabelProps> = {
  title: 'Common/Label',
  component: Label,
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
    children: "Label"
  },
};

export default meta;
type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    
  },
};