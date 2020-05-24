module.exports = {
  stories: [
    '../src/**/*.stories.(ts|tsx|js|jsx|mdx)',
    '../stories/**/*.stories.(ts|tsx|js|jsx|mdx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
  ],
  webpackFinal: async (config) => {
    // do mutation to the config

    return config;
  },
};