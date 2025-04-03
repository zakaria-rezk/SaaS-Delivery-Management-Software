<template>
  <li
    class="transition-all !dark:text-white "
    :class="[paddingClasses, variantClasses, activeClasses]"
  >
    <a :href="item.href" v-if="item">{{ item.label }}</a>
    <slot v-else />
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";

type LiVariant = "default" | "card" | "button";
type LiPadding = "sm" | "md" | "lg";

type ItemType = {
  label: string;
  href: string;
  icon?: any;
};

// Define component props
const props = defineProps({
  variant: {
    type: String as () => LiVariant,
    default: "default",
  },
  padding: {
    type: String as () => LiPadding,
    default: "md",
  },
  active: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object as () => ItemType | null,
    default: null,
  },
});

// Computed class properties
const variantClasses = computed(
  () =>
    ({
      default: "",
      card: "bg-white dark:bg-gray-800 shadow rounded-lg",
      button:
        "hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded transition-colors",
    }[props.variant])
);

const paddingClasses = computed(
  () =>
    ({
      sm: "p-1 lg:p-2",
      md: "p-2 lg:p-3",
      lg: "p-3 lg:p-4",
    }[props.padding])
);

const activeClasses = computed(() =>
  props.active
    ? "bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500"
    : ""
);
</script>
