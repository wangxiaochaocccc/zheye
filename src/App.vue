<template>
  <global-header :user="UserInfo" />
  <validate-form @form-submit="onSubmit">
    <vailidate-input :rules="rules" placeholder="请输入邮箱地址" type="text" />
    <template #submit>
      <button class="btn btn-danger">提交</button>
    </template>
  </validate-form>
  <div class="container">
    <column-list :column="columnData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { columnType } from "./components/ColumnList.vue";
import GlobalHeader, { UserType } from "./components/GlobalHeader.vue";
import VailidateInput, { rulesProp } from "./components/ValidateInput.vue";
import ValidateForm from "./components/ValidateForm.vue";
export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader,
    VailidateInput,
    ValidateForm,
  },
  setup() {
    const columnData: columnType[] = [
      {
        id: 1,
        title: "test1的专栏",
        description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
        avatar:
          "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
      },
      {
        id: 2,
        title: "test2的专栏",
        description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
        avatar:
          "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
      },
    ];
    const UserInfo: UserType = {
      isLogin: true,
      name: "小王",
      id: 1,
    };
    const rules: rulesProp = [
      { type: "required", message: "不能为空" },
      // { type: "email", message: "邮箱格式错误" },
      { type: "range", min: { message: "最小不能少于3位", length: 3 } },
    ];
    const onSubmit = () => {
      console.log(1111);
    };
    return {
      columnData,
      UserInfo,
      rules,
      onSubmit,
    };
  },
});
</script>

<style></style>
