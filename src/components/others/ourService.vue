<template>
  <div class="maindiv">
    <div class="text-center font-serif h-full pt-20 tracking-wider">
      <h3 class="text-[11px] p-2">BRANDING LOGO COMPANY</h3>
      <p class="text-2xl font-semibold">
        We Craft Experiences<br />
        With little help from the best
      </p>
      <div class="h-10 w-20 mx-auto contrast-150">
        <img src="/line.png" alt="decorative line" />
      </div>
    </div>

    <!-- Grid updated to 4 columns and 2 rows -->
    <div class="grid grid-cols-4 grid-rows-2 gap-6 m-4 justify-center">
      <div
        v-for="(box, index) in boxes"
        :key="index"
        class="text-center text-sm p-2 pt-8 pb-8 bg-white border border-gray-300 relative h-[280px] w-[250px] hover:border-emerald-300"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
      >
        <span
          :class="[
            'transition-all duration-500 ease-in-out animate-pulse border-y-6 border-y-emerald-400 absolute top-0 left-5',
            activeIndex === index ? 'w-41' : 'border-y-transparent mx-2 w-0',
          ]"
          style="height: 280px"
        ></span>

        <i
          :class="[
            box.icon,
            'text-2xl text-white bg-emerald-300 rounded-full p-4 ',
          ]"
        ></i>

        <h3 :class="{ hidden: activeIndex === index }" class="font-black">
          Modern &amp; flexible
        </h3>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with it.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      boxes: [
        { icon: 'fa-solid fa-trophy' },
        { icon: 'fa-solid fa-shield-halved' },
        { icon: 'fa-solid fa-palette' },
        { icon: 'fa-solid fa-chart-line' },
        { icon: 'fa-solid fa-mobile-screen' },
        { icon: 'fa-solid fa-cloud' },
        { icon: 'fa-solid fa-headset' },
        { icon: 'fa-solid fa-rocket' },
      ],
    };
  },
  methods: {
    handleMouseEnter(index) {
      this.activeIndex = index;
    },
    handleMouseLeave() {
      this.activeIndex = null;
    },
  },
};
</script>
