module.exports = {
  stories: ['../stories/*.(ts|tsx)', '../stories/**/*.(ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader')
        },
        {
          loader: require.resolve('react-docgen-typescript-loader')
        }
      ]
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  }
}
