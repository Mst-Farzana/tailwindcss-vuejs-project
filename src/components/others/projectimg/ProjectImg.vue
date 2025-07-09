<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const handleMouseEnter = index => {
  activeIndex.value = index;
};

const handleMouseLeave = () => {
  activeIndex.value = null;
};

const base = import.meta.env.BASE_URL;
const images = [
  `${base}1.jpg`,
  `${base}2.jpg`,
  `${base}3.jpg`,
  `${base}4.jpg`,
  `${base}5.jpg`,
  `${base}6.jpg`,
  `${base}7.jpg`,
  `${base}8.jpg`,
];
</script>

<template>
  <div class="grid grid-cols-4">
    <div
      v-for="(img, index) in images"
      :key="index"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
      class="relative"
    >
      <!-- Hover Overlay -->
      <div
        v-if="activeIndex === index"
        class="absolute inset-0 bg-black bg-opacity-50 text-white text-center flex flex-col justify-center items-center"
      >
        <h4 class="text-[10px] mt-2 mb-2">Branding</h4>
        <p class="text-2xl font-semibold">Portfolio Title</p>
        <ul class="m-4 flex justify-center">
          <li>
            <a :href="'#img' + index">
              <i
                class="fa-solid fa-eye text-white bg-emerald-400 rounded-full p-3 text-[10px] me-3 hover:text-black hover:bg-white"
              ></i>
            </a>
          </li>
          <li>
            <i
              class="fa-solid fa-link text-white bg-emerald-400 rounded-full p-3 text-[10px] hover:text-black hover:bg-white"
            ></i>
          </li>
        </ul>
      </div>

      <!-- Image -->
      <div :id="'img' + index">
        <img :src="img" class="w-full h-auto" />
      </div>
    </div>
  </div>
</template>
