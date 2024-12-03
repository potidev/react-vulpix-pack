import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { CardRoot } from './component';
import { CardRootProps } from './types';
import { Span } from "../../../../Common/components/Span/component";

const meta: Meta<CardRootProps> = {
  title: 'Clean/Card/Card.Root',
  component: CardRoot,
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
    color: {
      control: "select",
      options: [
        "default",
        "soft"
      ],
    },
    hoverEffect: {
      control: "boolean",
      type: "boolean",
    },
    cursorPointer: {
      control: "boolean",
      type: "boolean",
    }
  },
  args: { 
    children: <Span>Card.Root</Span>
  },
};

export default meta;
type Story = StoryObj<CardRootProps>;

export const DefaultBackground: Story = {
  args: {
    color: "default"
  },
};

export const SoftBackground: Story = {
  args: {
    color: "soft"
  },
};

export const HoverEffect: Story = {
  args: {
    hoverEffect: true
  },
};

export const CursorPointer: Story = {
  args: {
    cursorPointer: true
  },
};

export const CursorPointerHoverEffect: Story = {
  args: {
    cursorPointer: true,
    hoverEffect: true,
  },
};