import { beforeEach, test, expect, afterEach } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { removeFileSync } from "../source/index.js";

beforeEach(async () => {
  mock({
    [tmpdir()]: {
      tmpdir: {}
    },
    [process.cwd()]: {
      "test": {
        "a": {},
        "note.md": "hello world!"
      },
      "no-access": directory({
        mode: 0,
        items: {
          b: "no access"
        }
      })
    },
    "/unsafe": {
      file: "test"
    }
  }, {
    createCwd: false,
    createTmp: false
  });
});

afterEach(async () => {
  restore();
});

test("remove sync", () => {
  expect(removeFileSync("./test/note.md")).toBe(true);
});

test("remove no exists sync", () => {
  expect(removeFileSync("./test/note2.md")).toBe(true);
});

test("remove no access sync", () => {
  expect(removeFileSync("./no-access/b")).toBe(undefined);
});

test("remove dir sync", () => {
  expect(removeFileSync("./test/a")).toBe(false);
});

test("remove from tmpdir", () => {
  expect(removeFileSync(join(tmpdir(), "tmpfile"))).toBe(true);
});

test("remove from unsafe", () => {
  expect(removeFileSync("/unsafe/file")).toBe(undefined);
});

test("remove from unsafe", () => {
  expect(removeFileSync("/unsafe/file", { unsafe: true })).toBe(true);
});

