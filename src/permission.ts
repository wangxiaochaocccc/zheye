import router from "@/router";
import store from "@/store";

router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next("/login");
  } else if (to.meta.redirectToIndex && store.state.user.isLogin) {
    next("/");
  } else {
    next();
  }
});
