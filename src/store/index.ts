import { createStore } from "vuex";
import user from "./modules/user";

export type User = {
  name: string;
  id?: number;
  isLogin?: boolean;
};
export interface stateProps {
  user: User;
}
const store = createStore<stateProps>({
  modules: {
    user,
  },
});

export default store;
