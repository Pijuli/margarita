const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (baseConfig, env, defaultConfig) => {

  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
    include: path.resolve(__dirname, '../src')
  })

  defaultConfig.plugins.push(
    new CopyWebpackPlugin([{
      from: 'src/assets/fonts',
      to: 'fonts'
    }]),
    new CopyWebpackPlugin([{
      from: 'src/assets/icons',
      to: 'icons'
    }])
  )

  // Replacing the markdown one
  defaultConfig.module.rules[2] = {
    test: /\.md$/,
    use: [{
      loader: 'html-loader'
    }, {
      loader: 'highlight-loader',
    }, {
      loader: 'markdown-loader',
      options: {
        breaks: true,
        gfm: true
      }
    }],
    include: path.resolve(__dirname, '../src')
  }

  defaultConfig.resolve.alias['^'] = path.resolve(__dirname, '../.storybook')
  defaultConfig.resolve.alias['@'] = path.resolve(__dirname, '../src')

  return defaultConfig
}
