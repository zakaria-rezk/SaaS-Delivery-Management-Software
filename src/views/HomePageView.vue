<template>
  <div class="min-h-screen w-full">
    <HeroSectionComponent />
    <PartnersSectionComponent />
    <ServicesSectionComponent />
    <template v-for="(section, index) in lazySections" :key="index">
      <LazyWrapper
        :component="section.component"
        :props="section.props"
        :placeholder-height="section.placeholderHeight"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { defineAsyncComponent } from "vue";


import HeroSectionComponent from "@/components/sections/HeroSectionComponent.vue";
import PartnersSectionComponent from "@/components/sections/PartnersSectionComponent.vue";
import ServicesSectionComponent from "@/components/sections/ServicesSectionComponent.vue";


const PricingSectionComponent = defineAsyncComponent(
  () => import("@/components/sections/PricingSectionComponent.vue")
);
const FeaturesSectionComponent = defineAsyncComponent(
  () => import("@/components/sections/FeaturesSectionComponent.vue")
);
const SuccessStoriesSectionComponent = defineAsyncComponent(
  () => import("@/components/sections/SuccessStoriesSectionComponent.vue")
);
const LoginSectionComponent = defineAsyncComponent(
  () => import("@/components/sections/LoginSectionComponent.vue")
);
const QuestionsSectionComponent = defineAsyncComponent(
  () => import("@/components/sections/QuestionsSectionComponent.vue")
);
const FooterLinksSection = defineAsyncComponent(
  () => import("@/components/sections/FooterLinksSection.vue")
);


import LazyWrapper from "@/components/common/LazyWraperComponent.vue";


const lazySections = ref([
  {
    component: PricingSectionComponent,
    props: {},
    placeholderHeight: 500,
  },
  {
    component: FeaturesSectionComponent,
    props: {},
    placeholderHeight: 600,
  },
  {
    component: SuccessStoriesSectionComponent,
    props: {},
    placeholderHeight: 700,
  },
  {
    component: LoginSectionComponent,
    props: {},
    placeholderHeight: 400,
  },
  {
    component: QuestionsSectionComponent,
    props: {},
    placeholderHeight: 500,
  },
  {
    component: FooterLinksSection,
    props: {},
    placeholderHeight: 300,
  },
]);
</script>
