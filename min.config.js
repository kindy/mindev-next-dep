module.exports = {
  "style": {
    "brandColor": "#FF0077",
    "controlColor": "#FF5777",
    "mainHeadingColor": "#333333",
    "subHeadingColor": "#666666",
    "darkPromptColor": "#999999",
    "splitLineColor": "#ECECEC",
    "backgroundColour": "#EFEFEF"
  },
  "prefix": "wxc",
  "dest": "dist",
  "npm": {
    "dest": "dist/packages"
  },
  compilers: {
    babel: {
      sourceMaps: 'inline',
      presets: ['env'],
      plugins: [
        'syntax-export-extensions',
        "transform-class-properties",
        "transform-decorators-legacy",
        "transform-export-extensions",
      ]
    },
  },
  plugins: {
    filesync: [
      {
        cwd: 'src/legacy',
        from: '**/*',
        filter: /\.(wxml|json|js|wxss)$/,
        to: '',
      },
    ],
  },
};
