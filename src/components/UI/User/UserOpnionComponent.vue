<template>
  <div class="w-full">
    <BaseCardComponent
      class="w-2/3 h-[350px] text-center flex justify-center m-auto"
    >
      <div class="flex py-10 mt-10">
        <span v-for="i in 5">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0.0460815L14.6942 8.33788H23.4127L16.3593 13.4625L19.0534 21.7543L12 16.6297L4.94658 21.7543L7.64074 13.4625L0.587322 8.33788H9.30583L12 0.0460815Z"
              fill="#FFC700"
            />
          </svg>
        </span>
      </div>
      <h3 class="px-12 pb-10 font-medium text-xl">
        {{ comment }}
      </h3>
      <AppImageComponent
        :src="imgsSrc"
        alt="Cmpany Logo"
        loading="lazy"
        decoding="async"
        :height="100"
        :width="100"
        cover
      />
    </BaseCardComponent>
  </div>
</template>
<script lang="ts" setup>
import BaseCardComponent from "../BaseCardComponent.vue";
import AppImageComponent from "../AppImageComponent.vue";
const props = defineProps({
  imgsSrc: {
    type: String,
  },
  comment: {
    type: String,
  },
});
</script>
