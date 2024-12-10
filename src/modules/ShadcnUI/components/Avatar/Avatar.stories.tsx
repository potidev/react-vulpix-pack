import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage, AvatarProps  } from './component';

const meta: Meta<AvatarProps> = {
  title: 'Shadcn UI/Avatar',
  component: Avatar,
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
};

export default meta;
type Story = StoryObj<AvatarProps>;

export const WithImage: Story = {
  args: {
    children: (
      <>
        <AvatarImage src="https://github.com/potidev.png" />
        <AvatarFallback>PD</AvatarFallback>
      </>
    )
  },
};

export const AvatarLabel: Story = {
  args: {
    children: (
      <>
        <AvatarFallback>PD</AvatarFallback>
      </>
    )
  },
};
