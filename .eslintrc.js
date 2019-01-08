module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "extends": "airbnb-base",
  "rules": {
    "linebreak-style": [0],
    "comma-dangle": [0],
    "arrow-parens": [0],
    "arrow-body-style": [0],
    "max-len": [2, 180,
      {
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ]
  }
};
