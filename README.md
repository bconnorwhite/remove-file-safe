<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>remove-file-safe</h1>
  <a href="https://npmjs.com/package/remove-file-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/remove-file-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/remove-file-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/remove-file-safe.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/remove-file-safe?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/remove-file-safe.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Remove files without try catch.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/remove-file-safe">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/remove-file-safe?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

> Remove files without try catch.
- Returns `true` if file no longer exists.
- Returns `false` if unable to remove file.
- Returns `undefined` on other errors (ex: permission denied) rather than throwing.

Unless the `unsafe` flag is set, only files inside the current working directory or OS temp directory will be removed.

## Installation

```sh
yarn add remove-file-safe
```

```sh
npm install remove-file-safe
```

```sh
pnpm add remove-file-safe
```

## Usage

```ts
import { removeFile, removeFileSync, Options } from "remove-file-safe";

function removeFile(path: string, options?: Options): Promise<boolean | undefined>;

function removeFileSync(path: string, options?: Options): boolean | undefined;

type Options = {
  /**
   * Allow removals outside of current working directory, or OS temp directory. Default: `false`
   */
  unsafe?: boolean;
};
```
<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/remove-file-safe?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/remove-file-safe.svg"></a></h2>

- [is-path-inside](https://www.npmjs.com/package/is-path-inside): Check if a path is inside another path

<br />

<h3>Dev Dependencies</h3>

- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js
- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/remove-file-safe.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->

<br />

## Related Packages

- [fs-safe](https://www.npmjs.com/package/fs-safe): A simple fs wrapper that doesn't throw
- [read-file-safe](https://www.npmjs.com/package/remove-file-safe): Read files without try catch
- [write-file-safe](https://www.npmjs.com/package/write-file-safe): Write files, and parent directories if necessary
- [read-dir-safe](https://www.npmjs.com/package/read-dir-safe): Read directories recursively or non-recursively
- [write-dir-safe](https://www.npmjs.com/package/write-dir-safe): Create directories and their parents recursively
- [remove-dir-safe](https://www.npmjs.com/package/remove-dir-safe): Remove directories recursively or non-recursively
