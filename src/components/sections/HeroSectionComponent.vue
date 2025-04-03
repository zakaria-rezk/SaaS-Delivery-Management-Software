<template>
  <section class="hero bg-transparent relative h-full relative">
    <div
      class="xl:pl-40 lg:px-20 md:px-12 xl:!pr-0 px-4 h-full flex flex-col xl:flex-row"
    >
      <div class="py-12 xl:w-1/2 text-white px">
        <h1
          class="text-4xl md:text-5xl flex items-center justify-between font-bold lg:text-7xl lg:leading-[5.5rem] leading-[3.5rem] lg:pr-10"
        >
          SaaS Delivery Management <br />
          Software
        </h1>
        <p class="py-10 text-lg lg:text-xl font-light leading-6 lg:leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Quis autem vel eum
          iure<br />
          reprehenderit qui in ea voluptate
        </p>
        <div class="flex gap-4">
          <BaseButtonComponent
            variant="light"
            label="Get started"
            size="2x-large"
          />
          <BaseButtonComponent variant="outline" size="2x-large"
            ><span class="bg-white rounded-full h-8 w-8 m-2 text-base relative">
              <font-awesome-icon
                :icon="['fas', 'play']"
                class="text-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm"
              /> </span
            >Watch Now</BaseButtonComponent
          >
        </div>
        <div class="w-full flex gap-4 mt-12">
          <span class="flex">
            <iconCheck /> <span class="px-1 md:px-2">Free Register</span>
          </span>
          <span class="flex">
            <iconCheck /> <span class="px-1 md:px-2">Great Service</span>
          </span>
        </div>
      </div>
      <div class="xl:w-1/2 relative text-center">
        <div class="-mt-[20px] hidden md:block">
          <svg
            width="306"
            height="304"
            viewBox="0 0 306 304"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-0 -left-[150px] z-0"
          >
            <ellipse
              cx="153.109"
              cy="151.811"
              rx="152.891"
              ry="151.546"
              fill="white"
            />
          </svg>
        </div>

        <AppImageComponent
          :sources="[
            { media: '(min-width: 1024px)', srcset: dashbord_864x616 },
            { media: '(min-width: 768px)', srcset: dashbord_672x479 },
            { media: '(max-width:768px)', srcset: dashbord_394x281 },
            { media: '(min-width: 1280px)', srcset: HeroImage },
          ]"
          :src="HeroImage"
          alt="Hero Image"
          loading="lazy"
          decoding="async"
          :height="674"
          :width="945"
          cover
          class="xl:absolute relative xl:right-0 xl:top-20 md:top-24 shadow-2xl shadow-[#5A72EA] z-10"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import HeroImage from "@/assets/Images/dashbord.webp";
import dashbord_672x479 from "@/assets/Images/dashbord@672x479.webp";
import dashbord_394x281 from "@/assets/Images/dashbord@394x281.webp";
import dashbord_864x616 from "@/assets/Images/dashbord@864x616.webp";
import AppImageComponent from "@/components/UI/AppImageComponent.vue";
import BaseButtonComponent from "@/components/UI/BaseButtonComponent.vue";
import iconCheck from "@/components/icons/iconCheck.vue";
</script>
