<template>
  <span
    class="absolute bg-white  z-10 flex items-center justify-center transform -translate-y-2/4 h-[64px] w-[64px] bg-white- rounded-full border-[3px] text-blue font-medium text-center border-blue"
    >{{ number }}</span
  >
</template>
<script lang="ts" setup>
const props = defineProps({
  number: {
    type: String,
    required: true,
  },
});
</script>
