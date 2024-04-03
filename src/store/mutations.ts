import { MutationTree } from "vuex";
import { State } from "./state";
import { i18n } from '@/lang'
export enum Mutation {
  TOOGLE_LOADING = "TOOGLE_LOADING",
  SET_LANGUAGE = "SET_LANGUAGE",
  SET_USERINFO = "SET_USERINFO"
}

export type Mutations<S = State> = {
  [Mutation.TOOGLE_LOADING](state: S, payload: boolean): void;
  [Mutation.SET_LANGUAGE](state: S, payload: string): void;
  [Mutation.SET_USERINFO](state: S, payload: object): void;
};



export const mutations: MutationTree<State> & Mutations = {
  [Mutation.TOOGLE_LOADING](state: State, payload: boolean) {
    state.loading = payload;
  },
  [Mutation.SET_LANGUAGE](state: State, payload: string) {
    const { locale }: any = i18n.global
    locale.value = payload
    state.language = payload;
  },
  [Mutation.SET_USERINFO](state: State, payload: object) {
    state.userInfo = payload;
  },
};
