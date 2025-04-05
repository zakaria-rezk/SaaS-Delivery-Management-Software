<template>
  <section
    class="lgoin bg-purple-light pt-36 xl:px-40 lg:px-20 md:px-12 px-4  relative"
  >
    <div
      class="bg-gradient-custom overflow-hidden md:pl-24  h-[461px] dark:bg-gradient-custom-dark relative z-10 rounded-[32px] shadow shadow-b-2xl py-4 flex"
    >
      <div class="px-12 w-full">
        <h1
          class="font-bold lg:text-5xl text-3xl mt-24 text-white relative z-10"
        >
          Sign up and get started
        </h1>
        <p class="text-white text-xl py-5 p dark:text-white relative z-10">
          Free trail 14 days of change and without obligation
        </p>
        <div class="flex gap-4 py-12">
          <BaseInputComponent
            placeholder="Enter your email"
            value="ss"
            :model="email"
            type="text"
          />
          <BaseButtonComponent variant="light" size="2x-large" label="Register for free"
            ></BaseButtonComponent
          >
        </div>
      </div>
      <div class="overflow-hidden w-fit hidden md:block w-3/4">
        <Ellipse class="absolute -top-[0px] transform rotate-180 right-10" />
        <Ellipse
          class="absolute -right-[150px] top-[140px] transform -rotate-45"
        />
        <Ellipse class="absolute bottom-0 right-20" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import BaseButtonComponent from "@/components/UI/BaseButtonComponent.vue";
import BaseInputComponent from "@/components/UI/Forms/BaseInputComponent.vue";
import SvgRenderComponent from "../UI/SvgRenderComponent.vue";
import Ellipse from "@/assets/svg/Ellipse.svg";
const email = ref<string>();
</script>
