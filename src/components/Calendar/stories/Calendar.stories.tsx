import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Calendar, CalendarProps } from '../component';
import { WithFormExemple } from "./WithFormExemple";

const meta: Meta<CalendarProps> = {
  title: 'Components/Calendar',
  component: Calendar,
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
type Story = StoryObj<CalendarProps>;

export const Simple: Story = {
  args: {
    mode: "single",
  },
};

export const WithForm: Story = {
  render: () => <WithFormExemple />
}