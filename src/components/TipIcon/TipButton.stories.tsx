import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { TipIcon } from './component';
import { TipIconProps } from './types';
import { TipLabel, TipLabelProps } from "../TipLabel"

import { Label } from "../Label";
import { Input } from "../Input";
 
const meta: Meta<TipIconProps> = {
  title: 'Components/TipIcon',
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

export const WithInput: Story = {
  render: () => {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <TipLabel>
          <Label htmlFor="email">Email</Label>
          <TipIcon message="Email contans @" />
        </TipLabel>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    )
  }
};