<template>
  <li>
    <a href="#" class="dropdown-item" :class="{ disabled: disabled }">
      <slot />
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DropDownItem",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
<style scoped>
.is-disabled {
  color: #6c757d !important;
  pointer-events: none;
  background-color: transparent;
}
</style>
