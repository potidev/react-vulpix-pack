import React from "react";

import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeft } from "lucide-react"

import { RadioGroup, RadioGroupItem, RadioGroupItemProps } from '.';
import { Label } from "../"

const meta: Meta<RadioGroupItemProps> = {
  title: 'Components/RadioGroup',
  component: RadioGroupItem,
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
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
      ],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: { 
    disabled: false,
  },
  decorators: (Story) => {
    return (
      <RadioGroup defaultValue="default">
        <Story />
      </RadioGroup>
    )
  }
};

export default meta;
type Story = StoryObj<RadioGroupItemProps>;

export const Default: Story = {
  args: {
    variant: "default", 
  },
  render: (props) => {
    return (
      <>
        <div className="flex items-center gap-3">
          <RadioGroupItem {...props}  value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem {...props}  value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem {...props} value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </>
    )
  }
};

