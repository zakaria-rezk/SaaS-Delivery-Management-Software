<template>
  <div
    class="relative bg-white w-fit flex items-center justify-center gap-4 p-4 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
  >
    <AppImageComponent :src="profileImage" alt="" class="rounded-full" />
    <div v-if="active">
      
      <p class="name">{{ name }}</p>
      <p class="title">{{ title }}</p>
    </div>
    <div
      class="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 transform rotate-180"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import AppImageComponent from "@/components/UI/AppImageComponent.vue";
import profileImage from "@/assets/images/profile.webp";
const props = defineProps({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  active: {
    type: Boolean,
  },
});
</script>
