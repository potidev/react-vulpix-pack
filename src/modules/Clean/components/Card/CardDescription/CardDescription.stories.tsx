import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from "..";
import { CardDescriptionProps } from "./types";

const meta: Meta<CardDescriptionProps> = {
  title: 'Clean/Card/Card.Description',
  component: Card.Description,
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
    children: "Card Description"
  },
};

export default meta;
type Story = StoryObj<CardDescriptionProps>;

export const Simple: Story = {
  args: {
  },
};

export const WithCard: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum."
  },
  render: (args) => (
    <Card.Root>
      <Card.Title>Title</Card.Title>
      <Card.Description {...args} />
    </Card.Root>
  ),
};
