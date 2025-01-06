import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { MessageDialogContext, MessageDialogParams, MessageDialogProvider, OnClickButtonParams, useMessageDialog } from '.';
import { Button } from "../../components";

const meta: Meta<MessageDialogParams> = {
  title: 'Modal/MessageDialog',
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
      <MessageDialogProvider>
        <Story />
      </MessageDialogProvider>
    )
  }
};

export default meta;
type Story = StoryObj<MessageDialogParams>;

export const Destructive: Story = {
  render: () => {
    const { showMessageDialog } = useMessageDialog();

    const onClick = () => {
      showMessageDialog(true, { 
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
        <Button onClick={onClick} variant="destructive">Submit</Button>
      </div>
    )
  }
};

export const Warning: Story = {
  render: () => { 
    const { showMessageDialog } = useMessageDialog();

    const onClick = () => {
      showMessageDialog(true, { 
        title: "Atenção!", 
        description: "Ao clicar em avançar, você concorda com os termos de uso.", 
        variant: "warning",
        buttonTitle: "Avançar",
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
        <Button onClick={onClick} variant="warning">Submit</Button>
      </div>
    )
  }
};

export const Success: Story = {
  render: () => { 
    const { showMessageDialog } = useMessageDialog();

    const onClick = () => {
      showMessageDialog(true, { 
        title: "Concluído!", 
        description: "Cadastro realizado com sucesso.", 
        variant: "success",
        buttonTitle: "Fechar",
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
        <Button onClick={onClick} variant="success">Submit</Button>
      </div>
    )
  }
};