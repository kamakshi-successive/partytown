// webpack.config.js
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const partytown = require('@builder.io/partytown/utils');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: partytown.libDirPath(),
          to: path.join(__dirname, 'public', '~partytown'),
        },
      ],
    }),
  ],
};