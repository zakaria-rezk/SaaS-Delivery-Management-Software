<template>
  <picture v-if="sources" class="rounded-xl overflow-hidden text-center">
    <!-- Art Direction -->
    <source
      v-for="source in sources"
      :key="source.media"
      :media="source.media"
      :srcset="source.srcset"
      class="rounded-xl"
    />

    <!-- Fallback -->
    <img
      class="rounded-xl"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :decoding="decoding"
      :class="['app-image', { 'object-cover': cover }]"
      :style="{ aspectRatio: aspect }"
      @error="handleError"
    />
  </picture>

  <!-- <img
    v-else
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    :decoding="decoding"
    :class="['app-image', { 'object-cover': cover }]"
    :style="{ aspectRatio: aspect }"
    @error="handleError"
  /> -->
</template>

<script setup lang="ts">
import { computed } from "vue";
type ImageFormat = "webp" | "avif" | "jpeg";
type ImageSource = { media: string; srcset: string };
import type { PropType } from "vue";
const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  width: Number,
  height: Number,
  sources: {
    type: Array as PropType<ImageSource[]>,
    default: () => [],
  },
  loading: {
    type: String as PropType<"eager" | "lazy">,
    default: "lazy",
  },
  decoding: {
    type: String as PropType<"sync" | "async">,
    default: "async",
  },
  cover: Boolean,
  aspect: String, // "16/9"
});

const handleError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.src = "/fallback-image.jpg";
};
</script>

<style scoped>

</style>
