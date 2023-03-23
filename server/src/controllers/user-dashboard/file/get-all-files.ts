import { Request } from "express";
import { GetAllFiles } from "../../../usecases/user-dashboard/file/get-all-files";
import { HTTP_STATUS_CODE } from "../../../constants";

export default function makeGetAllFilesController({
  getAllFiles,
}: {
  getAllFiles: GetAllFiles;
}) {
  return async function getAllFilesController(req: Request) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const existing = await getAllFiles();

      return {
        headers,
        statusCode: HTTP_STATUS_CODE.OK,
        body: {
          data: existing,
        },
      };
    } catch (error) {
      throw {
        headers,
        statusCode: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
        body: {
          data: error.message,
        },
      };
    }
  };
}
