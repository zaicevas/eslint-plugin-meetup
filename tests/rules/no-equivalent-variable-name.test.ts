import noEquivalentVariableName, { RULE_NAME } from '../../lib/rules/no-equivalent-variable-name'
import { createRuleTester } from '../test-utils'

const ruleTester = createRuleTester()

ruleTester.run(RULE_NAME, noEquivalentVariableName, {
  valid: [
    {
      code: '',
    },
  ],
  invalid: [
    {
      code: '',
      errors: [
        {
          line: 1,
          column: 1,
          messageId: 'defaultMessage',
        },
      ],
    },
  ],
})
