import { Schema } from "mongoose";
import IFile from "../interfaces/file";

const fileSchema = new Schema<IFile>({
  meta: { type: Object },
});

export default fileSchema;
