import '../src/styles/css/global.css';

import React from "react";
import { ThemeProvider } from "next-themes";
import type { Preview } from "@storybook/react";

import { Toaster } from "../src/components";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider 
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Story />
          <Toaster />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
