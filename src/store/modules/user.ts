import { User, stateProps } from "../index";

export default {
  namespaced: true,
  state: (): User => ({
    name: "小王",
    id: 1,
    isLogin: false,
  }),
  mutations: {
    login(state: stateProps) {
      state.user = { ...state.user, isLogin: true };
    },
  },
};
