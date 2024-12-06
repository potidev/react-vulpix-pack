import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { DropdownMenuRoot } from "./DropdownMenuRoot"
import { DropdownMenuTrigger } from "./DropdownMenuTrigger";
import { DropdownMenuContent } from "./DropdownMenuContent";
import { DropdownMenuLabel } from "./DropdownMenuLabel";
import { DropdownMenuSeparator } from "./DropdownMenuSeparator";
import { DropdownMenuItem } from "./DropdownMenuItem";

import { PositionScreen } from '../../stories/components/PositionScreen';
import { Button } from '../Button';

const meta: Meta<any> = {
  title: 'Clean/DropdownMenu/Demos',
  component: DropdownMenuRoot,
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
};

export default meta;
type Story = StoryObj<any>;

export const Simple: Story = {
  render: (args) => (
    <PositionScreen justifyContent='flex-start' alignItems='flex-start'>
      <DropdownMenuRoot {...args}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem disabled>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </PositionScreen>
  ),
};
