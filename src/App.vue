<template>
  <div class="container-fluid px-0 flex-shrink-0">
    <global-header :user="store.state" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlobalHeader, { UserType } from "@/components/GlobalHeader.vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "app",
  components: {
    GlobalHeader,
  },
  setup() {
    const store = useStore<UserType>();

    return {
      store,
    };
  },
});
</script>
<style scoped></style>
