import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './component';
import { CheckboxContainer } from '../CheckboxContainer';

const meta: Meta<CheckboxProps> = {
  title: 'Shadcn UI/Components/Checkbox',
  component: Checkbox,
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
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    }
  }
};

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  render: (args) => {
    return (
      <CheckboxContainer>
        <Checkbox {...args} id="terms"  />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </CheckboxContainer>
    )
  }
};