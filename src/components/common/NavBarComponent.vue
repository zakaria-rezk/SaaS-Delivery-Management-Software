<template>
  <header class="h-[150px] flex items-center">
    <nav
      aria-label="Main navigation "
      class="text-center w-full flex items-center justify-between xl:px-40 lg:px-20 md:px-12 px-4"
    >
      <div>
        <BaseButtonComponent
          @click="toggleDarkMode"
          size="fit"
          variant="outline"
          aria-label="Toggle dark mode"
        >
          <svg v-if="!isDark" class="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </BaseButtonComponent>
        <LogoComponent variant="primary" class="z-50" />
      </div>
      <div class="hidden lg:flex items-center">
        <List
          direction="horizontal"
          :items="navItems"
          :ulProps="{
            class: 'flex gap-8',
            spacing: 'loose',
            as: 'unordered',
            styleType: 'none',
          }"
          :liProps="{
            class: 'flex items-center',
            variant: 'default',
            padding: 'lg',
          }"
        />

        <div class="flex gap-4 ml-8">
          <BaseButtonComponent
            variant="outline"
            label="Log in"
            size="x-large"
          />
          <BaseButtonComponent variant="light" label="Sign up" size="x-large" />
        </div>
      </div>
      <BaseButtonComponent
        size="small"
        class="lg:hidden z-50 p-2 focus:outline-none"
        @click="toggleMobileMenu"
      >
        <svg
          class="w-6 h-6"
          fill="#fff"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </BaseButtonComponent>
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        @click="isMobileMenuOpen = false"
      />
      <transition>
        <aside
          v-show="isMobileMenuOpen"
          :class="{
            'animate-fade-in-right-to-left': isMobileMenuOpen,
            'animate-fade-in-left-to-right': !isMobileMenuOpen,
          }"
          class="fixed top-0 right-0 h-full ws-64 bg-white shadow-lg z-50 p-6 lg:hidden"
        >
          <div class="flex flex-col h-full gap-8">
            <div class="flex justify-between items-center gap-2">
              <LogoComponent variant="secondary" class="z-50" />
              <BaseButtonComponent
                size="fit"
                @click="isMobileMenuOpen = false"
                aria-label="Close menu"
              >
                <svg
                  class="w-6 h-6"
                  fill="#5A72EA"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </BaseButtonComponent>
            </div>
            <List
              direction="vertical"
              :items="navItems"
              :ulProps="{
                class: '',
                as: 'unordered',
                styleType: 'none',
              }"
              :liProps="{
                variant: 'default',
                padding: 'sm',
              }"
            />
            <div class="mt-auto pt-6 flex flex-col gap-4">
              <BaseButtonComponent
                variant="primary"
                :label="t('login')"
                size="small"
              />
              <BaseButtonComponent
                variant="primary"
                :label="t('signup')"
                size="small"
              />
            </div>
          </div>
        </aside>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import BaseButtonComponent from "../UI/BaseButtonComponent.vue";
import List from "@/components/UI/Lists/List.vue";
import LogoComponent from "@/components/common/LogoComponent.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

onMounted(() => {
  isDark.value = localStorage.getItem("theme") === "dark";
  document.documentElement.classList.toggle("dark", isDark.value);
});
type NavItem = {
  label: string;
  href: string;
  icon?: any;
};
const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const navItems: NavItem[] = [
  { label: t("Home"), href: "/" },
  { label: t("Products"), href: "#products" },
  { label: t("Solutions"), href: "/solutions" },
  { label: t("Pricing"), href: "/Pricing" },
];
</script>
