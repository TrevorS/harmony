module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "react/prop-types": ["error", { "skipUndeclared": true }]
    },
    "env": {
      "browser": true,
      "jest": true
    }
};
