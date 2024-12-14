import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { User } from "lucide-react";

import { SimpleInformation, SimpleInformationProps } from '.';

const meta: Meta<SimpleInformationProps> = {
  title: 'Shadcn UI/Kit/Information/SimpleInformation',
  component: SimpleInformation,
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
    label: "Full Name",
    value: "John Due da Silva",
    defaultValue: "Not Defined"
  },
};

export default meta;
type Story = StoryObj<SimpleInformationProps>;

export const Default: Story = {
  args: { 
  },
};

export const WithIcon: Story = {
  args: { 
    icon: <User /> 
  },
};

export const WithTip: Story = {
  args: { 
    icon: <User />, 
    tipMessage: "This is your full name"
  },
};