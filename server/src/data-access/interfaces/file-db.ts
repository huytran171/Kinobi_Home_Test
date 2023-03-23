import IFile from "../../database/interfaces/file";

export default interface IFileDb {
  getAll: () => Promise<IFile[] | null>;
  insert: (payload: Record<string, unknown>) => Promise<IFile | null>;
}
