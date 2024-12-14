import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { LoaderOverlayProvider, useLoaderOverlay } from './';
import { Button, Spinner, SpinnerProps } from "../../components";

const meta: Meta<SpinnerProps> = {
  title: 'Shadcn UI/Modal/LoaderOverlay',
  component: Spinner,
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
  argTypes: {
    size: {
      control: "select",
      options: [
        "small",
        "regular",
        "medium",
        "large",
      ],
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SpinnerProps>;

const LoaderStory: React.FC<{ spinnerProps: SpinnerProps }> = ({ spinnerProps }) => {
  const { showLoaderOverlay } = useLoaderOverlay();

  const handleShowLoader = () => {
    showLoaderOverlay(true, spinnerProps);
    setTimeout(() => showLoaderOverlay(false), 5000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Button
        onClick={handleShowLoader}
      >
        Show Loader
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: (args) => (
    <LoaderOverlayProvider>
      <LoaderStory spinnerProps={args} />
    </LoaderOverlayProvider>
  ),
};
