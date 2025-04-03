<template>
  <section
    class="py-36 bg-white text-center text-center dark:bg-gradient-custom-dark dark:text-white pb-62"
  >
    <h1 class="font-bold lg:text-6xl text-3xl px-4">Features for you</h1>
    <p class="text-neutral-500 py-5 px-4 dark:text-white">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore
    </p>
    <div class="feature flex justify-center gap-12 items-start flex-wrap py-12">
      <div v-for="(feature, index) in features" :key="feature.id">
        <BaseCardComponent
          class="h-[450px] border w-[360px] relative rounded-[32px] b"
          :primary="feature.id === 2"
        >
          <template #illustrations>
            <component
              :is="components[feature.component]"
              class="mt-14"
            ></component
          ></template>

          <template #header>{{ feature.header }}</template>
          <template #content>{{ feature.content }}</template>
        </BaseCardComponent>
      </div>
    </div>
    <div class="flex justify-center items-center mt-20">
      <BaseButtonComponent
        variant="primary"
        label="Explore Features"
        size="2x-large"
      />
    </div>
  </section>
</template>
<script lang="ts" setup>
import BaseCardComponent from "../UI/BaseCardComponent.vue";
import BaseButtonComponent from "../UI/BaseButtonComponent.vue";
const components = {
  Analysis: defineAsyncComponent(
    () =>
      import(
        "@/components/UI/Illustrations/AnlaysisIllustrationsComponent .vue"
      )
  ),
  FullySecured: defineAsyncComponent(
    () =>
      import(
        "@/components/UI/Illustrations/FullySecuredIllustrationsComponent.vue"
      )
  ),
  Management: defineAsyncComponent(
    () =>
      import(
        "@/components/UI/Illustrations/ManagementIllustrationsComponent.vue"
      )
  ),
  StrongData: defineAsyncComponent(
    () =>
      import(
        "@/components/UI/Illustrations/StrongDataIllustrationsComponent.vue"
      )
  ),
};
import { features } from "@/data/Services";
import { defineAsyncComponent } from "vue";
</script>
