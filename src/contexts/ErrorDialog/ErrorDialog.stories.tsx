import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { ErrorDialogProvider, useErrorDialog, ErrorDialogParams } from '.';
import { Button } from "../../components";

const meta: Meta<ErrorDialogParams> = {
  title: 'Modal/ErrorDialog',
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
      <ErrorDialogProvider>
        <Story />
      </ErrorDialogProvider>
    )
  }
};

export default meta;
type Story = StoryObj<ErrorDialogParams>;

export const Default: Story = {
  render: () => {
    const { showErrorDialog } = useErrorDialog();

    const onClick = () => {
      showErrorDialog(true, { 
        title: "Ops... Ocorreu um erro", 
        description: "Ocorreu um erro ao tentar realizar a operação", 
        variant: "destructive",
        buttonTitle: "Tentar novamente",
        onClickButton: ({ closeDialog, setLoading }) => {
          setLoading(true);
          setTimeout(() => {
            closeDialog();
          }, 3000)
        }
      })
    }

    return (
      <div>
        <Button onClick={onClick}>Submit</Button>
      </div>
    )
  }
};