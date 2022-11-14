<template>
  <div class="column-detail-page w-690">
    <div class="cloumn-detail border-bottom align-items-center row py-4 mb-4">
      <img
        :src="detalData?.avatar?.url"
        class="rounded-circle border-100 col-3"
      />
      <div class="content col-9">
        <h4 class="title">{{ detalData?.title }}</h4>
        <div class="desc">{{ detalData?.description }}</div>
      </div>
    </div>
    <!-- 相关专栏列表 -->
    <div
      class="post-column shadow-sm mb-4 p-3 rounded border"
      v-for="item in postsData"
      :key="item._id"
    >
      <h4>
        <router-link to="#" class="title">{{ item.title }}</router-link>
      </h4>
      <div class="content row mb-3 align-items-center">
        <img :src="item.image.url" class="col-4 py-2 rounded" />
        <div class="desc col-8">{{ item.excerpt }}</div>
      </div>
      <div class="time">{{ item.createdAt }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import service from "@/utils/request";
import { columnType } from "@/components/ColumnList.vue";

type imageType = {
  url?: string;
  _id?: string;
};
interface postsType {
  title: string;
  _id: string;
  createdAt: string;
  excerpt: string;
  image: imageType;
}
export default defineComponent({
  name: "ColumnDetail",
  setup() {
    const route = useRoute();
    const detalData = ref<columnType>();
    const getDetail = async () => {
      const { data } = await service.get(`/columns/${route.params.id}`);
      detalData.value = data.data;
    };
    getDetail();

    // 获取posts列表
    const postsData = ref<postsType[]>([]);
    const getPosts = async () => {
      const res = await service.get(`/columns/${route.params.id}/posts`, {
        params: { page: 1, size: 5 },
      });
      postsData.value = res.data.data.list;
    };
    getPosts();
    return {
      detalData,
      postsData,
    };
  },
});
</script>
<style scoped>
.w-690 {
  width: 690px;
  margin: auto;
}
.post-column a {
  text-decoration: none;
  color: #1a1a1a;
}
.post-column a:hover {
  color: aqua;
}
</style>
