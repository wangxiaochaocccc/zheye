import { createStore } from "vuex";
import user from "./modules/user";
export interface stateProps {
  user: {
    name: string;
    id?: number;
    isLogin?: boolean;
  };
}
const store = createStore({
  modules: {
    user,
  },
});

export default store;
