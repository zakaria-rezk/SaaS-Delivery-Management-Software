<template>
  <section
    class="bg-purple-light relative pt-44 text-center dark:bg-gradient-custom-dark dark:text-white py-10"
    @mouseenter="pauseAutoSwitch"
    @mouseleave="resumeAutoSwitch"
  >
    <SemiCircleComponet class="absolute right-0 -top-32 transform rotate-180" />

    <h1 class="font-bold lg:text-6xl text-3xl px-4">
      Check what our clients are saying
    </h1>
    <p class="text-neutral-500 py-5 px-4 dark:text-white">
      Cum soluta nobis est eligendi optio cumque
    </p>
    <div class="flex flex-col items-center space-y-6">
      <div
        class="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center px-4"
      >
        <transition-group
          name="fade"
          tag="div"
          class="flex flex-wrap justify-center items-center gap-4 lg:gap-8"
        >
          <template v-for="story in centeredStories" :key="story.id">
            <UserProfileComponent
              :name="story.name"
              :title="story.title"
              :active="story.id === selectedProfile?.id"
              :class="{
                'scale-110 shadow-lg border border-gray-300 opacity-100':
                  story.id === selectedProfile?.id,
                'transition-all duration-300 ease-in-out opacity-50	': true,
              }"
            /> </template
          ><UserOpnionComponent
            :imgs-src="selectedProfile.company"
            :comment="selectedProfile.comment"
          />
        </transition-group>
      </div>

      <div class="flex gap-2 mt-4">
        <button
          v-for="story in stories"
          :key="story.id"
          @click="selectProfile(story.id)"
          class="w-3 h-3 rounded-full transition-all duration-300 opacity-50"
          :class="{
            'bg-gray-800 scale-125': story.id === selectedProfile?.id,
            'bg-gray-400 hover:bg-gray-600': story.id !== selectedProfile?.id,
          }"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import UserProfileComponent from "@/components/UI/User/UserProfileComponent.vue";
import UserOpnionComponent from "../UI/User/UserOpnionComponent.vue";
import SemiCircleComponet from "@/components/UI/Illustrations/SemiCircleComponet.vue";
import Aven from "@/assets/Images/partners/Aven.png";
import Ideaa from "@/assets/Images/partners/Ideaa.png";
import Treva from "@/assets/Images/partners/Treva.png";
import Velocity from "@/assets/Images/partners/Velocity 9.png";
import live from "@/assets/Images/partners/Liva.png";
import { comment } from "postcss";
const Imgs = [Aven, Ideaa, Velocity, live, Treva];

interface Story {
  id: number;
  name: string;
  title: string;
  company: string;
  comment: string;
}

const stories = ref<Story[]>([
  {
    id: 1,
    name: "John Doe",
    company: Aven,
    title: "CEO of Aven",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Jane Smith",
    company: Ideaa,
    title: "CTO at TechCorp",
    comment:
      "The service exceeded our expectations! Their team delivered the project ahead of schedule with flawless execution. Highly recommended for innovative solutions.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    company: Velocity,
    title: "Sustainability Director",
    comment:
      "Working with them transformed our eco-friendly initiatives. Their expertise helped us reduce costs by 30% while maintaining quality standards.",
  },
  {
    id: 4,
    name: "Maria Garcia",
    company: live,
    title: "Head of Digital Transformation",
    comment:
      "A game-changer for our fintech projects. Their attention to detail and proactive communication made all the difference.",
  },
  {
    id: 5,
    name: "David Kim",
    company: Treva,
    title: "Lead Product Manager",
    comment:
      "From ideation to launch, their support was invaluable. The end product received a 95% satisfaction rate from our users.",
  },
]);

const selectedProfile = ref<Story>(stories.value[0]);

const centeredStories = computed<Story[]>(() => {
  const middleIndex = Math.floor(stories.value.length / 2);
  const selectedIndex = stories.value.findIndex(
    (s) => s.id === selectedProfile.value.id
  );

  if (selectedIndex === middleIndex) {
    return stories.value;
  }

  const reordered = [...stories.value];
  const selectedItem = reordered.splice(selectedIndex, 1)[0];
  reordered.splice(middleIndex, 0, selectedItem);

  return reordered;
});
const selectProfile = (id: number): void => {
  const profile = stories.value.find((s) => s.id === id);
  if (profile) {
    selectedProfile.value = profile;
  }
};
let autoSwitchInterval: number | null = null;

const startAutoSwitch = () => {
  autoSwitchInterval = window.setInterval(() => {
    const currentIndex = stories.value.findIndex(
      (s) => s.id === selectedProfile.value.id
    );
    const nextIndex = (currentIndex + 1) % stories.value.length;
    selectedProfile.value = stories.value[nextIndex];
  }, 5000);
};

const pauseAutoSwitch = () => {
  if (autoSwitchInterval !== null) {
    clearInterval(autoSwitchInterval);
    autoSwitchInterval = null;
  }
};

const resumeAutoSwitch = () => {
  if (autoSwitchInterval === null) {
    startAutoSwitch();
  }
};

onMounted(startAutoSwitch);
onUnmounted(() => {
  if (autoSwitchInterval !== null) {
    clearInterval(autoSwitchInterval);
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
