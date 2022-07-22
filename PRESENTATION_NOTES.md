# Presentation notes

Welcome :)

Checklist:

- [ ] Make sure everybody can hear me
- [ ] Zoom in
- [ ] Presentation format (no slides)
- [ ] I will share link to this repository

## `whoami`

- Frontend Developer at Vinted
- Play [accordion](https://scontent.fvno1-1.fna.fbcdn.net/v/t31.18172-8/457339_452856444780257_1400959062_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=de6eea&_nc_ohc=uJfcTrlbO-UAX8xl9_2&_nc_oc=AQmXOwANLEbNZGFWo0o5ZWnVVrBnz6X1F60YQGenLzs0XakDL6WS4dsKKQflwEBaIZU&_nc_ht=scontent.fvno1-1.fna&oh=00_AT__uderyrNDEybVtv4aXkyfyx_gJ_6HMfK_hPlRP5Dq2A&oe=62FE73F3)
- Interested in ESLint plugins, contributing to open-source and internal plugins.
  - If you are using https://testing-library.com/, you will love [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)!
  - New course coming up on mastering `testing-library` from the perspective of ESLint from [https://github.com/Belco90](Belco90)

### Questions to audience

How many of you have:

- tweaked an ESLint configuration (`.eslintrc.js` / `.eslintrc`)
- implemented/changed a custom ESLint rule

https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/rules/no-wait-for-side-effects.ts

## Goal

After the presentation you should be able to:

- Understand how ESLint rules are implemented
- Know where to begin

## Table of contents

1. Theory
2. Live coding
3. Q&A

## 1. Theory

* AST, [AST Explorer](https://astexplorer.net/)
* ESLint API:
  * https://eslint.org/docs/latest/developer-guide/working-with-rules
  * https://eslint.org/docs/latest/developer-guide/selectors

## 2. Live coding

### `no-equivalent-variable-name`

Declared variable string value cannot be equivalent to variable name

### 1st iteration

`'meetup/no-equivalent-variable-name': 'error'`

**BAD:**
```jsx
const foo = 'foo'
let foo = 'foo'
var foo = 'foo'
```

**GOOD:**
```jsx
const foo = 'Foo'
let foo = 'not foo'
var foo = 'hello'
```

### 2nd iteration (options)

An option to provide variable names that will be reported

`'meetup/no-equivalent-variable-name': ['error', { reportedValues: ['foo'] }]`

**BAD:**
```jsx
const foo = 'foo'
let foo = 'foo'
var foo = 'foo'
```

**GOOD:**
```jsx
const bar = 'bar'
let foo = 'not foo'
var foo = 'hello'
```

Schema boilerplate:
```jsx
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
```

### 3rd iteration (auto fix)

Fix variable value to an empty string

`'meetup/no-equivalent-variable-name': ['error', { reportedValues: ['foo'] }]`

```jsx
// OLD
const foo = 'foo'

// NEW
const foo = ''
```

## Quick tips

1. Write plenty of tests and enforce test coverage
2. Write in TypeScript
