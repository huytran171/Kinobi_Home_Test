export default interface IFile {
  _id: string;
  file: Record<string, unknown>;
  created_at: Date;
}
