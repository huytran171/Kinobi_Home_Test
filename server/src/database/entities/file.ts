import IFile from "../interfaces/file";

export default class File implements IFile {
  public readonly _id: string;
  public readonly file: Record<string, unknown>;
  public readonly created_at: Date;

  constructor({
    _id,
    file,
    created_at,
  }: {
    _id: string;
    file: any;
    created_at: Date;
  }) {
    this._id = _id;
    this.file = file;
    this.created_at = created_at;
  }
}
