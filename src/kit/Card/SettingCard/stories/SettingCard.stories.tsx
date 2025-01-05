import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { SettingCard, SettingCardProps } from '..';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, Switch } from "../../../../components";
import { SettingThemeExemple } from "./SettingThemeExemple";

const meta: Meta<SettingCardProps> = {
  title: 'Kit/Card/SettingCard',
  component: SettingCard,
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
  decorators: (Story) => {
    return (
      <div className="flex flex-row justify-center items-center w-screen">
        <Story />
      </div>
    )
  }
};

export default meta;
type Story = StoryObj<SettingCardProps>;

export const WithSwitch: Story = {
  args: { 
    title: "Marketing emails",
    description: "Receive emails about new products, features, and more.",
    children: <Switch />
  },
};

export const WithSelect: Story = {
  args: { 
    title: "Notification",
    description: "Choose the channels to receive notification.",
    children: (
      <Select>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Select a channel" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="email">E-mail</SelectItem>
            <SelectItem value="push">Push Notification</SelectItem>
            <SelectItem value="whatsapp">WhatsApp</SelectItem>
            <SelectItem value="sms">SMS</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  },
};

export const ThemeExemple: Story = {
  args: { 
    title: "Theme",
    description: "Choose the application theme.",
    children: <SettingThemeExemple />
  },
};