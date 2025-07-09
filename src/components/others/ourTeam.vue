<script setup>
import { ref } from 'vue';
import TeamImg from './team/teamImg.vue'; // Make sure this path is correct relative to this file

const title = ref('Our Team');
const projectLine1 = 'See Our Best Team';
const projectLine2 = 'Members who will offer support';
</script>

<template>
  <div>
    <div class="text-center font-serif h-full pt-20 tracking-wider">
      <h3 class="text-[10px] mt-2 mb-2 uppercase">{{ title }}</h3>
      <p class="text-2xl font-semibold">
        {{ projectLine1 }}
        <br />
        {{ projectLine2 }}
      </p>
      <div class="h-10 w-20 mx-auto contrast-150">
        <img src="/line.png" alt="decorative line" />
      </div>
      <p class="text-center text-sm px-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus nihil
        laudantium, consequatur temporibus <br />
        dolorem totam iste atque inventore sequi sed debitis, nobis corporis
        aliquam odio maiores.
      </p>
    </div>

    <!-- Removed empty div -->

    <!-- Team images or profiles -->
    <TeamImg />
  </div>
</template>

<style scoped>
/* Add your styles here if needed */
</style>
