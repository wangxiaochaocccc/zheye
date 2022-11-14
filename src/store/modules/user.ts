interface State {
  count: number;
}
export default {
  namespaced: true,
  state: () => ({
    count: 1,
  }),
  mutations: {
    addCount(state: State) {
      state.count++;
    },
  },
};
