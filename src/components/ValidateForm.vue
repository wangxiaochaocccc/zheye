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
import { defineComponent, onUnmounted } from "vue";
import mitt from "mitt";

type validateFun = () => boolean;
type Events = {
  "form-item-validate": validateFun;
};
export const mitter = mitt<Events>();

export default defineComponent({
  name: "ValidateForm",
  emits: ["form-submit"],
  setup(props, context) {
    let funcArr: validateFun[] = [];
    const handleSubmit = () => {
      const res = funcArr.map((func) => func()).every((res) => res);
      context.emit("form-submit", res);
    };
    const callback = (fun: validateFun) => {
      funcArr.push(fun);
    };

    mitter.on("form-item-validate", callback);

    onUnmounted(() => {
      mitter.off("form-item-validate", callback);
      funcArr = [];
    });
    return {
      handleSubmit,
    };
  },
});
</script>
<style scoped></style>
