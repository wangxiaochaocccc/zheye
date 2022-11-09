<template>
  <nav class="navbar navbar-dark bg-primary mb-4">
    <div class="container justify-space-between align-center">
      <a class="navbar-brand" href="#">者也专栏</a>
      <ul v-if="!user.isLogin" class="list-inline align-center mb-0">
        <li class="list-inline-item">
          <a href="#" class="btn btn-outline-light my-2">登录</a>
        </li>
        <li class="list-inline-item">
          <a href="#" class="btn btn-outline-light my-2">注册</a>
        </li>
      </ul>
      <ul v-else class="list-inline align-center mb-0">
        <li class="list-inline-item">
          <a href="#" class="btn btn-outline-light my-2"
            >你好,{{ user.name }}</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface UserType {
  isLogin: boolean;
  id?: number;
  name?: string;
}
export default defineComponent({
  name: "GlobalHeader",
  props: {
    user: {
      type: Object as PropType<UserType>,
      required: true,
    },
  },
});
</script>
<style scoped></style>
