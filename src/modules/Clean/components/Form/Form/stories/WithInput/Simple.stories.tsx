import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Render } from "./Render";
import { Form } from "../..";
import { PositionScreen } from "../../../../../stories/components/PositionScreen"

const meta: Meta<any> = {
  title: 'Clean/Form/Demo/WithInput',
  component: Form,
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
    <PositionScreen>
      <Render />
    </PositionScreen>
  ),
};
