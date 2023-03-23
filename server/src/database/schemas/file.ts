import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fileSchema = new Schema({
  meta: { type: Object },
  created_at: { type: Date, default: Date.now },
});

fileSchema.index({ created_at: -1 });

export default fileSchema;
