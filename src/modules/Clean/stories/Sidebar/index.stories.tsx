import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarPage } from "../../components/Sidebar/SidebarPage/component";

import { MdOutlineCalendarMonth, MdOutlineChecklist, MdOutlineCreateNewFolder, MdOutlineDashboard, MdOutlineHome, MdPersonOutline } from 'react-icons/md';
import { SidebarContainer } from '../../components/Sidebar/SidebarContainer/component';
import { SidebarDropdown } from '../../components/Sidebar/SidebarDropdown/component';
import { SidebarItem } from '../../components/Sidebar/SidebarItem/component';
import { SidebarToolbar } from '../../components/Sidebar/SidebarToolbar/component';
import { SidebarPageMain } from "../../components/Sidebar/SidebarPageMain/component";
import { SidebarLogo } from "../../components/Sidebar/SidebarLogo/component";
import { SidebarDropdownProvider } from "../../contexts/SidebarDropdownProvider";
import { SidebarProvider } from "../../contexts/SidebarProvider";

import { PageData } from "./PageData";
import "./styles.scss";

const meta: Meta<any> = {
  title: 'Clean/Sidebar',
  component: SidebarPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    className: "page",
  }
};

export default meta;
type Story = StoryObj<any>;

export const Simple: Story = {
  args: {
    children: (
      <SidebarProvider>
        <SidebarContainer
          title='Sidebar'
        >
          <SidebarItem 
            icon={<MdOutlineHome />}
            label='Home'
            active
          />
          <SidebarItem 
            icon={<MdOutlineDashboard />}
            label='Dashboard'
          />
          <SidebarDropdown 
            icon={<MdOutlineCreateNewFolder />}
            title='Create'
            options={[
              { label: 'Folder' },
              { label: 'Document' },
              { label: 'Project' },
            ]}
          />
          <SidebarDropdown 
            icon={<MdOutlineChecklist />}
            title='Todo-Lists'
            options={[
              { label: 'Work' },
              { label: 'Private' },
              { label: 'Gardening' },
              { label: 'School' }
            ]}
          />
          <SidebarItem 
            icon={<MdOutlineCalendarMonth />}
            label='Calendar'
          />
          <SidebarItem 
            icon={<MdPersonOutline />}
            label='Profile'
          />
        </SidebarContainer>
        <SidebarPage>
          <PageData />
        </SidebarPage>
      </SidebarProvider>
    )
  },
};

export const DropdownSingleOpen: Story = {
  args: {
    children: (
      <SidebarProvider>
        <SidebarContainer
          title='Sidebar'
        >
          <SidebarDropdownProvider singleOpen>
            <SidebarItem 
              icon={<MdOutlineHome />}
              label='Home'
              active
              />
            <SidebarItem 
              icon={<MdOutlineDashboard />}
              label='Dashboard'
              />
            <SidebarDropdown 
              icon={<MdOutlineCreateNewFolder />}
              title='Create'
              openId='create'
              options={[
                { label: 'Folder' },
                { label: 'Document' },
                { label: 'Project' },
              ]}
              />
            <SidebarDropdown 
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
            <SidebarItem 
              icon={<MdOutlineCalendarMonth />}
              label='Calendar'
            />
            <SidebarItem 
              icon={<MdPersonOutline />}
              label='Profile'
            />
          </SidebarDropdownProvider>
        </SidebarContainer>
        <SidebarPage>
          <PageData />
        </SidebarPage>
      </SidebarProvider>
    )
  },
};

export const UsingToolBar: Story = {
  args: {
    children: (
      <SidebarProvider>
        <SidebarContainer
          title='Sidebar'
          usingToolbar
        >
          <SidebarItem 
            icon={<MdOutlineHome />}
            label='Home'
            active
          />
          <SidebarItem 
            icon={<MdOutlineDashboard />}
            label='Dashboard'
            />
          <SidebarDropdown 
            icon={<MdOutlineCreateNewFolder />}
            title='Create'
            openId='create'
            options={[
              { label: 'Folder' },
              { label: 'Document' },
              { label: 'Project' },
            ]}
            />
          <SidebarDropdown 
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
          <SidebarItem 
            icon={<MdOutlineCalendarMonth />}
            label='Calendar'
          />
          <SidebarItem 
            icon={<MdPersonOutline />}
            label='Profile'
          />
        </SidebarContainer>
        <SidebarPageMain
          defaultToolbarPadding
          fixedHeader={
            <SidebarToolbar />
          }
        >
          <PageData />
        </SidebarPageMain>
      </SidebarProvider>
    )
  },
};

export const UsingToolBarOnlyOnMobile: Story = {
  args: {
    children: (
      <SidebarProvider>
        <SidebarContainer
          logo={<SidebarLogo src="/assets/imgs/logo.png" />}
          title='Vulpix'
        >
          <SidebarItem 
            icon={<MdOutlineHome />}
            label='Home'
            active
          />
          <SidebarItem 
            icon={<MdOutlineDashboard />}
            label='Dashboard'
            />
          <SidebarDropdown 
            icon={<MdOutlineCreateNewFolder />}
            title='Create'
            openId='create'
            options={[
              { label: 'Folder' },
              { label: 'Document' },
              { label: 'Project' },
            ]}
          />
          <SidebarDropdown 
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
          <SidebarItem 
            icon={<MdOutlineCalendarMonth />}
            label='Calendar'
          />
          <SidebarItem 
            icon={<MdPersonOutline />}
            label='Profile'
          />
        </SidebarContainer>
        <SidebarPageMain
          fixedHeaderOnlyOnMobile={
            <SidebarToolbar />
          }
        >
          <PageData />
        </SidebarPageMain>
      </SidebarProvider>
    )
  },
};