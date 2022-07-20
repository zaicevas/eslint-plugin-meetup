import { ESLintUtils, TSESLint } from '@typescript-eslint/utils'

export const createRuleTester = (
  parserOptions: Partial<TSESLint.ParserOptions> = {},
): TSESLint.RuleTester => {
  return new ESLintUtils.RuleTester({
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      ...parserOptions,
    },
  })
}
