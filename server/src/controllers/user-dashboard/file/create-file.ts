import { Request } from "express";
import { CreateFile } from "../../../usecases/user-dashboard/file/create-file";
import { HTTP_STATUS_CODE } from "../../../constants";

export default function makeCreateFileController({
  createFile,
}: {
  createFile: CreateFile;
}) {
  return async function createFileController(req: Request) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const { file } = req;

      const invalid_data = !file || Object.keys(file).length === 0;
      if (invalid_data) {
        throw new Error(`File does not exist`);
      }

      const payload = {
        filename: file.fieldname,
      };

      const created = await createFile({ payload });

      return {
        headers,
        statusCode: HTTP_STATUS_CODE.OK,
        body: {
          data: created,
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
