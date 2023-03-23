import IFileDb from "../../../data-access/interfaces/file-db";
import IFile from "../../../database/interfaces/file";

export type GetAllFiles = ({
  fileDb,
}: {
  fileDb: IFileDb;
}) => Promise<IFile[] | null>;

export default function makeGetAllFiles({
  fileDb,
}: {
  fileDb: IFileDb;
}): GetAllFiles {
  return async function getAllFiles() {
    const existing = await fileDb.getAll();
    return existing;
  };
}
