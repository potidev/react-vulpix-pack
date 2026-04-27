import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Inbox, Plus } from "lucide-react";

import { Button } from "../Button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from ".";

const meta = {
  title: "Components/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "black",
      values: [
        { name: "black", value: "#000000" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
  tags: ["autodocs"],
  args: {
    className: "w-full max-w-md border",
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex min-h-[320px] w-full items-center justify-center p-4">
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Empty {...args}>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox />
          </EmptyMedia>
          <EmptyTitle>Nenhum item encontrado</EmptyTitle>
          <EmptyDescription>
            Adicione seu primeiro item para comecar a preencher esta lista.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  },
};

export const WithAction: Story = {
  render: (args) => {
    return (
      <Empty {...args}>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox />
          </EmptyMedia>
          <EmptyTitle>Sua colecao ainda esta vazia</EmptyTitle>
          <EmptyDescription>
            Crie um novo registro para visualizar conteudo nesta area.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline">
            <Plus />
            Criar item
          </Button>
        </EmptyContent>
      </Empty>
    );
  },
};
