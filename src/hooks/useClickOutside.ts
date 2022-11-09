import { ref, onMounted, onUnmounted, Ref } from "vue";

const useClickOutside = (eleRef: Ref<null | HTMLElement>) => {
  const isOutside = ref(false);
  const handle = (e: MouseEvent) => {
    if (eleRef.value?.contains(e.target as HTMLElement)) {
      isOutside.value = false;
    } else {
      isOutside.value = true;
    }
  };
  onMounted(() => {
    document.addEventListener("click", handle);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handle);
  });
  return isOutside;
};

export default useClickOutside;
