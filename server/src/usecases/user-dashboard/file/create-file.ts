import IFileDb from "../../../data-access/interfaces/file-db";
import IFile from "../../../database/interfaces/file";

export type CreateFile = ({
  payload,
}: {
  payload: Record<string, unknown>;
}) => Promise<IFile | null>;

export default function makeCreateFile({
  fileDb,
}: {
  fileDb: IFileDb;
}): CreateFile {
  return async function createFile({
    payload,
  }: {
    payload: Record<string, unknown>;
  }): Promise<IFile | null> {
    const uploaded = await fileDb.insert(payload);
    return uploaded;
  };
}
