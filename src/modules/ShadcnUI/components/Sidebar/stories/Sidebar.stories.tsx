import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar, SidebarInset, SidebarProps, SidebarProvider, SidebarTrigger } from "..";
import { SidebarDefaultContentExemple } from "./SidebarDefaultContentExemple";
import { SidebarHeaderExemple } from "./SidebarHeaderExemple";
import { SidebarFooterExemple } from "./SidebarFooterExemple";
import { SidebarGroupExemple } from "./SidebarGroupExemple";
import { CollapsibleSidebarGroupExemple } from "./CollapsibleSidebarGroupExemple";
import { SidebarSkeletonExemple } from "./SidebarSkeletonExemple";
import { SidebarMainContainer } from "../SidebarMainContainer";
import { SidebarToolbar } from "../SidebarToolbar";


const meta: Meta<SidebarProps> = {
  title: 'Shadcn UI/Components/Sidebar',
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
        <SidebarInset>
          <SidebarToolbar breadcrumbs={[
            { label: "Home", href: "/home" },
            { label: "Settings", href: "/settings" },
            { label: "Current" },
          ]} />
          <SidebarMainContainer>
            <div className="flex flex-1 flex-col gap-4">
              {Array.from({ length: 24 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-video h-12 w-full rounded-lg bg-muted/50"
                />
              ))}
            </div>
          </SidebarMainContainer>
        </SidebarInset>
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

