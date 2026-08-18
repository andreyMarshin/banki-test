/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: ['dist/**', 'node_modules/**'],
  rules: {
    'padding-line-between-statements': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      { blankLine: 'always', prev: '*', next: '*' },
      { blankLine: 'any', prev: 'case', next: 'case' },
      { blankLine: 'any', prev: 'export', next: 'export' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'any', prev: 'expression', next: 'expression' },
      { blankLine: 'always', prev: '*', next: 'multiline-expression' },
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
      { blankLine: 'any', prev: 'singleline-const', next: 'singleline-const' },
      { blankLine: 'any', prev: 'singleline-let', next: 'singleline-let' },
      { blankLine: 'any', prev: 'singleline-var', next: 'singleline-var' },
      { blankLine: 'never', prev: '*', next: 'break' }
    ],
    'no-debugger': 'off',
    'no-irregular-whitespace': 'off',
    'no-inner-declarations': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ]
  }
}
