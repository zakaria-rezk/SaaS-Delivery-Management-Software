<template>
    <div 
      ref="target" 
      class="lazy-component transition-opacity duration-300"
      :class="{'opacity-100': isVisible, 'opacity-0': !isVisible}"
    >
      <component :is="component" v-bind="props" v-if="isVisible" />
      <div 
        v-else 
        class="loading-placeholder bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] rounded animate-shimmer"
        :style="{ height: `${placeholderHeight}px` }"
      ></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps({
    component: {
      type: Object,
      required: true
    },
    props: {
      type: Object,
      default: () => ({})
    },
    placeholderHeight: {
      type: Number,
      default: 300
    }
  });
  
  const target = ref<HTMLElement | null>(null);
  const isVisible = ref(false);
  
  let observer: IntersectionObserver;
  
  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        rootMargin: '100px',
        threshold: 0.01 
      }
    );
  
    if (target.value) {
      observer.observe(target.value);
    }
  });
  
  onUnmounted(() => {
    if (observer && target.value) {
      observer.unobserve(target.value);
    }
  });
  </script>
  
  <style>
  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
  
  .animate-shimmer {
    animation: shimmer 1.5s infinite;
  }
  </style>