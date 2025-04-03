<template>
  <button
    :class="[
      'flex items-center justify-center rounded-xl font-semibold transition-all duration-200 my-1 font-medium text-lg',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      variantClasses,
      sizeClasses,
      {
        'opacity-50 cursor-not-allowed': loading || disabled,
      },
    ]"
    :disabled="loading || disabled"
    @click="handleClick"
  >
    <svg
      v-if="loading"
      class="animate-spin mr-2"
      :class="spinnerSizeClasses"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <slot v-if="!loading">{{ label }}</slot>
    <span v-else>{{ loadingText }}</span>
  </button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: "Save",
  },
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: "Loading",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["click"]);
const handleClick = () => {
  if (!props.loading && !props.disabled) {
    emit("click");
  }
};
const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-blue text-white  focus:ring-secondary focus:ring-primary";
    case "secondary":
      return "bg-transparent border border-blue text-blue focus:ring-primary";
    case "light":
      return "bg-white text-blue  focus:ring-primary";

    case "outline":
      return "bg-transparent border border-white text-white focus:ring-primary";
    default:
      return "bg-primary text-white hover:bg-primary-dark focus:ring-primary";
  }
});
const sizeClasses = computed(() => {
  switch (props.size) {
    case "small":
      return "px-3 py-1.5 text-sm";
    case "medium":
      return "px-4 py-2 text-base";
    case "large":
      return "px-6 py-3 text-lg";
    case "x-large":
      return "w-[136px] h-[62px] font-medium text-xl";
    case "2x-large":
      return "w-[225px] h-[72px] font-medium text-xl";
    case "full":
      return "px-4 py-2 w-full";
    default:
      return "w-fit";
  }
});
const spinnerSizeClasses = computed(() => {
  switch (props.size) {
    case "small":
      return "h-4 w-4";
    case "medium":
      return "h-5 w-5";
    case "large":
      return "h-6 w-6";
    default:
      return "h-5 w-5";
  }
});
</script>
