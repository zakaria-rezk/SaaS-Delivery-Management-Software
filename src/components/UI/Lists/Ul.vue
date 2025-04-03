<script setup lang="ts">
import { computed } from "vue";

type ListType = "unordered" | "ordered";
type ListStyle = "none" | "disc" | "decimal" | "square";
type ListSpacing = "tight" | "normal" | "loose";

const props = defineProps({
  as: {
    type: String as () => ListType,
    default: "unordered",
  },
  styleType: {
    type: String as () => ListStyle,
    default: "none",
  },
  spacing: {
    type: String as () => ListSpacing,
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
});

const spacingClasses = computed(
  () =>
    ({
      tight: "gap-2 md:gap-3 lg:gap-4",
      normal: "gap-4 md:gap-6 lg:gap-8",
      loose: "gap-6 lg:gap-8 xl:gap-12",
    }[props.spacing])
);

const componentTag = computed(() => (props.as === "ordered" ? "ol" : "ul"));
</script>

<template>
  <component
    :is="componentTag"
    class="list-outside !dark:text-white  flex"
    :class="[
      {
        'flex-row text-white': horizontal,
        'flex-col text-blue': !horizontal,
      },
      spacingClasses,
    ]"
  >
    <slot />
  </component>
</template>
