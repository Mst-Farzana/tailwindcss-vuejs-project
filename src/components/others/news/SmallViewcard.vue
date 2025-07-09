<script setup>
defineProps({
  news: {
    type: Object,
    required: true,
  },
});

// Optional JS fallback if Tailwind’s line-clamp plugin is not used
function shortDescription(text) {
  return text?.split(' ').slice(0, 20).join(' ') + '...';
}
</script>

<template>
  <router-link
    :to="{ name: 'BlogDetails', params: { id: news.id } }"
    class="block"
  >
    <div>
      <!-- News Thumbnail -->
      <img
        :src="news.imageSrc"
        :alt="news.headline"
        class="w-full h-40 object-cover"
      />

      <!-- Content -->
      <div class="bg-white rounded p-4 pb-5">
        <h3 class="font-semibold text-sm mb-1 line-clamp-1">
          {{ news.headline }}
        </h3>
        <p class="text-sm text-gray-500">{{ news.date }}</p>
        <p class="text-xs text-blue-500">{{ news.category }}</p>

        <!-- Description -->
        <p class="text-sm text-gray-700 mt-2 line-clamp-2">
          {{ news.description }}
        </p>

        <!-- ❗ Fallback without Tailwind line-clamp -->
        <!-- <p class="text-sm text-gray-700 mt-2">
          {{ shortDescription(news.description) }}
        </p> -->
      </div>
    </div>
  </router-link>
</template>
