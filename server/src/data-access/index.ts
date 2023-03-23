import makeFileDb from "./make-file-db";
import { FileModel } from "../database/models";

const FileDb = makeFileDb({ fileDbModel: FileModel });

export default Object.freeze({
  FileDb,
});

export { FileDb };
