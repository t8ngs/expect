# @t8ngs/expect
> Biblioteca de asserções baseada no jest-expect

[![github-actions-image]][github-actions-url] [![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

Uma biblioteca de asserções construída sobre o [jest-expect](https://jestjs.io/docs/expect).

## Documentação
Consulte a [documentação completa da API](https://t8ngs.dev/docs/plugins/expect).


## Instalação
Instale o pacote via npm:

```sh
npm i @t8ngs/expect
```

```sh
yarn add @t8ngs/expect
```

## Uso
Você pode utilizar o pacote de asserções com o @t8ngs/runner da seguinte forma:


```ts
import { expect } from '@t8ngs/expect'
import { configure } from '@t8ngs/runner'

configure({
  plugins: [expect()]
})
```
Após configurar, você terá acesso à propriedade expect no contexto do teste:

```ts
test('test title', ({ expect }) => {
  expect(100).toBeWithinRange(90, 110)
})
```

[github-actions-url]: https://github.com/t8ngs/expect/actions/workflows/checks.yml "github-actions"

[github-actions-image]: https://img.shields.io/github/actions/workflow/status/t8ngs/expect/checks.yml?style=for-the-badge

[npm-image]: https://img.shields.io/npm/v/@t8ngs/expect.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@t8ngs/expect "npm"

[license-image]: https://img.shields.io/npm/l/@t8ngs/expect?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
