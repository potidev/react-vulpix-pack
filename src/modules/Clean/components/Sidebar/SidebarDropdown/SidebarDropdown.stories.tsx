import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SidebarDropdown } from "./component";
import { SidebarDropdownProps } from "./types";
import { MdOutlineCreateNewFolder } from 'react-icons/md';

const meta: Meta<SidebarDropdownProps> = {
  title: 'components/Clean/SidebarDropdown',
  component: SidebarDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { 
    icon: <MdOutlineCreateNewFolder />,
  },
};

export default meta;
type Story = StoryObj<SidebarDropdownProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithOptions: Story = {
  args: {
    title: 'Create',
    icon: <MdOutlineCreateNewFolder />,
    options: [
      { label: 'Folder' },
      { label: 'Document' },
      { label: 'Project' },
    ],
  },
};