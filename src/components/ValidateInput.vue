<template>
  <div class="validate-input-container pb-3">
    <input
      v-bind="$attrs"
      class="form-control"
      :class="{ 'is-invalid': inputInfo.error }"
      v-model="inputInfo.val"
      @blur="handleValidate"
    />
    <div class="invalid-feedback" v-if="inputInfo.error">
      {{ inputInfo.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";

interface ruleType {
  type: "required" | "email" | "range";
  message?: string;
  max?: { message: string; length: number };
  min?: { message: string; length: number };
}

export type rulesProp = ruleType[];

// emial规则
const emailReg =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default defineComponent({
  name: "ValidateInput",
  props: {
    rules: {
      type: Array as PropType<rulesProp>,
    },
  },
  setup(props) {
    // v-model
    const inputInfo = reactive({
      val: "",
      error: false,
      message: "",
    });
    // 校验逻辑
    const handleValidate = () => {
      const allPass = props.rules?.every((rule) => {
        let passed = true;
        const length = inputInfo.val.trim().length;
        inputInfo.message = rule.message || "";
        switch (rule.type) {
          case "required":
            passed = inputInfo.val.trim() !== "";
            break;
          case "email":
            passed = emailReg.test(inputInfo.val);
            break;
          case "range":
            if (rule.max) {
              passed = length < rule?.max.length;
              inputInfo.message = rule.max?.message;
            }
            if (rule.min) {
              passed = length > rule?.min.length;
              inputInfo.message = rule.min?.message;
            }
            break;
          default:
            break;
        }
        return passed;
      });

      inputInfo.error = !allPass;
    };
    return {
      inputInfo,
      handleValidate,
    };
  },
});
</script>
<style scoped></style>
