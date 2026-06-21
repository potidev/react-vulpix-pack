import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '../../.';

const TriggerArea = ({ label = "Right-click here" }: { label?: string }) => (
  <div
    className="flex h-40 w-80 items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground select-none"
  >
    {label}
  </div>
);

const meta: Meta<any> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
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
  argTypes: {},
  args: {},
  decorators: (Story) => (
    <div className="flex flex-row justify-center items-center w-screen">
      <Story />
    </div>
  ),
};

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <ContextMenu>
        <ContextMenuTrigger>
          <TriggerArea />
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Save As…
            <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>Print…
            <ContextMenuShortcut>⌘P</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
};

export const WithLabelsAndGroups: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <ContextMenu>
        <ContextMenuTrigger>
          <TriggerArea label="Right-click for grouped menu" />
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuLabel>My Account</ContextMenuLabel>
          <ContextMenuGroup>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Settings</ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuLabel>Team</ContextMenuLabel>
          <ContextMenuGroup>
            <ContextMenuItem>Invite members</ContextMenuItem>
            <ContextMenuItem>New team</ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuItem>Log out</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
};

export const WithCheckboxItems: Story = {
  render: () => {
    const [showBookmarks, setShowBookmarks] = React.useState(true);
    const [showFullURLs, setShowFullURLs] = React.useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <ContextMenu>
          <ContextMenuTrigger>
            <TriggerArea label="Right-click for checkbox items" />
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuLabel>View</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={showBookmarks}
              onCheckedChange={setShowBookmarks}
            >
              Show Bookmarks Bar
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showFullURLs}
              onCheckedChange={setShowFullURLs}
            >
              Show Full URLs
            </ContextMenuCheckboxItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    );
  },
};

export const WithRadioGroup: Story = {
  render: () => {
    const [person, setPerson] = React.useState("pedro");

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <ContextMenu>
          <ContextMenuTrigger>
            <TriggerArea label="Right-click for radio group" />
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuLabel>Assigned to</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
              <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
              <ContextMenuRadioItem value="alice">Alice Smith</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    );
  },
};

export const WithSubMenu: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <ContextMenu>
        <ContextMenuTrigger>
          <TriggerArea label="Right-click for submenu" />
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuItem>New Tab
            <ContextMenuShortcut>⌘T</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>New Window
            <ContextMenuShortcut>⌘N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>Save Page As…
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut…</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools
                <ContextMenuShortcut>⌥⌘I</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Settings
            <ContextMenuShortcut>⌘,</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
};
