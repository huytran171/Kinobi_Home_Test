import { ActionTree, MutationTree, GetterTree } from "vuex";

export const state = () => ({ test: 0 });

export type RootState = ReturnType<typeof state>;

export const actions: ActionTree<RootState, RootState> = {};

export const mutations: MutationTree<RootState> = {};

export const getters: GetterTree<RootState, RootState> = {};
