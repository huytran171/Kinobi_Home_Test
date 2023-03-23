import mongoose from "mongoose";
import IFile from "../interfaces/file";
import fileSchema from "../schemas/file";

type IFileModel = IFile & mongoose.Document;

const UserModel = mongoose.model<IFileModel>("File", fileSchema);

export default Object.freeze({
  UserModel,
});

export { UserModel };
