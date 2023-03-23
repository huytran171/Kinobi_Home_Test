import makeCreateFileController from "./create-file";
import makeGetAllFilesController from "./get-all-files";

import { createFile, getAllFiles } from "../../../usecases/user-dashboard/file";

const createFileController = makeCreateFileController({ createFile });
const getAllFilesController = makeGetAllFilesController({ getAllFiles });

export { createFileController, getAllFilesController };
