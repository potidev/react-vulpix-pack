import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MdOutlineCalendarMonth, MdOutlineChecklist, MdOutlineCreateNewFolder, MdOutlineDashboard, MdOutlineHome, MdPersonOutline } from 'react-icons/md';
import { SidebarDropdownProvider, SidebarProvider, SidebarProviderProps } from "../../contexts";
import { Sidebar } from "../../components/Sidebar";

import { PageData } from "./PageData";
import "./styles.scss";

const meta: Meta<SidebarProviderProps> = {
  title: 'Clean/Sidebar',
  component: SidebarProvider,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    className: "page",
  }
};

export default meta;
type Story = StoryObj<SidebarProviderProps>;

export const Simple: Story = {
  args: {
    children: (
      <SidebarProvider>
        <Sidebar.Root
          title='Sidebar'
        >
          <Sidebar.Item 
            icon={<MdOutlineHome />}
            label='Home'
            active
          />
          <Sidebar.Item 
            icon={<MdOutlineDashboard />}
            label='Dashboard'
          />
          <Sidebar.Dropdown 
            icon={<MdOutlineCreateNewFolder />}
            title='Create'
            options={[
              { label: 'Folder' },
              { label: 'Document' },
              { label: 'Project' },
            ]}
          />
          <Sidebar.Dropdown 
            icon={<MdOutlineChecklist />}
            title='Todo-Lists'
            options={[
              { label: 'Work' },
              { label: 'Private' },
              { label: 'Gardening' },
              { label: 'School' }
            ]}
          />
          <Sidebar.Item 
            icon={<MdOutlineCalendarMonth />}
            label='Calendar'
          />
          <Sidebar.Item 
            icon={<MdPersonOutline />}
            label='Profile'
          />
        </Sidebar.Root>
        <Sidebar.Main>
          <PageData />
        </Sidebar.Main>
      </SidebarProvider>
    )
  },
};

export const DropdownSingleOpen: Story = {
  args: {
    children: (
      <>
        <Sidebar.Root
          title='Sidebar'
        >
          <SidebarDropdownProvider singleOpen>
            <Sidebar.Item 
              icon={<MdOutlineHome />}
              label='Home'
              active
              />
            <Sidebar.Item 
              icon={<MdOutlineDashboard />}
              label='Dashboard'
              />
            <Sidebar.Dropdown 
              icon={<MdOutlineCreateNewFolder />}
              title='Create'
              openId='create'
              options={[
                { label: 'Folder' },
                { label: 'Document' },
                { label: 'Project' },
              ]}
              />
            <Sidebar.Dropdown 
              icon={<MdOutlineChecklist />}
              title='Todo-Lists'
              openId='todo'
              options={[
                { label: 'Work' },
                { label: 'Private' },
                { label: 'Gardening' },
                { label: 'School' }
              ]}
              />
            <Sidebar.Item 
              icon={<MdOutlineCalendarMonth />}
              label='Calendar'
            />
            <Sidebar.Item 
              icon={<MdPersonOutline />}
              label='Profile'
            />
          </SidebarDropdownProvider>
        </Sidebar.Root>
        <Sidebar.Main>
          <PageData />
        </Sidebar.Main>
      </>
    )
  },
};

export const UsingToolBar: Story = {
  args: {
    children: (
      <>
        <Sidebar.Root
          title='Sidebar'
          usingToolbar
        >
          <Sidebar.Item 
            icon={<MdOutlineHome />}
            label='Home'
            active
          />
          <Sidebar.Item 
            icon={<MdOutlineDashboard />}
            label='Dashboard'
            />
          <Sidebar.Dropdown 
            icon={<MdOutlineCreateNewFolder />}
            title='Create'
            openId='create'
            options={[
              { label: 'Folder' },
              { label: 'Document' },
              { label: 'Project' },
            ]}
            />
          <Sidebar.Dropdown 
            icon={<MdOutlineChecklist />}
            title='Todo-Lists'
            openId='todo'
            options={[
              { label: 'Work' },
              { label: 'Private' },
              { label: 'Gardening' },
              { label: 'School' }
            ]}
            />
          <Sidebar.Item 
            icon={<MdOutlineCalendarMonth />}
            label='Calendar'
          />
          <Sidebar.Item 
            icon={<MdPersonOutline />}
            label='Profile'
          />
        </Sidebar.Root>
        <Sidebar.Main
          defaultToolbarPadding
          defaultContentPadding
          fixedHeader={
            <Sidebar.Toolbar />
          }
        >
          <PageData />
        </Sidebar.Main>
      </>
    )
  },
};

export const UsingToolBarOnlyOnMobile: Story = {
  args: {
    children: (
      <>
        <Sidebar.Root
          logo={<Sidebar.Logo src="/assets/imgs/logo.png" />}
          title='Vulpix'
        >
          <Sidebar.Item 
            icon={<MdOutlineHome />}
            label='Home'
            active
          />
          <Sidebar.Item 
            icon={<MdOutlineDashboard />}
            label='Dashboard'
            />
          <Sidebar.Dropdown 
            icon={<MdOutlineCreateNewFolder />}
            title='Create'
            openId='create'
            options={[
              { label: 'Folder' },
              { label: 'Document' },
              { label: 'Project' },
            ]}
          />
          <Sidebar.Dropdown 
            icon={<MdOutlineChecklist />}
            title='Todo-Lists'
            openId='todo'
            options={[
              { label: 'Work' },
              { label: 'Private' },
              { label: 'Gardening' },
              { label: 'School' }
            ]}
          />
          <Sidebar.Item 
            icon={<MdOutlineCalendarMonth />}
            label='Calendar'
          />
          <Sidebar.Item 
            icon={<MdPersonOutline />}
            label='Profile'
          />
        </Sidebar.Root>
        <Sidebar.Main
          defaultToolbarPadding
          defaultContentPadding
          fixedHeaderOnlyOnMobile={
            <Sidebar.Toolbar />
          }
        >
          <PageData />
        </Sidebar.Main>
      </>
    )
  },
};