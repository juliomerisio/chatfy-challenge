module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".tsx"] }],
    "import/prefer-default-export": "off",
    "react/forbid-prop-types": "off",
    "no-param-reassign": "off",
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: ['**/.storybook/**', '**/stories/**']
      }]
  },
};
