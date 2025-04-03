<template>
  <Ul
    :horizontal="direction === 'horizontal'"
    v-bind="ulProps"
    class="font-medium text-lg	"
  >
    <Li
      v-for="(item, index) in items"
      :key="getKey(item, index)"
      :item="item"
      v-bind="liProps"
    >
      <slot> </slot>
    </Li>
  </Ul>
</template>

<script setup lang="ts" generic="T = any">
import Ul from "@/components/UI/Lists/Ul.vue";
import Li from "@/components/UI/Lists/Li.vue";

type Direction = "horizontal" | "vertical";

const props = defineProps<{
  items: any[];
  direction?: Direction;
  renderItem?: (item: T) => any;
  ulProps?: Omit<InstanceType<typeof Ul>["$props"], "horizontal">;
  liProps?: InstanceType<typeof Li>["$props"];
  getKey?: (item: T, index: number) => string | number;
}>();
const getKey = props.getKey || ((_, index) => index);
</script>
