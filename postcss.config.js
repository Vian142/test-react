module.exports = () => {
  return {
    plugins: [
      require('postcss-use')({
        modules: [
          'postcss-inline-svg',
          'postcss-font-awesome',
          'postcss-css-reset'
        ]
      }),
      require('postcss-nested'),
      require('postcss-font-awesome'),
      require('postcss-import')({
        root: __dirname,
        path: ['src/theme']

      }),
      require('postcss-cssnext')(
        { browsers: ["last 3 versions"] }
      )
    ]
  }
}