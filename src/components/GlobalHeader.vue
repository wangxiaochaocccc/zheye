<template>
  <nav class="navbar-dark bg-primary mb-4">
    <div class="w-75 navbar mx-auto justify-space-between align-center">
      <a class="navbar-brand text-white" href="#">者也专栏</a>
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
          <drop-down :title="`你好，${user.name}`">
            <drop-down-item> 新建文章 </drop-down-item>
            <drop-down-item disabled> 编辑资料 </drop-down-item>
            <drop-down-item> 退出登录 </drop-down-item>
          </drop-down>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import DropDown from "./DropDown.vue";
import DropDownItem from "./DropDownItem.vue";
export interface UserType {
  isLogin: boolean;
  id?: number;
  name?: string;
}
export default defineComponent({
  name: "GlobalHeader",
  components: {
    DropDown,
    DropDownItem,
  },
  props: {
    user: {
      type: Object as PropType<UserType>,
      required: true,
    },
  },
});
</script>
<style scoped></style>
