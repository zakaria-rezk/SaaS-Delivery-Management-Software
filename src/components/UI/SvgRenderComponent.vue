<template>
  <span>{{ svg }}</span>
</template>
<script lang="ts" setup>
const props = defineProps({
  svg: {
    type: String,
    required: true,
  },
});
</script>
