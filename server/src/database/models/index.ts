import mongoose from "mongoose";
import IFile from "../interfaces/file";
import fileSchema from "../schemas/file";

type IFileModel = IFile & mongoose.Document;

const FileModel = mongoose.model<IFileModel>("File", fileSchema);

export { FileModel };
