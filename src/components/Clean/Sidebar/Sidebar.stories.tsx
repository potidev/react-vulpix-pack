import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SidebarProps } from "./types";
import { Sidebar } from "./component";

const meta: Meta<SidebarProps> = {
  title: 'components/Clean/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<SidebarProps>;

export const Developer: Story = {
  args: {
    title: 'Sidebar',
  },
};