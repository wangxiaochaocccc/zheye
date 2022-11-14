<template>
  <div class="container">
    <div class="row text-center">
      <div v-for="item in column" :key="item._id" class="col-4 mb-4">
        <div class="card-body h-100 shadow-sm border rounded">
          <img
            :src="item.avatar?.url"
            class="w-30 border rounded-circle my-3 border-light header-icon"
          />
          <h5 class="card-title mb-2">{{ item.title }}</h5>
          <p class="card-text text-left">
            {{ item.description }}
          </p>
          <a :href="`/column/${item._id}`" class="btn btn-outline-primary mb-3"
            >进入专栏</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type avatarType = {
  url?: string;
  _id?: string;
  createdAt?: string;
};
export interface columnType {
  _id: string;
  avatar: avatarType;
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
<style scoped>
.header-icon {
  width: 50px;
  height: 50px;
}
</style>
