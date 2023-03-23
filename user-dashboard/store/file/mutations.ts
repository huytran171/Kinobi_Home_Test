import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { FileState } from ".";

const mutations: MutationTree<FileState> = {
  [MutationTypes.SET_FILES](
    state,
    { data }: { data: Record<string, unknown>[] }
  ) {
    state.files = data;
  },
};

export default mutations;
