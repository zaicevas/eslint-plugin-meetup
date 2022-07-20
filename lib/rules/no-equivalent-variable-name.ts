import { TSESTree, ESLintUtils } from '@typescript-eslint/utils'

export const RULE_NAME = 'no-equivalent-variable-name'
export type MessageIds = 'defaultMessage'
export type Options = []

const createRule = ESLintUtils.RuleCreator(() => 'https://github.com/zaicevas/eslint-plugin-meetup')

export default createRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Reports variables that are initialized with the equivalent string value as the variable name',
      recommended: 'error',
    },
    messages: {
      defaultMessage: 'String value of the variable cannot be equivalent to variable name',
    },
    schema: [],
    fixable: 'code',
  },
  defaultOptions: [],
  create(context) {
    const reportVariable = (node: TSESTree.Identifier) => {
      context.report({
        messageId: 'defaultMessage',
        node,
      })
    }

    return {
      Identifier: reportVariable,
    }
  },
})
