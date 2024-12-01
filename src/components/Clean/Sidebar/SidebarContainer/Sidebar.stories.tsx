import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SidebarContainerProps } from "./types";
import { SidebarContainer } from "./component";

const meta: Meta<SidebarContainerProps> = {
  title: 'components/Clean/SidebarContainer',
  component: SidebarContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<SidebarContainerProps>;

export const Developer: Story = {
  args: {
    title: 'Sidebar',
  },
};