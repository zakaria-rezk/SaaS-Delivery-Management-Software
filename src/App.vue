<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import { computed, onErrorCaptured } from "vue";
import defaultLayout from "@/layouts/DefaultLayout.vue";
const layout = computed(() => {
  return defaultLayout;
});
onErrorCaptured((error, instance, info) => {
  console.log(error);
});
</script>
