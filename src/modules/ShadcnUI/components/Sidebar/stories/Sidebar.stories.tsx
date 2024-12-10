import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar, SidebarProps, SidebarProvider, SidebarTrigger } from "..";
import { SidebarDefaultContentExemple } from "./SidebarDefaultContentExemple";
import { SidebarHeaderExemple } from "./SidebarHeaderExemple";
import { SidebarFooterExemple } from "./SidebarFooterExemple";
import { SidebarGroupExemple } from "./SidebarGroupExemple";
import { CollapsibleSidebarGroupExemple } from "./CollapsibleSidebarGroupExemple";
import { SidebarSkeletonExemple } from "./SidebarSkeletonExemple";


const meta: Meta<SidebarProps> = {
  title: 'Shadcn UI/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    collapsible: {
      control: "select",
      options: ["icon", "none", "offcanvas"]
    },
  },
};

export default meta;
type Story = StoryObj<SidebarProps>;

export const Default: Story = {
  args: {
    children: (
      <SidebarDefaultContentExemple />
    )
  },
  decorators: (Story) => {
    return (
      <SidebarProvider>
        <Story />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    )
  },
}

export const Right: Story = {
  decorators: (Story) => {
    return (
      <SidebarProvider>
        <main>
          <SidebarTrigger />
        </main>
        <Story />
      </SidebarProvider>
    )
  },
  args: {
    side: "right",
    children: (
      <SidebarDefaultContentExemple />
    )
  }
}

export const Floating: Story = {
  decorators: (Story) => {
    return (
      <SidebarProvider>
        <Story />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    )
  },
  args: {
    variant: "floating",
    children: (
      <SidebarDefaultContentExemple />
    )
  }
}

export const Inset: Story = {
  decorators: (Story) => {
    return (
      <SidebarProvider>
        <Story />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    )
  },
  args: {
    variant: "inset",
    children: (
      <SidebarDefaultContentExemple />
    )
  }
}

export const CollapsibleIcon: Story = {
  decorators: (Story) => {
    return (
      <SidebarProvider>
        <Story />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    )
  },
  args: {
    collapsible: "icon",
    children: (
      <SidebarDefaultContentExemple />
    )
  }
}


export const WithSidebarHeader: Story = {
  decorators: (Story) => {
    return (
      <SidebarProvider>
        <Story />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    )
  },
  args: {
    children: (
      <SidebarHeaderExemple />
    )
  }
}



export const WithSidebarFooter: Story = {
  decorators: (Story) => {
    return (
      <SidebarProvider>
        <Story />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    )
  },
  args: {
    children: (
      <SidebarFooterExemple />
    )
  }
}

export const WithSidebarGroup: Story = {
  decorators: (Story) => {
    return (
      <SidebarProvider>
        <Story />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    )
  },
  args: {
    children: (
      <SidebarGroupExemple />
    )
  }
}

export const WithCollapsibleMenu: Story = {
  decorators: (Story) => {
    return (
      <SidebarProvider>
        <Story />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    )
  },
  args: {
    children: (
      <CollapsibleSidebarGroupExemple />
    )
  }
}

export const SkeletonMenu: Story = {
  decorators: (Story) => {
    return (
      <SidebarProvider>
        <Story />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    )
  },
  args: {
    children: (
      <SidebarSkeletonExemple />
    )
  }
}

