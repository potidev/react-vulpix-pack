import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { DropdownMenuRoot } from "./DropdownMenuRoot"
import { DropdownMenuTrigger } from "./DropdownMenuTrigger";
import { DropdownMenuContent } from "./DropdownMenuContent";
import { DropdownMenuLabel } from "./DropdownMenuLabel";
import { DropdownMenuSeparator } from "./DropdownMenuSeparator";
import { DropdownMenuItem } from "./DropdownMenuItem";
import { DropdownMenuGroup } from "./DropdownMenuGroup";
import { DropdownMenuShortcut } from "./DropdownMenuShortcut";
import { DropdownMenuSub } from "./DropdownMenuSub";
import { DropdownMenuSubTrigger } from "./DropdownMenuSubTrigger";
import { DropdownMenuPortal } from "./DropdownMenuPortal";
import { DropdownMenuSubContent } from "./DropdownMenuSubContent";

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

export const Complex: Story = {
  render: (args) => (
    <PositionScreen justifyContent='flex-start' alignItems='flex-start'>
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </PositionScreen>
  ),
};
