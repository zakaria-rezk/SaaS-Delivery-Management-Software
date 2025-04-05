<template>
  <label for="" v-if="label">
    {{ label }}
  </label>
  <input
    :type="type"
    v-model="model"
    :placeholder="placeholder"
    class="block w-full rounded-xl px-2 border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm py-4"
  />
</template>
<script lang="ts" setup>
type InputType = "text" | "password" | "email" | "number" | "tel" | "search";
interface Props {
  type?: InputType;
  model?: string | number;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  value?: string | number;
  placeholder?: string;
}
const model = defineModel<string | number>();
const props = defineProps<Props>();
</script>
