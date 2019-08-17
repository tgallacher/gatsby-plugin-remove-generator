module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  env: {
    jest: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-confusing-arrow': 'off',
  },
};
