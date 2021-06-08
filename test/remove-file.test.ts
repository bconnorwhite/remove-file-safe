import { beforeEach, test } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { tmpdir } from "os";
import { join } from "path";
import { removeFile } from "../source";

beforeEach(async () => {
  mock({
    [tmpdir()]: {
      tmpfile: "test"
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

test("remove", async () => {
  return removeFile("./test/note.md").then((success) => {
    expect(success).toBe(true);
  });
});

test("remove no exists", async () => {
  return removeFile("./test/note2.md").then((success) => {
    expect(success).toBe(true);
  });
});

test("remove no access", async () => {
  return removeFile("./no-access/b").then((success) => {
    expect(success).toBe(undefined);
  });
});

test("remove dir", async () => {
  return removeFile("./test/a").then((success) => {
    expect(success).toBe(false);
  });
});

test("remove from tmpdir", async () => {
  return removeFile(join(tmpdir(), "tmpfile")).then((success) => {
    expect(success).toBe(true);
  });
});

test("remove from unsafe", async () => {
  return removeFile("/unsafe/file").then((success) => {
    expect(success).toBe(undefined);
  });
});

test("remove from unsafe", async () => {
  return removeFile("/unsafe/file", { unsafe: true }).then((success) => {
    expect(success).toBe(true);
  });
});

