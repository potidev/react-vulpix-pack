import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { TableBody, TableCell, TableHead, TableHeader, TableRoot, TableRow } from "../../..";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { getData } from "../getData";
import { PositionScreen } from "../../../../stories/components/PositionScreen"

const meta: Meta<any> = {
  title: 'Clean/Table/Demo/CellFormatting',
  component: TableRoot,
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
  args: { 
  },
};

export default meta;
type Story = StoryObj<any>;

export const Exemple: Story = {
  render: (args) => (
    <PositionScreen style={{ width: "100%" }}>
      <DataTable columns={columns} data={getData()} />
    </PositionScreen>
  ),
};
