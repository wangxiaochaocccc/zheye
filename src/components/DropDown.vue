<template>
  <div class="dropdown" ref="dropRef">
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
import { defineComponent, ref, watch } from "vue";
import useClickOutside from "../hooks/useClickOutside";

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
    // 点击区域外关闭dropdown
    const dropRef = ref<null | HTMLElement>(null);
    const isOutside = useClickOutside(dropRef);
    watch(isOutside, (val) => {
      if (val) {
        dropDownVisible.value = false;
      }
    });
    return {
      dropDownVisible,
      handleDropDown,
      dropRef,
    };
  },
});
</script>
<style scoped></style>
