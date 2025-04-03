<template>
  <component :is="layout" >
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import defaultLayout from "@/layouts/DefaultLayout.vue";
const layout = computed(() => {
  return defaultLayout;
});
</script>
