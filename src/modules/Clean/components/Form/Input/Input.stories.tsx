import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './component';
import { InputProps } from './types';
import { Span } from "../../../../Common/components/Span/component";
import { Card } from "../../Card";

const meta: Meta<InputProps> = {
  title: 'Clean/Form/Input',
  component: Input,
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
    label: {
      control: "text",
    },
    color: {
      control: "select",
      options: [
        "background",
        "text",
        "primary",
      ]
    },
    backgroundColor: {
      control: "select",
      options: [
        "default",
        "soft",
      ],
    },
    helperMessage: {
      control: "text",
    },
    error: {
      control: "boolean",
    },
    errorMessage: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    }
  },
  args: { 
    label: "Name"
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    
  },
};


export const Placehodler: Story = {
  args: {
    placeholder: "Your name here"
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "John Due",
    placeholder: "Your name here",
  },
};

export const HelpMessage: Story = {
  args: {
    defaultValue: "John Due",
    placeholder: "Your name here",
    helperMessage: "Type your full name"
  },
};


export const Error: Story = {
  args: {
    defaultValue: "John Due",
    placeholder: "Your name here",
    error: true,
  },
};


export const ErrorWithMessage: Story = {
  args: {
    disabled: true,
    defaultValue: "John Due",
    placeholder: "Your name here",
    errorMessage: "Error message!",
    error: true,
    helperMessage: "Type your full name"
  },
};



export const WithReactHookForm: Story = {
  args: {
  },
  render: (args) => (
    
    <Card.Root>
      <Card.Title>Login</Card.Title>
      <Card.Description>Faça seu login</Card.Description>
      <Input {...args} />
    </Card.Root>
  ),
};
