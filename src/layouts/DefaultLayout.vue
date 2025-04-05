<template>
  <div class="bg-gradient-custom dark:bg-gradient-custom-dark overflow-hidden">
    <NavBar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/common/NavBarComponent.vue";
import Footer from "@/components/common/FooterComponent.vue";
</script>
