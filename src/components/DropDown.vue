<template>
  <div class="dropdown">
    <button
      class="btn btn-outline-light dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      @click.prevent="handleDropDown"
    >
      {{ title }}
    </button>
    <ul
      class="dropdown-menu"
      :style="{ display: 'block' }"
      v-if="dropDownVisible"
    >
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "DropDown",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const dropDownVisible = ref(false);
    // 触发下拉
    const handleDropDown = () => {
      dropDownVisible.value = !dropDownVisible.value;
    };
    return {
      dropDownVisible,
      handleDropDown,
    };
  },
});
</script>
<style scoped></style>
