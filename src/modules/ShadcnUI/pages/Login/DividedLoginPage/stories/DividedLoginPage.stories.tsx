import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeft } from "lucide-react"

import { DividedLoginPage, DividedLoginPageProps } from "..";
import { LoginContentExemple } from "./LoginContentExemple";

const meta: Meta<DividedLoginPageProps> = {
  title: 'Shadcn UI/Pages/Login/DividedLoginPage',
  component: DividedLoginPage,
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
  tags: ['autodocs'],
  argTypes: {
  },
  args: { 
    logoTitle: "Vulpix Pack",
    caption: `“This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”`,
    logoSrc: "/imgs/logo.png",
    subCaption: "Sofia Davis",
    logoClassName: "h-9 w-9 object-contain"
  },
  decorators: (Story) => {
    return (
      <div className="flex flex-row justify-center items-center w-screen">
        <Story />
      </div>
    )
  }
};

export default meta;
type Story = StoryObj<DividedLoginPageProps>;

export const Login: Story = {
  args: {
    children: <LoginContentExemple />
  },
};
