import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { ConfirmationDialogProvider, useConfirmationDialog, ConfirmationDialogParams, ConfirmationDialogContext } from '.';
import { AlertDialog, Button } from "../../components";

const meta: Meta<ConfirmationDialogParams> = {
  title: 'Shadcn UI/Modal/ConfirmationDialog',
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
  argTypes: {
  },
  args: { 
  },
  decorators: (Story) => {
    return (
      <ConfirmationDialogProvider>
        <Story />
      </ConfirmationDialogProvider>
    )
  }
};

export default meta;
type Story = StoryObj<ConfirmationDialogParams>;

export const Default: Story = {
  render: () => {
    const { showConfirmationDialog } = useConfirmationDialog();

    const onClick = () => {
      showConfirmationDialog(true, { 
        title: "Are you absolutely sure?", 
        description: "This action cannot be undone. This will permanently delete your account and remove your data from our servers.", 
        variant: "destructive",
        onClickConfirm: ({ closeDialog, setLoading }) => {
          setLoading(true);
          setTimeout(() => {
            closeDialog();
          }, 3000)
        }
      })
    }

    return (
      <div>
        <Button onClick={onClick}>Show dialog</Button>
      </div>
    )
  }
};