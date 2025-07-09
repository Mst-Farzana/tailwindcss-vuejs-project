<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      link: 'https://www.google.com/',
    };
  },
};
</script>

<template>
  <div class="">
    <div
      id="home"
      class="h-screen bg-cover bg-no-repeat bg-center pt-20 ps-15 bg-fixed"
    >
      <h1 class="text-6xl font-bold tracking-wide mb-4">
        Better Design Experiences
        <br />
        On Any Devices
      </h1>
      <p class="pt-10">
        <a
          :href="link"
          target="_blank"
          class="btn w-40 h-10 px-8 py-4 uppercase text-white bg-emerald-400 rounded-full transition duration-200 ease-in-out hover:bg-emerald-300 hover:text-white"
        >
          Get Start</a
        >
      </p>
    </div>
  </div>
</template>
<style scoped>
#home {
  background-image: url('/heropic.jpg');
  background-repeat: no-repeat;
}
</style>
