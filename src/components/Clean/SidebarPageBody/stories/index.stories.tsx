import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SidebarPageBodyProps } from "../types";
import { SidebarPageBody } from "../component";
import { Sidebar } from '../../Sidebar/component';
import { SidebarItem } from '../../SidebarItem/component';

import "./styles.scss";
import { MdOutlineCalendarMonth, MdOutlineChecklist, MdOutlineCreateNewFolder, MdOutlineDashboard, MdOutlineHome, MdPersonOutline } from 'react-icons/md';
import { SidebarDropdownItem } from '../../SidebarDropdownItem/component';
import { SidebarDropdown } from '../../SidebarDropdown/component';
import { PageData } from "./PageData";
import { SidebarDropdownProvider } from "../../../../contexts/Clean/SidebarDropdownProvider";
import { SidebarToolbar } from '../../SidebarToolbar/component';
import { SidebarPageMain } from "../../SidebarPageMain/component";
import { SidebarProvider } from "../../../../contexts/Clean/SidebarProvider";

const meta: Meta<SidebarPageBodyProps> = {
  title: 'components/Clean/SidebarPageBody',
  component: SidebarPageBody,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    className: "page",
  }
};

export default meta;
type Story = StoryObj<SidebarPageBodyProps>;

export const Simple: Story = {
  args: {
    children: (
      <SidebarProvider>
        <Sidebar
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
        </Sidebar>
        <SidebarPageBody>
          <PageData />
        </SidebarPageBody>
      </SidebarProvider>
    )
  },
};

export const DropdownSingleOpen: Story = {
  args: {
    children: (
      <SidebarProvider>
        <Sidebar
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
        </Sidebar>
        <SidebarPageBody>
          <PageData />
        </SidebarPageBody>
      </SidebarProvider>
    )
  },
};

export const UsingToolBar: Story = {
  args: {
    children: (
      <SidebarProvider>
        <Sidebar
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
        </Sidebar>
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
        <Sidebar
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
        </Sidebar>
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