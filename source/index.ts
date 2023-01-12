import { promises, unlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import isPathInside from "is-path-inside";

export type Options = {
  /**
   * Allow removals outside of current working directory, or OS temp directory. Default: `false`
   */
  unsafe?: boolean;
};

function handleError(err: any) {
  if(err.code === "ENOENT") {
    return true;
  } else if(err.code === "EPERM") {
    return false;
  } else {
    return undefined;
  }
}

function validatePath(path: string, options: Options) {
  if(options.unsafe) {
    return true;
  } else {
    return isPathInside(path, process.cwd()) || isPathInside(path, tmpdir());
  }
}

export async function removeFile(path: string, options: Options = {}) {
  if(validatePath(path, options)) {
    return promises.unlink(path).then(() => {
      return true;
    }).catch((err) => {
      return handleError(err);
    });
  } else {
    return undefined;
  }
}

export function removeFileSync(path: string, options: Options = {}) {
  if(validatePath(path, options)) {
    try {
      unlinkSync(path);
      return true;
    } catch(err) {
      return handleError(err);
    }
  } else {
    return undefined;
  }
}
