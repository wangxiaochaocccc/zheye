<template>
  <div class="column-detail-page w-690">
    <div class="cloumn-detail border-bottom align-items-center row py-4">
      <img
        :src="detalData?.avatar?.url"
        class="rounded-circle border-100 col-3"
      />
      <div class="content col-9">
        <h4 class="title">{{ detalData?.title }}</h4>
        <div class="desc">{{ detalData?.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import service from "@/utils/request";
import { columnType } from "@/components/ColumnList.vue";

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

    return {
      detalData,
    };
  },
});
</script>
<style scoped>
.w-690 {
  width: 690px;
  margin: auto;
}
</style>
