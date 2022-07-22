import { TSESTree, ESLintUtils } from '@typescript-eslint/utils'

export const RULE_NAME = 'no-equivalent-variable-name'
export type MessageIds = 'defaultMessage'
export type Options = [{ reportedValues: Array<string> }]

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
    schema: [
      {
        type: 'object',
        properties: {
          reportedValues: {
            type: 'array',
          },
        },
      },
    ],
    fixable: 'code',
  },
  defaultOptions: [
    {
      reportedValues: [],
    },
  ],
  create(context, [{ reportedValues }]) {
    const reportVariable = (node: TSESTree.VariableDeclaration) => {
      if (node.declarations.length !== 1) return

      const [declarator] = node.declarations

      if (declarator.id.type !== TSESTree.AST_NODE_TYPES.Identifier) return

      const variableName = declarator.id.name

      if (declarator.init?.type !== TSESTree.AST_NODE_TYPES.Literal) return

      const variableValue = declarator.init?.value

      if (variableName !== variableValue) return
      if (!reportedValues.includes(variableName)) return

      context.report({
        messageId: 'defaultMessage',
        node,
        fix: fixer => {
          if (!declarator?.init) return null

          return fixer.replaceText(declarator.init, '""')
        },
      })
    }

    return {
      VariableDeclaration: reportVariable,
    }
  },
})
