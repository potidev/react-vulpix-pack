import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from '.';

const meta: Meta<any> = {
  title: 'Clean/Avatar',
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
type Story = StoryObj<any>;

export const Default: Story = {
  args: { 
    children: (
      <>
        <AvatarImage src="https://github.com/potidev.png" alt="@potidev" />
        <AvatarFallback>P</AvatarFallback>
      </>
    )
  },
};
