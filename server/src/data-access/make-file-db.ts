import mongoose from "mongoose";
import IFile from "../database/interfaces/file";
import File from "../database/entities/file";
import IFileDb from "./interfaces/file-db";

export default function makeFileDb({
  fileDbModel,
}: {
  fileDbModel: mongoose.Model<
    IFile & mongoose.Document,
    Record<string, unknown>
  >;
}): IFileDb {
  return new (class FileDb implements IFileDb {
    async getAll(): Promise<IFile[] | null> {
      const existing = await fileDbModel.find();

      if (existing.length) {
        return existing.map((file_item) => new File(file_item));
      }

      return null;
    }

    async insert(payload: Record<string, unknown>): Promise<IFile | null> {
      const inserted = await fileDbModel.create(payload);

      if (inserted) {
        return new File(inserted);
      }

      return null;
    }
  })();
}
