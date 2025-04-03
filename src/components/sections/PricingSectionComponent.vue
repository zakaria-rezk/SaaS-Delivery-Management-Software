<template>
  <section
    class="pricing relative pt-32 bg-white dark:bg-gradient-custom-dark dark:text-white"
  >
    <div class="text-center xl:px-40 lg:px-20 md:px-12 px-4 leading-8">
      <SemiCircleComponet class="absolute left-0 top-32" />
      <h1 class="font-bold lg:text-6xl text-3xl px-4 leading-[5.5rem]">
        Start today, with free or <br />
        premium plan, you choose
      </h1>
      <p class="text-neutral-500 py-5 px-4 dark:text-white">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis
      </p>
      <div class="flex flex-wrap items-center justify-center mt-36 gap-8 !dark:text-white">
        <PricingCardComponent
          :items="BasicPlanItems"
          :premium="false"
          Price="$0"
        >
          <template #palnDetails>
            Nam libero tempore, cum soluta nobis <br />
            est eligendi optio cumque nihil impedit <br />
            quo minus id quod maxime placeat facere possimus</template
          ></PricingCardComponent
        >
        <PricingCardComponent
          :items="PremiumPlanItems"
          :premium="true"
          Price="$99"
        >
          <template #palnDetails>
            On the other hand, we denounce with <br />righteous indignation and
            dislike men<br />
            who are so beguiled and demoralized by <br />the charms of pleasure
            of the moment</template
          ></PricingCardComponent
        >
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const BasicPlanItems = [
  "Limited access library",
  "Commercial license",
  "Hotline support 24/7",
  "100+ HTML UI Elements",
  "EaCommerce builder",
];
const PremiumPlanItems = [
  "Limited access library",
  "Commercial license",
  "Hotline support 24/7",
  "300+ HTML UI Elements",
  "EaCommerce builder",
];
import PricingCardComponent from "@/components/common/PricingCardComponent.vue";
import SemiCircleComponet from "@/components/UI/Illustrations/SemiCircleComponet.vue";
</script>
