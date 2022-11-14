import { stateProps } from "../index";

export default {
  namespaced: true,
  state: () => ({
    user: {
      name: "小王",
      id: 1,
      isLogin: false,
    },
  }),
  mutations: {
    login(state: stateProps) {
      state.user = { ...state.user, isLogin: true };
    },
  },
};
