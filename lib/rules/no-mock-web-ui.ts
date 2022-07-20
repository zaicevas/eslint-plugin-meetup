import { TSESTree } from '@typescript-eslint/experimental-utils'

export const RULE_NAME = 'no-mock-web-ui'
export type MessageIds = 'stop_mocking' | 'consider_stop_mocking'
export type Options = [{ isStrict: boolean }]

// TODO: implement actual "no-mock-web-ui" rule.
// currently it reports any function name for easier testing
export default createRule<Options, MessageIds>({
  name: 'no-mock-web-ui',
  meta: {
    docs: {
      description: 'Reports web-ui mocks.',
      recommended: 'error',
    },
    messages: {
      stop_mocking: 'Avoid mocking web-ui because it unnecessarily reduces confidence in tests.',
      consider_stop_mocking:
        'Consider avoiding mocking web-ui because it unnecessarily reduces confidence in tests.',
    },
    type: 'suggestion',
    schema: [
      {
        type: 'object',
        properties: {
          isStrict: {
            type: 'boolean',
          },
        },
      },
    ],
  },
  defaultOptions: [
    {
      isStrict: true,
    },
  ],
  create(context, [{ isStrict }]) {
    const reportFunctions = (node: TSESTree.FunctionDeclaration) => {
      if (!node.id?.name || !isStrict) return

      context.report({
        messageId: 'stop_mocking',
        node: node.id,
      })
    }

    return {
      FunctionDeclaration: reportFunctions,
    }
  },
})
