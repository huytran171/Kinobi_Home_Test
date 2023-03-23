import IFileDb from "../../../data-access/interfaces/file-db";
import IFile from "../../../database/interfaces/file";

export type CreateFile = ({
  fileDb,
}: {
  fileDb: IFileDb;
}) => Promise<IFile | null>;

export default function makeCreateFile({
  fileDb,
}: {
  fileDb: IFileDb;
}): CreateFile {
  return async function createFile(payload: Record<string, unknown>) {
    const uploaded = await fileDb.insert(payload);
    return uploaded;
  };
}
