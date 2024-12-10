import React from "react";

import type { Preview } from "@storybook/react";
import "./global.scss";
import "../src/styles/css/global.css"
import { ThemeProvider } from "next-themes";

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
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
