import { FileDb } from "../../../data-access";

import makeCreateFile from "./create-file";
import makeGetAllFiles from "./get-all-files";

const createFile = makeCreateFile({
  fileDb: FileDb,
});

const getAllFiles = makeGetAllFiles({
  fileDb: FileDb,
});

export { createFile, getAllFiles };
