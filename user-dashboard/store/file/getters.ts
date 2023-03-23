import { GetterTree } from "vuex";
import { FileState } from ".";
import { RootState } from "..";

export const getters: GetterTree<FileState, RootState> = {
  prefix() {
    return "/file";
  },
  files: (state) => state.files,
};

export default getters;
