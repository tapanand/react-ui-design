const { transform } = require('@divriots/style-dictionary-to-figma');


module.exports = {
  source: [
    "tokens/**/*.json"
  ],
  format: {
    // Define a custom format using our transformer
    figmaTokensPluginJson: ({ dictionary }) => {

      // Transform the tokens from the style dictionary instance
      const parsedTokens = transform(dictionary.tokens);
      // Turn the object into JSON, the "2" third param is used to format indents with 2 spaces
      return JSON.stringify(parsedTokens,
        null,
        2);
    }
  },
  platforms: {
    css: {
      buildPath: 'build/',

      transformGroup: "css",
      files: [
        {
          "format": "css/variables",
          "destination": "css/variables.css"
        }
      ]
    },
    "scss": {
      buildPath: 'build/',

      "transformGroup": "scss",
      "files": [
        {
          "format": "scss/variables",
          "destination": "scss/variables.scss"
        }
      ]
    },
    "js": {
      buildPath: 'build/',

      "transformGroup": "js",
      "files": [
        {
          "format": "javascript/es6",
          "destination": "js/variables.js"
        },
        {
          "format": "javascript/umd",
          "destination": "js/variables.umd.js"
        },
        {
          "format": "typescript/es6-declarations",
          "destination": "js/variables.d.ts"
        },
      ]
    },
    json: {
      transformGroup: 'js',
      buildPath: 'build/',
      files: [
        {
          destination: 'figma/figma-tokens.json',
          format: 'figmaTokensPluginJson',
        },
      ],
    },
  }
}
