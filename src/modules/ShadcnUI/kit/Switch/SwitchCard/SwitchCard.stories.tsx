import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeft } from "lucide-react"

import { SwitchCard, SwitchCardProps } from '.';
import { Switch } from "../../../components/Switch";

const meta: Meta<SwitchCardProps> = {
  title: 'Shadcn UI/Kit/Switch/SwitchCard',
  component: SwitchCard,
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
    form: {
      control: "boolean",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    }
  },
  decorators: (Story) => (
    <div className="w-full space-y-6">
      <Story />
    </div>
  )
};

export default meta;
type Story = StoryObj<SwitchCardProps>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Switch />
      </>
    ),
    title: "Marketing emails",
  },
};

export const Description: Story = {
  args: {
    children: (
      <>
        <Switch />
      </>
    ),
    title: "Marketing emails",
    description: "Receive emails about new products, features, and more.",
  },
};