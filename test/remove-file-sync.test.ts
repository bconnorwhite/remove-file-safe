import { beforeEach, test } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { removeFileSync } from "../source";


beforeEach(async () => {
  mock({
    "/test": {
      "a": {},
      "note.md": "hello world!"
    },
    "/no-access": directory({
      mode: 0,
      items: {
        b: "no access"
      }
    })
  })
});

afterEach(async () => {
  restore();
});

test("remove sync", () => {
  expect(removeFileSync("/test/note.md")).toBe(true);
});

test("remove no exists sync", () => {
  expect(removeFileSync("/test/note2.md")).toBe(true);
});

test("remove no access sync", () => {
  expect(removeFileSync("/no-access/b")).toBe(undefined);
});

test("remove dir sync", () => {
  expect(removeFileSync("/test/a")).toBe(false);
});

