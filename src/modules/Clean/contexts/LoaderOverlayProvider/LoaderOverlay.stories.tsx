import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { LoaderOverlayProvider, useLoaderOverlay } from './';
import { Spinner, SpinnerProps } from "../../components";

const meta: Meta<SpinnerProps> = {
  title: 'Clean/Modal/LoaderOverlay',
  component: Spinner,
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
};

export default meta;
type Story = StoryObj<SpinnerProps>;

const LoaderStory: React.FC<{ spinnerProps: SpinnerProps }> = ({ spinnerProps }) => {
  const { show } = useLoaderOverlay();

  const handleShowLoader = () => {
    show(true, spinnerProps);
    setTimeout(() => show(false), 5000); // Esconde o loader automaticamente após 2 segundos
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <button
        onClick={handleShowLoader}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Show Loader
      </button>
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
