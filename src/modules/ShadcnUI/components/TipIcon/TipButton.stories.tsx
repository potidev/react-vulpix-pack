import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { TipIcon } from './component';
import { TipIconProps } from './types';

const meta: Meta<TipIconProps> = {
  title: 'Shadcn UI/TipIcon',
  component: TipIcon,
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
  args: {
    message: "Information aboult this field."
  }
};

export default meta;
type Story = StoryObj<TipIconProps>;

export const Default: Story = {
  args: {
    type: "question",
  }
};