# eslint-meetup

## Installation

Install deps:

```sh
pnpm i
```

`npm` and `yarn` should technically work, but I haven't tried.

## Usage

Add the plugin and a rule into `.eslintrc.js`. Example:

```js
// .eslintrc.js
module.exports = {
  extends: ['airbnb'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['meetup'],
      rules: {
        'meetup/no-equivalent-variable-name': 'error',
      },
    },
  ],
}
```

## Testing changes locally

1. Make changes
2. Run `pnpm build`
3. Run `pnpm pack`
4. Remove `eslint-plugin-meetup` from target project package.json
5. In target project run `pnpm add path-to-eslint-plugin-meetup/eslint-plugin-meetup-X.Y.Z.tgz`
6. Repeat 1-5

