module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "arrow-parens": 0,
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};
