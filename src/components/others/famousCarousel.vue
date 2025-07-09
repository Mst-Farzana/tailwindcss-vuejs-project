<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';

const femousMembers = [
  {
    image: '/team/lawn-team01.jpg',
    name: 'Someone Famous 1',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptate quasi nobis obcaecati, iusto tenetur necessitatibus eos ad eaque aspernatur maiores aliquid commodi quos quibusdam aliquam, repellendus quidem quisquam! Impedit alias minus ab cumque quidem tenetur, eos, voluptates distinctio voluptatibus atque aspernatur a eum vero et nesciunt sit sed ratione.`,
  },
  {
    image: '/team/lawn-team02.jpg',
    name: 'Someone Famous 2',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptate quasi nobis obcaecati, iusto tenetur necessitatibus eos ad eaque aspernatur maiores aliquid commodi quos quibusdam aliquam, repellendus quidem quisquam! Impedit alias minus ab cumque quidem tenetur, eos, voluptates distinctio voluptatibus atque aspernatur a eum vero et nesciunt sit sed ratione.`,
  },
  {
    image: '/team/lawn-team03.jpg',
    name: 'Someone Famous 3',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptate quasi nobis obcaecati, iusto tenetur necessitatibus eos ad eaque aspernatur maiores aliquid commodi quos quibusdam aliquam, repellendus quidem quisquam! Impedit alias minus ab cumque quidem tenetur, eos, voluptates distinctio voluptatibus atque aspernatur a eum vero et nesciunt sit sed ratione.`,
  },
];

const activeIndex = ref(0);
const slideDirection = ref(1); // 1: left, -1: right
const skipAnimation = ref(false);
let autoplayTimer = null;

function selectIndex(index) {
  stopAutoplay();
  slideDirection.value = index > activeIndex.value ? 1 : -1;
  skipAnimation.value = true;
  activeIndex.value = index;

  nextTick(() => {
    skipAnimation.value = false;
  });

  startAutoplay();
}

function startAutoplay() {
  if (autoplayTimer) return;
  autoplayTimer = setInterval(() => {
    slideDirection.value = 1;
    activeIndex.value = (activeIndex.value + 1) % femousMembers.length;
  }, 4000);
}

function stopAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = null;
}

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  const threshold = 50;

  if (touchEndX < touchStartX - threshold) {
    slideDirection.value = 1;
    skipAnimation.value = false;
    activeIndex.value = (activeIndex.value + 1) % femousMembers.length;
  } else if (touchEndX > touchStartX + threshold) {
    slideDirection.value = -1;
    skipAnimation.value = false;
    activeIndex.value =
      (activeIndex.value - 1 + femousMembers.length) % femousMembers.length;
  }
}

onMounted(() => startAutoplay());
onBeforeUnmount(() => stopAutoplay());
</script>

<template>
  <div
    class="bg-dots-pattern py-24 px-6 flex flex-col items-center relative mt-30"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <!-- Quote Icon -->
    <div class="absolute top-20 left-1/2 transform -translate-x-1/2">
      <i class="fa-solid fa-quote-left text-4xl text-emerald-400"></i>
    </div>

    <!-- Testimonial Card -->
    <div
      class="bg-white w-full max-w-4xl rounded-lg border-3 border-gray-300 shadow px-10 py-16 text-center mt-10 hover:border-emerald-400 overflow-hidden relative"
      style="min-height: 350px"
    >
      <!-- Slide Content -->
      <transition
        :name="
          !skipAnimation
            ? slideDirection === 1
              ? 'slide-left'
              : 'slide-right'
            : ''
        "
        mode="out-in"
      >
        <div
          :key="`slide-${activeIndex}-${skipAnimation}`"
          class="absolute inset-0 px-25 min-h-[300px] flex flex-col justify-center items-center"
        >
          <p class="text-gray-600 text-md leading-relaxed mb-2">
            {{ femousMembers[activeIndex].description }}
          </p>
          <h4 class="text-gray-500 text-sm font-semibold mb-10">
            — {{ femousMembers[activeIndex].name }}
          </h4>
        </div>
      </transition>

      <div
        class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4 z-10"
      >
        <button
          v-for="(member, i) in femousMembers"
          :key="i"
          @click="selectIndex(i)"
          :class="[
            'rounded-full border-4 transition-all duration-300',
            activeIndex === i
              ? 'border-emerald-400'
              : 'border-gray-300 grayscale hover:border-emerald-300',
          ]"
        >
          <img
            :src="member.image"
            :alt="member.name"
            class="w-10 h-10 object-cover rounded-full cursor-pointer"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-dots-pattern {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 5px 5px;
  color: #ddd;
}

/* Slide Left */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
  position: absolute;
  width: 100%;
}
.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide Right */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
  position: absolute;
  width: 100%;
}
.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
