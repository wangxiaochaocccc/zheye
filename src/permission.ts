import router from "@/router";
import store from "@/store";

router.beforeEach((to, from, next) => {
  console.log(11223, to.meta.redirectToIndex, store.state.user.isLogin);
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    console.log(11221);
    next("/login");
  } else if (to.meta.redirectToIndex && store.state.user.isLogin) {
    console.log(11222);

    next("/");
  } else {
    next();
  }
});
