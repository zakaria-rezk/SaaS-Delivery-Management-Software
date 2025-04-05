<template>
  <BaseCardComponent
    class=" w-[770px] md:h-[525px]"
    :class="{ 'bg-gradient-custom !dark:text-white !text-white ': premium }"
  >
    <div class="flex justify-between">
      <div class="py-[40px] text-start">
        <BaseButtonComponent
          size="large"
          :variant="premium ? 'outline' : 'secondary'"
          :label="premium ? 'PREMIUM PLAN' : 'BASIC PLAN'"
        />
        <h1 class="md:text-4xl text-2xl xl:text-6xl font-bold py-8">
          {{Price}}<span class="text-xl">per month</span>
        </h1>
        <p class="text-lg pb-8 p">
          <slot name="palnDetails"></slot>
        </p>
        <BaseButtonComponent
          size="2x-large"
          :variant="premium ? 'light' : 'primary'"
          label="Join now"
          class="text-blue"
        />
      </div>
      <div class="w-5/12 text-start py-24 !dark:text-white">
        <Ul :horizontal="false" as="unordered" spacing="tight">
          <Li
            v-for="(item, index) in items"
            padding="sm"
            :key="index"
            LiVariant="default"
            class="flex items-start justify-start text-black dark:text-white"
            ><iconCheck :primary="premium" />
            <span class="ml-2 dark:text-white  " :class="{ '!text-white !dark:text-white': premium }">{{
              item
            }}</span>
          </Li>
        </Ul>
      </div>
    </div></BaseCardComponent
  >
</template>
<script lang="ts" setup>
import Ul from "../UI/Lists/Ul.vue";
import Li from "../UI/Lists/Li.vue";
import iconCheck from "../icons/iconCheck.vue";
import BaseCardComponent from "@/components/UI/BaseCardComponent.vue";
import BaseButtonComponent from "@/components/UI/BaseButtonComponent.vue";
const props = defineProps({
  items: {
    type: Array,
  },
  premium: {
    type: Boolean,
    default: false,
  },
  Price: {
    type: String,
  },
});
</script>
