<template>
  <div class="validate-form-container">
    <slot />
    <div class="submit-area text-center" @click="handleSubmit">
      <slot name="submit">
        <button class="btn btn-primary">提交</button>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "testVue",
  emits: ["form-submit"],
  setup(props, context) {
    const handleSubmit = () => {
      context.emit("form-submit");
    };
    return {
      handleSubmit,
    };
  },
});
</script>
<style scoped></style>
