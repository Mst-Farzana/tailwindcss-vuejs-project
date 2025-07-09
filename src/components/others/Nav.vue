<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const display = ref(false);
let closeTimeout = null;

const toggleDropdown = () => {
  clearTimeout(closeTimeout);
  display.value = !display.value;
};

const openDropdown = () => {
  clearTimeout(closeTimeout);
  display.value = true;
};

const startCloseTimeout = () => {
  clearTimeout(closeTimeout);
  closeTimeout = setTimeout(() => {
    display.value = false;
  }, 2000);
};

const onClickOutside = event => {
  const dropdown = document.getElementById('dropdown-menu');
  const trigger = document.getElementById('pages-menu');
  if (
    dropdown &&
    !dropdown.contains(event.target) &&
    trigger &&
    !trigger.contains(event.target)
  ) {
    display.value = false;
    clearTimeout(closeTimeout);
  }
};

onMounted(() => {
  document.addEventListener('click', onClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside);
  clearTimeout(closeTimeout);
});
</script>

<template>
  <div
    id="topMenu"
    class="w-full grid grid-rows-1 grid-flow-col sticky top-0 items-center h-15 bg-white mt-2 border-b border-gray-300 z-50"
  >
    <div class="logo col-span-2 col-start-4">
      <router-link to="/">
        <img src="/logo.png" height="80" width="100" />
      </router-link>
    </div>

    <div class="col-span-9 text-[15px] font-bold">
      <ul class="flex items-center justify-center gap-10">
        <li>
          <router-link to="/" class="mt-4 hover:text-sky-400">HOME</router-link>
        </li>
        <li>
          <router-link to="/about" class="mt-4 hover:text-sky-400"
            >ABOUT</router-link
          >
        </li>
        <li>
          <router-link to="/service" class="mt-4 hover:text-sky-400"
            >SERVICE</router-link
          >
        </li>
        <li>
          <router-link to="/projects" class="mt-4 hover:text-sky-400"
            >OUR PROJECTS</router-link
          >
        </li>
        <li>
          <router-link to="/team" class="mt-4 hover:text-sky-400"
            >TEAM</router-link
          >
        </li>
        <li>
          <router-link to="/prices" class="mt-4 hover:text-sky-400"
            >PRICES</router-link
          >
        </li>
        <li>
          <router-link to="/news" class="mt-4 hover:text-sky-400"
            >NEWS</router-link
          >
        </li>

        <!-- Dropdown -->
        <li
          class="relative"
          @mouseenter="openDropdown"
          @mouseleave="startCloseTimeout"
        >
          <span
            id="pages-menu"
            class="mt-4 hover:text-sky-400 cursor-pointer select-none"
            @click.stop="toggleDropdown"
          >
            PAGES
          </span>

          <ul
            v-if="display"
            id="dropdown-menu"
            class="ml-auto border-t-2 w-48 absolute top-7 bg-white shadow-lg z-20"
            @mouseenter="openDropdown"
            @mouseleave="startCloseTimeout"
          >
            <li class="hover:bg-cyan-400 hover:text-white p-3">
              <router-link to="/pages/page1" @click="display = false"
                >page with contact</router-link
              >
            </li>
            <li
              class="hover:bg-cyan-400 hover:text-white p-3 border-y border-gray-300"
            >
              <router-link to="/pages/page2" @click="display = false"
                >portfolio grid 3</router-link
              >
            </li>
            <li class="hover:bg-cyan-400 hover:text-white p-3">
              <router-link to="/pages/page3" @click="display = false"
                >portfolio with space</router-link
              >
            </li>
            <li
              class="hover:bg-cyan-400 hover:text-white p-3 border-y border-gray-300"
            >
              <router-link to="/pages/page4" @click="display = false"
                >Single portfolio</router-link
              >
            </li>
            <li class="hover:bg-cyan-400 hover:text-white p-3">
              <router-link to="/pages/page5" @click="display = false"
                >portfolio default</router-link
              >
            </li>
          </ul>
        </li>

        <li>
          <router-link to="/contact" class="mt-4 hover:text-sky-400"
            >CONTACT</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.select-none {
  user-select: none;
}
</style>
