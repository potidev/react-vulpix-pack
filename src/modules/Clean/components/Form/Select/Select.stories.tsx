import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PositionScreen } from "../../../stories/components/PositionScreen";

import { SelectRoot } from './SelectRoot';
import { SelectContent } from './SelectContent';
import { SelectItem } from './SelectItem';
import { SelectTrigger } from './SelectTrigger';
import { SelectValue } from '@radix-ui/react-select';


const meta: Meta<any> = {
  title: 'Clean/Form/Select/Demos',
  component: SelectRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#000000' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  args: {
    className: "page",
  }
};

export default meta;
type Story = StoryObj<any>;

export const Simple: Story = {
  render: (args) => (
    <PositionScreen justifyContent='flex-start' alignItems='flex-start'>
      <SelectRoot {...args}>
        <SelectTrigger style={{ width: "200px" }}>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </SelectRoot>
    </PositionScreen>
  ),
};

export const BottomRight: Story = {
  render: (args) => (
    <PositionScreen justifyContent='flex-end' alignItems='flex-end'>
      <SelectRoot {...args}>
        <SelectTrigger style={{ width: "200px" }}>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </SelectRoot>
    </PositionScreen>
  ),
};

export const BottomLeft: Story = {
  render: (args) => (
    <PositionScreen justifyContent='flex-start' alignItems='flex-end'>
      <SelectRoot {...args}>
        <SelectTrigger style={{ width: "200px" }}>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </SelectRoot>
    </PositionScreen>
  ),
};

export const TopRight: Story = {
  render: (args) => (
    <PositionScreen justifyContent='flex-end' alignItems='flex-start'>
      <SelectRoot {...args}>
        <SelectTrigger style={{ width: "200px" }}>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </SelectRoot>
    </PositionScreen>
  ),
};


export const WithLabel: Story = {
  render: (args) => (
    <PositionScreen justifyContent='center' alignItems='center'>
      <SelectRoot {...args}>
        <SelectTrigger label="Select" style={{ width: "200px" }}>
          <SelectValue placeholder="Select a option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </SelectRoot>
    </PositionScreen>
  ),
};

export const HelperMessage: Story = {
  render: (args) => (
    <PositionScreen justifyContent='center' alignItems='center'>
      <SelectRoot {...args}>
        <SelectTrigger label="Select" helperMessage='Select a option to continue' style={{ width: "200px" }}>
          <SelectValue placeholder="Select a option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </SelectRoot>
    </PositionScreen>
  ),
};


export const Error: Story = {
  render: (args) => (
    <PositionScreen justifyContent='center' alignItems='center'>
      <SelectRoot {...args}>
        <SelectTrigger label="Select" error style={{ width: "200px" }}>
          <SelectValue placeholder="Select a option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </SelectRoot>
    </PositionScreen>
  ),
};

export const ErrorMessage: Story = {
  render: (args) => (
    <PositionScreen justifyContent='center' alignItems='center'>
      <SelectRoot {...args}>
        <SelectTrigger label="Select" errorMessage='Error when select option' style={{ width: "200px" }}>
          <SelectValue placeholder="Select a option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </SelectRoot>
    </PositionScreen>
  ),
};

