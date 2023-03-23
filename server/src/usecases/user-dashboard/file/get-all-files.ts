import IFileDb from "../../../data-access/interfaces/file-db";
import IFile from "../../../database/interfaces/file";

export type GetAllFiles = () => Promise<IFile[] | null>;

export default function makeGetAllFiles({
  fileDb,
}: {
  fileDb: IFileDb;
}): GetAllFiles {
  return async function getAllFiles(): Promise<IFile[] | null> {
    const existing = await fileDb.getAll();
    return existing;
  };
}
