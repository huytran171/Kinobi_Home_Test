import IFile from "../interfaces/file";

export default class File implements IFile {
  public readonly _id: string;
  public readonly meta: Record<string, unknown>;
  public readonly created_at: Date;

  constructor({ _id, meta, created_at }) {
    this._id = _id;
    this.meta = meta;
    this.created_at = created_at;
  }
}
