import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { MdChevronRight, MdMailOutline } from 'react-icons/md';

import { ButtonSpinner } from "../ButtonSpinner";

import { Button } from './component';
import { ButtonProps } from './types';

const meta: Meta<ButtonProps> = {
  title: 'Clean/Button',
  component: Button,
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
        "primary",
        "text",
        "danger",
        "success",
        "warning",
        "background",
      ],
    },
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
      ]
    }
  },
  args: { 
    
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: "solid",  
    children: "Button"
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button"
  },
};

export const Icon: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: <MdChevronRight />
  },
};

export const WithIcon: Story = {
  args: {
    variant: "solid",
    children: (
      <>
        <MdMailOutline />
        E-mail
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    variant: "solid",
    disabled: true,
    children: (
      <>
        <ButtonSpinner />
        E-mail
      </>
    ),
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: (
      <a href="https://google.com" target="_blank">
        E-mail
      </a>
    ),
  },
};