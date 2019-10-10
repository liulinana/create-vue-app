module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
      [
          "import",
        {
            "libraryName": "iview",
            "style": true
        }
      ],
      [
          "component",
          {
              "libraryName": "element-ui",
              "styleLibraryName": "theme-chalk"
          }
      ]
  ]
};
