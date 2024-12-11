import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { TipButton } from './component';
import { TipButtonProps } from './types';

const meta: Meta<TipButtonProps> = {
  title: 'Shadcn UI/TipButton',
  component: TipButton,
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
type Story = StoryObj<TipButtonProps>;

export const Default: Story = {
  args: {
    type: "question",
  }
};