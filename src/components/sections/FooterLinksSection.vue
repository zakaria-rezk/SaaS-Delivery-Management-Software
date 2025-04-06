<template>
  <section
    class="bg-white  dark:bg-black py-36 xl:px-40 lg:px-20 md:px-12 px-4 grid grid-cols-3 md:grid-cols-5 gap-8"
  >
    <div class="mx flex flex-col gap-8">
      <div>
        <LogoComponent variant="secondary " />
        <p class="leading-8 my-4 dark:text-white">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested
        </p>
      </div>
      <div class="icons flex gap-4 text-white">
        <span
          class="bg-blue w-5 h-5 rounded-md p-4 flex items-center justify-center"
          ><font-awesome-icon :icon="['fab', 'instagram']"
        /></span>
        <span
          class="bg-blue w-5 h-5 rounded-md p-4 flex items-center justify-center"
        >
          <font-awesome-icon :icon="['fab', 'youtube']"
        /></span>
        <span
          class="bg-blue w-5 h-5 rounded-md p-4 flex items-center justify-center"
        >
          <font-awesome-icon :icon="['fab', 'twitter']"
        /></span>
      </div>
    </div>
    <div v-for="(item, index) in navItems" :key="index">
      <h2 class="text-blue font-bold text-lg mb-4 px-2">
        {{ titles[index] }}
      </h2>
      <List
        direction="vertical"
        :items="item"
        :ulProps="{
          class: 'text-neutral-600 dark:text-white',
          as: 'unordered',
          styleType: 'none',
        }"
        :liProps="{
          variant: 'default',
          padding: 'sm',
        }"
      />
    </div>
  </section>
</template>
<script lang="ts" setup>
import LogoComponent from "../common/LogoComponent.vue";
import { useI18n } from "vue-i18n";
import List from "../UI/Lists/List.vue";
const { t } = useI18n();
type NavItem = {
  label: string;
  href: string;
  icon?: any;
};
const titles = [t("Company"), t("Product"), t("Resource"), t("Contact")];
const navItems: any[] = [
  [
    { label: t("About"), href: "/" },
    { label: t("Career"), href: "#products" },
    { label: t("Pricing"), href: "/solutions" },
    { label: t("Service"), href: "/Pricing" },
  ],
  [
    { label: t("Invoice"), href: "/about" },
    { label: t("Contract"), href: "/contact" },
    { label: t("Accounting"), href: "/blog" },
    { label: t("Proposal"), href: "/support" },
  ],
  [
    { label: t("API Docs"), href: "/privacy-policy" },
    { label: t("Tutorial Video"), href: "/terms-of-service" },
    { label: t("How to Create"), href: "/faq" },
  ],
  [
    { label: t("youremail@mern.com"), href: "/careers" },
    { label: t("+012-345-678-90"), href: "/press" },
    { label: t("St. London Maeren 01928"), href: "/investors" },

  ],
];
</script>
