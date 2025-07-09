<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section
    class="h-screen bg-cover bg-center bg-no-repeat bg-fixed font-mono font-semibold p-10"
    style="background-image: url('/conbg-img.jpg')"
  >
    <div class="flex flex-col items-center justify-center text-center pt-20">
      <span class="text-teal-400 text-sm uppercase tracking-wider mb-2">
        Stunning Websites
      </span>
      <h1
        class="text-white text-6xl sm:text-5xl lg:text-2xl font-bold mb-6 tracking-widest"
      >
        Create cool website quickly<br />for your clients.
      </h1>

      <RouterLink
        to="/contact"
        aria-label="Contact Us"
        class="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-emerald-400 hover:text-white transition"
      >
        Contact Us
      </RouterLink>
    </div>
  </section>
</template>
