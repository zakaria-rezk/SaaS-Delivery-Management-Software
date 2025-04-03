<template>
  <section class="pt-36 bg-white dark:bg-gradient-custom-dark text-center">
    <h1 class="font-medium lg:text-4xl text-2xl px-4 dark:text-white py-10">
      Companies we have helped grow
    </h1>
    <div
      class="flex justify-center dark:bg-blue gap-32 items-center flex-wrap py-12"
    >
      <template v-for="(img, index) in Imgs" :key="index">
        <AppImageComponent
          :src="img"
          alt="Hero Image"
          loading="lazy"
          decoding="async"
          :height="60"
          :width="201"
          cover
        />
      </template>
    </div>
  </section>
</template>
<script lang="ts" setup>
import AppImageComponent from "../UI/AppImageComponent.vue";
import Aven from "@/assets/Images/partners/Aven.png";
import Ideaa from "@/assets/Images/partners/Ideaa.png";
import Treva from "@/assets/Images/partners/Treva.png";
import Velocity from "@/assets/Images/partners/Velocity 9.png";
import live from "@/assets/Images/partners/Liva.png";
const Imgs = [Aven, Ideaa, Velocity, live, Treva];
</script>
