module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index', 'unknown', 'object'],
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
  },
  overrides: [
    {
      files: ['*.test.ts'],
      plugins: ['jest'],
      rules: {
        'jest/no-test-return-statement': 'error',
        'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
        'jest/no-duplicate-hooks': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-lowercase-title': [
          'error',
          {
            ignore: ['describe'],
          },
        ],
        'jest/prefer-spy-on': 'error',
        'jest/no-if': 'error',
        'jest/expect-expect': [
          'error',
          {
            assertFunctionNames: ['expect', 'expectSaga', 'testSaga', 'waitForElementToBeRemoved'],
          },
        ],
        'jest/require-top-level-describe': 'error',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
        moduleDirectory: ['node_modules', 'lib/'],
      },
    },
  },
}
