<template>
  <section
    class="pt-36 bg-purple-light xl:px-40 lg:px-20 md:px-12 px-4 text-center relative"
  >
    <h1 class="font-bold lg:text-6xl text-3xl px-4">
      Do you have any question
    </h1>
    <p class="text-neutral-500 py-8 px-4 dark:text-white">
      Our support team ready to help you, please contact with them
    </p>
    <BaseCardComponent class="md:w-[1200px] mx-auto text-start my-12">
      <div
        class="mt-12 w-full space-y-4 flex flex-col items-start justify-start"
      >
        <div
          v-for="(faq, index) in fags"
          :key="index"
          class="bg-white rounded-lg overflow-hidden transition-all duration-300"
          :class="{ 'bg-opacity-90': faq.isOpen }"
        >
          <div class="question flex gap-4">
            <button @click="toggleFAQ(index)">
              <openIcon v-if="faq.isOpen" />
              <closeIcon v-else />
            </button>
            <h1 class="text-xl font-medium leading-[2rem] my-2">
              {{ faq.question }}
            </h1>
          </div>
          <transition name="faq">
            <div v-show="faq.isOpen" class="px-6 pb-6">
              <p class="text-gray-600 leading-8">{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </BaseCardComponent>
    <div class="flex justify-center items-center mt-20 mb-10">
      <BaseButtonComponent
        variant="primary"
        label="More FAQs"
        size="2x-large"
      />
    </div>
    <SemiCircleComponent
      class="absolute left-0 -bottom-32 transform  z-0"
    />
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import openIcon from "@/assets/svg/open.svg";
import closeIcon from "@/assets/svg/close.svg";
import BaseButtonComponent from "@/components/UI/BaseButtonComponent.vue";
import BaseCardComponent from "@/components/UI/BaseCardComponent.vue";
import SemiCircleComponent from "@/components/UI/Illustrations/SemiCircleComponent.vue";
const fags = ref([
  {
    isOpen: false,
    question: "Website reponse taking time, how to improve?",
    answer:
      "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
  },
  {
    isOpen: false,
    question: "App installation failed, how to update system information?",
    answer:
      "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
  },
  {
    isOpen: false,
    question: "App installation failed, how to update system information?",
    answer:
      "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
  },
  {
    isOpen: false,
    question: "New update fixed all bug and issues?",
    answer:
      "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
  },
]);
const toggleFAQ = (index: number): void => {
  fags.value[index].isOpen = !fags.value[index].isOpen;
};
</script>
<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s;
}
.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
}

.faq-enter-to,
.faq-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
