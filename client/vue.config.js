const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        'process.env.PAGE_TITLE': JSON.stringify('ChemTutor')
      })
    ]
  }
})
