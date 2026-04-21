import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-themes"
  ],
  "framework": "@storybook/nextjs-vite",
  async viteFinal(config) {
    return {
      ...config,
      server: {
        ...config.server,
        host: '0.0.0.0',
        hmr: {
          host: 'localhost',
        },
      },
    };
  },
};
export default config;