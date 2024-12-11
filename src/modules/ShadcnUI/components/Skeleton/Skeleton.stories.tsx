import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeft } from "lucide-react"

import { Skeleton } from './component';

const meta: Meta<any> = {
  title: 'Shadcn UI/Skeleton',
  component: Skeleton,
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
  },
};

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    className: "w-[100px] h-[20px] rounded-full"
  },
};

