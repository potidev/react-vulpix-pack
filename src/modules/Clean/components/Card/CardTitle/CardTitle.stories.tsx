import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from "..";
import { CardTitleProps } from "./types";

const meta: Meta<CardTitleProps> = {
  title: 'Clean/Card/Card.Title',
  component: Card.Title,
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
    children: "Title Card"
  },
};

export default meta;
type Story = StoryObj<CardTitleProps>;

export const Simple: Story = {
  args: {
  },
};

export const WithCard: Story = {
  args: {
    children: "Title Card"
  },
  render: (args) => (
    <Card.Root>
      <Card.Title {...args} />
    </Card.Root>
  ),
};
