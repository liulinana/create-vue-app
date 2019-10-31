module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
      [
          "import",
        {
            "libraryName": "view-design",
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
