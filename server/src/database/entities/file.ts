import IFile from "../interfaces/file";

export default class File implements IFile {
  public readonly _id: string;
  public readonly meta: Record<string, unknown>;

  constructor({ _id, meta }) {
    this._id = _id;
    this.meta = meta;
  }
}
