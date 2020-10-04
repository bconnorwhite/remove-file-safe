import { beforeEach, test } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { removeFile } from "../source";


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

test("remove", async () => {
  return removeFile("/test/note.md").then((success) => {
    expect(success).toBe(true);
  });
});

test("remove no exists", async () => {
  return removeFile("/test/note2.md").then((success) => {
    expect(success).toBe(true);
  });
});

test("remove no access", async () => {
  return removeFile("/no-access/b").then((success) => {
    expect(success).toBe(undefined);
  });
});

test("remove dir", async () => {
  return removeFile("/test/a").then((success) => {
    expect(success).toBe(false);
  });
});

