<h1 align="center">
   <b>
        Keepo
   </b>
</h1>

<p align="center">A convenient way to get secrets and use .keep files in node.js.</p>
<br />

<div align="center">

[![build][build-image]](build)
[![coverage:functions][coverage:functions-image]](coverage)
[![coverage:statements][coverage:statements-image]](coverage)
[![coverage:lines][coverage:lines-image]](coverage)
[![coverage:branches][coverage:branches-image]](coverage)
[![License][license-image]][license-url]

[build-image]: https://img.shields.io/github/actions/workflow/status/arashabdighafoori/keepo-js/jest.yml?label=build&branch=main
[coverage:functions-image]: ./coverage/badge-functions.svg
[coverage:statements-image]: ./coverage/badge-statements.svg
[coverage:lines-image]: ./coverage/badge-lines.svg
[coverage:branches-image]: ./coverage/badge-branches.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/make-coverage-badge.svg

</div>

<br />

## Table of Contents

- [Features](#features)
- [Instalation](#instalation)
- [License](#license)

<br />

## Features

- Decrypt and use .keep file
- Use and manage user secrets easier

<br />

## Installation

```
npm install keepo
```

<br />

## Usage

After installation Use the snippet blow the get a secret and manage errors:

```ts
import { get as keepo, constants } from "keepo";

keepo<T>("<key>")
  .then((value) => {
    // do stuff
  })
  .catch((reason) => {
    if (reason.startsWith("<key>")) {
      // the key was not found
    } else if (reason === constants.nokeeperror) {
      // no .keep file - local or global - was found
    }
  });
```

or just:

```ts
import { get as keepo } from "keepo";

async function my_async_function() {
  const secret = await keepo<T>("key");
  // do stuff
}
```

<br />

## License

[MIT](LICENSE)
