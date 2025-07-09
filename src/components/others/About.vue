<script setup>
import { ref } from 'vue';
import conpage from './about/conpage.vue';

const visible = ref(Array(8).fill(false));

function show(index) {
  visible.value[index] = true;
}

function hide(index) {
  visible.value[index] = false;
}
</script>

<template>
  <div>
    <conpage />
    <div class="grid grid-cols-1 sm:grid-cols-4 text-sm">
      <!-- Block 0: Static Text -->
      <div class="p-6 hover:border-b-2 hover:border-emerald-400">
        <div class="m-6">
          <h1 class="font-bold mb-2">About Us</h1>
          <p class="text-sm text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque et non erat.
          </p>
        </div>
      </div>

      <!-- Block 1: Image with overlay on hover -->
      <div
        class="relative cursor-pointer"
        @mouseenter="show(1)"
        @mouseleave="hide(1)"
      >
        <img src="/img_top01.jpg" alt="Image 1" class="mb-2" />
        <transition name="fade">
          <div
            v-if="visible[1]"
            class="absolute inset-0 bg-emerald-600/80 flex items-center justify-center p-6 text-white text-sm animate-slide-fade delay-100"
          >
            <div class="m-6 font-semibold mb-3">
              <h1 class="slide-down-enter-fixed font-bold mb-2">
                Eassy and First
              </h1>
              <p
                v-for="(line, idx) in [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.',
                ]"
                :key="idx"
                class="slide-line-enter-exit text-sm text-start"
                :style="{ 'animation-delay': idx * 0.2 + 's' }"
              >
                {{ line }}
              </p>
            </div>
          </div>
        </transition>
      </div>

      <!-- Block 2: Static Text -->
      <div class="p-6 hover:border-b-2 hover:border-emerald-400">
        <div class="m-6">
          <h1 class="font-bold mb-2">Who We Are</h1>
          <p class="text-sm text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque et non erat.
          </p>
        </div>
      </div>

      <!-- Block 3: Image with overlay on hover -->
      <div
        class="relative cursor-pointer"
        @mouseenter="show(3)"
        @mouseleave="hide(3)"
      >
        <img src="/img_top02.jpg" alt="Image 2" class="top-0 bottom-1" />
        <transition name="fade">
          <div
            v-if="visible[3]"
            class="absolute inset-0 bg-emerald-600/80 flex items-center justify-center p-6 text-white text-sm animate-slide-fade delay-100"
          >
            <div class="m-6">
              <h1 class="slide-down-enter-fixed font-semibold mb-2">
                Eassy and First
              </h1>
              <p
                v-for="(line, idx) in [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.',
                ]"
                :key="idx"
                class="slide-line-enter-exit text-sm text-start"
                :style="{ 'animation-delay': idx * 0.2 + 's' }"
              >
                {{ line }}
              </p>
            </div>
          </div>
        </transition>
      </div>

      <!-- Block 4: Image with overlay on hover -->
      <div
        class="relative cursor-pointer col-start-4"
        @mouseenter="show(4)"
        @mouseleave="hide(4)"
      >
        <img src="/img_top03.jpg" alt="Image 3" />
        <transition name="fade">
          <div
            v-if="visible[4]"
            class="absolute inset-0 bg-emerald-600/80 flex items-center justify-center p-6 text-white text-sm top-0 -bottom-6 animate-slide-fade delay-100"
          >
            <div class="m-6">
              <h1 class="slide-down-enter-fixed font-semibold mb-2">
                Eassy and First
              </h1>
              <p
                v-for="(line, idx) in [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.',
                ]"
                :key="idx"
                class="slide-line-enter-exit text-sm text-start"
                :style="{ 'animation-delay': idx * 0.2 + 's' }"
              >
                {{ line }}
              </p>
            </div>
          </div>
        </transition>
      </div>

      <!-- Block 5: Static Text -->
      <div class="p-6 hover:border-b-2 hover:border-emerald-400">
        <div class="m-6">
          <h1 class="font-bold mb-2">Why Us</h1>
          <p class="text-sm text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque et non erat.
          </p>
        </div>
      </div>

      <!-- Block 6: Image with overlay on hover -->
      <div
        class="relative cursor-pointer"
        @mouseenter="show(6)"
        @mouseleave="hide(6)"
      >
        <img src="/img_top04.jpg" alt="Image 4" />
        <transition name="fade">
          <div
            v-if="visible[6]"
            class="absolute inset-0 bg-emerald-600/80 flex items-center justify-center p-6 text-white text-sm top-0 bottom-1 animate-slide-fade delay-100"
          >
            <div class="m-6">
              <h1 class="slide-down-enter-fixed font-semibold mb-2">
                Eassy and First
              </h1>
              <p
                v-for="(line, idx) in [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.',
                ]"
                :key="idx"
                class="slide-line-enter-exit text-sm text-start"
                :style="{ 'animation-delay': idx * 0.2 + 's' }"
              >
                {{ line }}
              </p>
            </div>
          </div>
        </transition>
      </div>

      <!-- Block 7: Static Text -->
      <div class="p-6 hover:border-b-2 hover:border-emerald-400">
        <div class="m-6">
          <h1 class="font-bold mb-2">Our Goals</h1>
          <p class="text-sm text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque et non erat.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Fixed h1 slide down on enter */
@keyframes slideDownFixed {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-down-enter-fixed {
  animation: slideDownFixed 0.5s ease forwards;
}

/* p lines slide in/out line by line from top */
@keyframes slideLineEnter {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideLineLeave {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}

/* Use animation for enter and leave */
.slide-line-enter-exit {
  animation-fill-mode: forwards;
  animation-duration: 0.4s;
  animation-timing-function: ease;
  animation-name: slideLineEnter;
}

/* Override leave animation */
.slide-line-enter-exit-leave-to {
  animation-name: slideLineLeave !important;
}
</style>
