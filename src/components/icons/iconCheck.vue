<template>
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12.0002"
      cy="12.27"
      r="12"
      :fill="primary ? '#FFF' : '#5A72EA'"
    />
    <path
      d="M7.1496 12.4388L10.658 15.5092C11.1121 15.9067 11.8122 15.8143 12.1477 15.3127L16.851 8.28101"
      :stroke="primary ? '#5A72EA' : 'white'"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
});
</script>
