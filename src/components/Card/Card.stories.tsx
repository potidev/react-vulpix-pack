import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeft } from "lucide-react"

import { Card, CardProps } from './component';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
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
  },
  decorators: (Story) => {
    return (
      <div className="flex flex-row justify-center items-center w-screen">
        <Story />
      </div>
    )
  }
};

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    children: "Card", 
  },
};