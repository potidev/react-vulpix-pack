import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { MessageDialogParams, MessageDialogProvider, useMessageDialog } from '.';
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

export const Default: Story = {
  render: () => {
    const { showMessageDialog } = useMessageDialog();

    const onClick = () => {
      showMessageDialog(true, { 
        title: "Alerta", 
        description: "Seu crédito para usar o serviço está está acabando.", 
        variant: "default",
        primaryButtonTitle: "Comprar",
        onClickPrimaryButton: ({ closeDialog, setLoading }) => {
          setLoading(true);
          setTimeout(() => {
            closeDialog();
          }, 3000)
        }
      })
    }

    return (
      <div>
        <Button onClick={onClick} variant="default">Submit</Button>
      </div>
    )
  }
};


export const Destructive: Story = {
  render: () => {
    const { showMessageDialog } = useMessageDialog();

    const onClick = () => {
      showMessageDialog(true, { 
        title: "Ops... Ocorreu um erro", 
        description: "Ocorreu um erro ao tentar realizar a operação", 
        variant: "destructive",
        primaryButtonTitle: "Tentar novamente",
        onClickPrimaryButton: ({ closeDialog, setLoading }) => {
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
        primaryButtonTitle: "Avançar",
        onClickPrimaryButton: ({ closeDialog, setLoading }) => {
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
        primaryButtonTitle: "Fechar",
        onClickPrimaryButton: ({ closeDialog, setLoading }) => {
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