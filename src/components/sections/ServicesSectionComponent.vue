<template>
  <section
    class="pt-36 px-4 bg-white text-center dark:bg-gradient-custom-dark dark:text-white"
  >
    <h1 class="font-bold lg:text-6xl text-3xl px-4">
      Learn more about process
    </h1>
    <p class="text-neutral-500 py-5 px-4 dark:text-white">
      Quis autem vel eum iure reprehenderit qui in ea voluptate
    </p>
    <div
      class="service flex justify-center gap-32 items-start flex-wrap py-12 mt-48"
    >
      <div v-for="(service, index) in services" :key="service.id">
        <BaseCardComponent
          class="h-[457px] border md:w-[400px]  relative rounded-[32px] b"
          :primary="service.id === 1"
          ><SemiCircle
            v-if="service.id !== 1"
            class="transform -translate-x-2/4 -mx-32 -translate-y-[100%] absolute hidden 2xl:block"
          />
          <ServiceNumComponet :number="service.number" />
          <template #illustrations>
            <component
              :is="components[service.header]"
              class="mt-14"
            ></component
          ></template>

          <template #header>{{ service.header }}</template>
          <template #content>{{ service.content }}</template>
        </BaseCardComponent>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import BaseCardComponent from "../UI/BaseCardComponent.vue";
import SemiCircle from "@/assets/svg/semi-circle.svg";

const components = {
  Collect: defineAsyncComponent(
    () =>
      import("@/components/UI/Illustrations/CollectllustrationsComponet.vue")
  ),
  Convert: defineAsyncComponent(
    () => import("@/components/UI/Illustrations/ConvertlustrationsComponet.vue")
  ),
  Connect: defineAsyncComponent(
    () => import("@/components/UI/Illustrations/ConnectlustrationsComponet.vue")
  ),
};
import { services } from "@/data/Services";
import { defineAsyncComponent } from "vue";
import ServiceNumComponet from "@/components/UI/ServiceNumComponet.vue";

</script>
