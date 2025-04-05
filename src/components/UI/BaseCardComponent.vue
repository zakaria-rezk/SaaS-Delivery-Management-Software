<template>
  <div
    class="bg-white dark:bg-gradient-custom-dark relative z-10 text-center rounded-[32px] shadow shadow-b-2xl py-4"
    :class="{ 'shadow-gradient': primary }"
  >
    <div class="content flex flex-col items-center px-6 shadow-bottom relative">
      <slot></slot>
      <slot name="illustrations"></slot>
      <h1 class="font-bold text-2xl pt-7 pb-2.5 !dark:text-white ">
        <slot name="header"></slot>
      </h1>
      <p class="text-lg dark:text-white text-neutral-500 leading-8 ">
        <slot name="content"></slot>
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped></style>
