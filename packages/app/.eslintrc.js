module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
    'no-empty-pattern': 'off',
    'no-extra-boolean-cast': 'off',
    'linebreak-style': ['error', 'unix'],
    'react/jsx-no-bind': ['error', { ignoreRefs: true, allowFunctions: true }],
    'react/jsx-no-duplicate-props': 'error',
    'react/self-closing-comp': 'error',
    'react/prefer-es6-class': 'error',
    'react/no-string-refs': 'error',
    'react/require-render-return': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
};
