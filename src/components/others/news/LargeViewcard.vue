<script setup>
defineProps({
  imageSrc: String,
  headline: String,
  date: String,
  category: String,
  description: String,
});
</script>

<template>
  <div class="bg-white rounded shadow p-6">
    <!-- Featured Image -->
    <img
      :src="imageSrc"
      alt="Blog image"
      class="w-full h-64 object-cover rounded mb-4"
    />

    <!-- Date & Category -->
    <div class="text-gray-500 text-sm mb-2">{{ date }} | {{ category }}</div>

    <!-- Headline -->
    <h2 class="text-3xl font-bold mb-4">
      {{ headline }}
    </h2>

    <!-- Description -->
    <p class="text-gray-700 whitespace-pre-line">
      {{ description }}
    </p>
  </div>
</template>
