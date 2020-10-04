<div align="center">
  <a href="https://github.com/bconnorwhite/remove-file-safe">
    <img alt="remove-file-safe" src="assets/header.svg" />
  </a>
  <a href="https://npmjs.com/package/remove-file-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/remove-file-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/remove-file-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/remove-file-safe.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/remove-file-safe?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/remove-file-safe.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/remove-file-safe">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/remove-file-safe?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Remove files without try catch.

- Returns `true` if file no longer exists.
- Returns `false` if unable to remove file.
- Returns `undefined` on other errors (ex: permission denied) rather than throwing.

## Installation

```sh
yarn add remove-file-safe
```

```sh
npm install remove-file-safe
```

## API

```ts
import { removeFile, removeFileSync } from "remove-file-safe";

function removeFile(path: string): Promise<boolean | undefined>;

function removeFileSync(path: string): boolean | undefined;
```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/remove-file-safe.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): undefined
- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): undefined
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/remove-file-safe.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)

<br />

## Related Packages

- [fs-safe](https://www.npmjs.com/package/fs-safe): A simple fs wrapper that doesn't throw
- [read-file-safe](https://www.npmjs.com/package/remove-file-safe): Read files without try catch
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files, and parent directories if necessary
- [read-dir-safe](https://www.npmjs.com/package/read-dir-safe): Read directories recursively or non-recursively
- [write-dir-safe](https://www.npmjs.com/package/write-dir-safe): Create directories and their parents recursively
- [remove-dir-safe](https://www.npmjs.com/package/remove-dir-safe): Remove directories recursively or non-recursively
