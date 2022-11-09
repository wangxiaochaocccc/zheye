<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
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
  type: "required" | "email";
  message: string;
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
        inputInfo.message = rule.message;
        switch (rule.type) {
          case "required":
            passed = inputInfo.val.trim() !== "";
            break;
          case "email":
            passed = emailReg.test(inputInfo.val);
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
