<script setup>
import { ref, computed } from 'vue';

// Projects data with fixed image paths (from public folder)
const projects = ref([
  { id: 1, category: 'Branding', src: './1.jpg', alt: 'Project 1' },
  { id: 2, category: 'Web', src: './2.jpg', alt: 'Project 2' },
  { id: 3, category: 'Package', src: './3.jpg', alt: 'Project 3' },
  { id: 4, category: 'Video', src: './4.jpg', alt: 'Project 4' },
  { id: 5, category: 'Branding', src: './5.jpg', alt: 'Project 5' },
  { id: 6, category: 'Web', src: './6.jpg', alt: 'Project 6' },
  { id: 7, category: 'Package', src: './7.jpg', alt: 'Project 7' },
  { id: 8, category: 'Package', src: './8.jpg', alt: 'Project 8' },
]);

// Categories
const categories = ['ALL', 'Branding', 'Web', 'Package', 'Video'];
const selectedCategory = ref('ALL');

// Filter projects based on selected category
const filteredProjects = computed(() =>
  selectedCategory.value === 'ALL'
    ? projects.value
    : projects.value.filter(p => p.category === selectedCategory.value)
);

// Titles
const title = ref('LATEST PROJECTS');
const projectLine1 = 'Our Latest Projects';
const projectLine2 = 'Made for Our Top Clients';

// Select category handler
const selectCategory = category => {
  selectedCategory.value = category;
};
</script>

<template>
  <div>
    <!-- Heading Section -->
    <div class="text-center font-serif h-full pt-20 tracking-wider">
      <h3 class="text-[10px] mt-2 mb-2">{{ title }}</h3>
      <p class="text-2xl font-semibold">
        {{ projectLine1 }}<br />{{ projectLine2 }}
      </p>
      <div class="h-10 w-20 mx-auto contrast-150">
        <!-- line.png must be placed inside public/ folder -->
        <img src="/line.png" alt="decorative line" />
      </div>
    </div>

    <!-- Category Filter -->
    <div class="text-center mt-10 mb-10 font-serif text-[13px] font-semibold">
      <ul class="flex justify-center gap-10">
        <li
          v-for="category in categories"
          :key="category"
          :class="[
            'cursor-pointer transition-all duration-300',
            selectedCategory === category
              ? 'underline underline-offset-12 decoration-sky-400 text-sky-400'
              : 'hover:underline underline-offset-12 decoration-sky-400 hover:text-sky-400',
          ]"
          @click="selectCategory(category)"
        >
          {{ category.toUpperCase() }}
        </li>
      </ul>
    </div>

    <!-- Project Grid -->
    <div class="grid grid-cols-4">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="relative group shadow hover:shadow-lg cursor-pointer"
      >
        <!-- Overlay on hover -->
        <div
          class="absolute inset-0 bg-black bg-opacity-0 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-80 group-hover:animate-fadeIn transition-all duration-500"
        >
          <h4
            class="text-[10px] mb-2 transition-all duration-500 group-hover:translate-y-1 group-hover:scale-110 group-hover:text-emerald-300"
          >
            {{ project.category }}
          </h4>

          <p
            class="text-xl font-semibold transition-all duration-500 group-hover:translate-y-1 group-hover:scale-110 group-hover:text-white"
          >
            Portfolio Title
          </p>

          <div class="mt-4 flex gap-3">
            <a href="#">
              <i
                class="fa-solid fa-eye bg-emerald-400 rounded-full p-3 text-xs transition-all duration-500 hover:text-black hover:bg-white group-hover:scale-110 group-hover:text-white"
              ></i>
            </a>
            <a href="#">
              <i
                class="fa-solid fa-link bg-emerald-400 rounded-full p-3 text-xs transition-all duration-500 hover:text-black hover:bg-white group-hover:scale-110 group-hover:text-white"
              ></i>
            </a>
          </div>
        </div>

        <!-- Project Image -->
        <img :src="project.src" :alt="project.alt" class="w-full h-auto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  25% {
    opacity: 0.25;
    transform: scale(1.5);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.25);
  }
  75% {
    opacity: 0.75;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
