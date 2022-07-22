import noEquivalentVariableName, { RULE_NAME } from '../../lib/rules/no-equivalent-variable-name'
import { createRuleTester } from '../test-utils'

const ruleTester = createRuleTester()

ruleTester.run(RULE_NAME, noEquivalentVariableName, {
  valid: [
    {
      code: 'const foo = "Foo"',
      options: [{ reportedValues: ['foo'] }],
    },
    {
      code: 'let foo = "Foo"',
      options: [{ reportedValues: ['foo'] }],
    },
    {
      code: 'var foo = "Foo"',
      options: [{ reportedValues: ['foo'] }],
    },
    {
      code: 'const bar = "hello world"',
      options: [{ reportedValues: ['bar'] }],
    },
    {
      code: 'const bar = "bar"',
      options: [{ reportedValues: ['foo'] }],
    },
    {
      code: 'let bar = "bar"',
      options: [{ reportedValues: ['foo'] }],
    },
    {
      code: 'var bar = "bar"',
      options: [{ reportedValues: ['foo'] }],
    },
    {
      code: 'const bar = "bar"',
    },
    {
      code: 'let bar = "bar"',
    },
    {
      code: 'var bar = "bar"',
    },
  ],
  invalid: [
    {
      code: 'const foo = "foo"',
      errors: [
        {
          line: 1,
          column: 1,
          messageId: 'defaultMessage',
        },
      ],
      options: [{ reportedValues: ['foo'] }],
      output: 'const foo = ""',
    },
    {
      code: 'let foo = "foo"',
      errors: [
        {
          line: 1,
          column: 1,
          messageId: 'defaultMessage',
        },
      ],
      options: [{ reportedValues: ['foo'] }],
      output: 'let foo = ""',
    },
    {
      code: 'var foo = "foo"',
      errors: [
        {
          line: 1,
          column: 1,
          messageId: 'defaultMessage',
        },
      ],
      options: [{ reportedValues: ['foo'] }],
      output: 'var foo = ""',
    },
  ],
})
