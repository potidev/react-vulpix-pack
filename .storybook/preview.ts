import type { Preview } from "@storybook/react";
import "./global.scss";
import "../src/styles/css/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
