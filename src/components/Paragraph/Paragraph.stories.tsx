"use client";

import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph, ParagraphProps } from '.';

const meta: Meta<ParagraphProps> = {
  title: 'Components/Paragraph',
  component: Paragraph,
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
type Story = StoryObj<ParagraphProps>;

export const Default: Story = {
  args: { 
    children: "Hello World",
  },
};