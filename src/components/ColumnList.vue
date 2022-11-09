<template>
  <ul>
    <li v-for="item in column" :key="item.id">
      <img :src="item.avatar" alt="" />
      <div class="title">{{ item.title }}</div>
      <div class="desc">{{ item.description }}</div>
      <button>进入专栏</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface columnType {
  id: number;
  avatar: string;
  title: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    column: {
      type: Array as PropType<columnType[]>,
      required: true,
    },
  },
});
</script>
<style scoped></style>
