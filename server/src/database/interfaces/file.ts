export default interface IFile {
  _id: string;
  meta: Record<string, unknown>;
  created_at: Date;
}
