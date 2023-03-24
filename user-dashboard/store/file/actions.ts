import { ActionTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { ActionTypes } from "./action-types";
import { FileState } from ".";
import { RootState } from "..";

const actions: ActionTree<FileState, RootState> = {
  async [ActionTypes.UPLOAD]({ commit }, params = {}) {
    const data = await this.$axios.$post("/file", params);
    return data;
  },

  async [ActionTypes.GET_ALL]({ commit }) {
    const { data } = await this.$axios.$get("/file");
    commit(MutationTypes.SET_FILES, { data });
    return data;
  },
};

export default actions;
