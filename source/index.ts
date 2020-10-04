import { promises, unlinkSync } from "fs";

function handleError(err: any) {
  if(err.code === "ENOENT") {
    return true;
  } else if(err.code === "EPERM") {
    return false;
  } else {
    return undefined;
  }
}

export async function removeFile(path: string) {
  return promises.unlink(path).then(() => {
    return true;
  }).catch((err) => {
    return handleError(err);
  });
}

export function removeFileSync(path: string) {
  try {
    unlinkSync(path);
    return true;
  } catch(err) {
    return handleError(err);
  }
}
