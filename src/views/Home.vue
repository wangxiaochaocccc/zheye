<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row pt-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center mb-3">发现精彩</h4>
    <column-list :column="columnData"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import service from "@/utils/request";
import ColumnList, { columnType } from "../components/ColumnList.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    ColumnList,
  },
  setup() {
    // 专栏数据
    const columnData = ref<columnType[]>([]);

    const getColumn = async () => {
      const { data } = await service.get("/columns", {
        params: { size: 5, page: 1 },
      });
      columnData.value = data.data.list;
    };
    getColumn();

    return {
      columnData,
    };
  },
});
</script>
