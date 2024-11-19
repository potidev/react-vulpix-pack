const postcss = require('rollup-plugin-postcss');
const path = require('path');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: {
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
        use: [
          ['sass', { includePaths: [path.resolve(__dirname, 'src'), 'node_modules'] }],
        ],
        extract: "styles.css"
      })
    );
    return config;
  },
};