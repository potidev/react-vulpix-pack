import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { DollarSign } from "lucide-react"

import { SimpleStatsCard } from './component';
import { SimpleStatsCardProps } from './types';


const meta: Meta<SimpleStatsCardProps> = {
  title: 'Shadcn UI/Kit/Stats/SimpleStatsCard',
  component: SimpleStatsCard,
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
    description: {
      control: "text",
    },
    title: {
      control: "text",
    },
    value: {
      control: "text",
    },
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
type Story = StoryObj<SimpleStatsCardProps>;

export const Default: Story = {
  args: {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: <DollarSign />,
    className: "w-[250px]"
  },
};
