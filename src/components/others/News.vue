<script setup>
import SmallViewcard from './news/SmallViewcard.vue';
import LargeViewcard from './news/LargeViewcard.vue';

// ✅ Use correct public base path for GitHub Pages deployment
const imgBasePath = import.meta.env.BASE_URL;

const title = 'BLOG NEWS';
const projectLine1 = 'Check Our Cool';
const projectLine2 = 'Latest Blog News Articles';

const newsItems = [
  {
    id: 0,
    imageSrc: `${imgBasePath}1.jpg`,
    headline: 'Breaking News: Vue 3 is Awesome!',
    date: 'June 29, 2025',
    category: 'Technology',
    description: `Vue 3 is a progressive JavaScript framework for building user interfaces.
It introduces the Composition API for better code organization and reuse.
Performance improvements include a faster virtual DOM and smaller bundle sizes.
Vue 3 offers built-in TypeScript support, enhancing scalability and maintainability.
New features like Teleport and Suspense improve flexibility and asynchronous rendering.`,
  },
  {
    id: 1,
    imageSrc: `${imgBasePath}2.jpg`,
    headline: 'Nature Discovery Shocks Scientists',
    date: 'June 28, 2025',
    category: 'Science',
    description: `Scientists recently discovered a new species of frog in the Amazon rainforest. It introduces the Composition API for better code organization and reuse.
Performance improvements include a faster virtual DOM and smaller bundle sizes.
Vue 3 offers built-in TypeScript support, enhancing scalability and maintainability.`,
  },
  {
    id: 2,
    imageSrc: `${imgBasePath}3.jpg`,
    headline: 'Tech Giants Face Regulations and update version',
    date: 'June 27, 2025',
    category: 'Business',
    description: 'Governments globally are uniting to bring antitrust laws...',
  },
  {
    id: 3,
    imageSrc: `${imgBasePath}4.jpg`,
    headline: 'Climate Change: What’s Next?',
    date: 'June 26, 2025',
    category: 'Environment',
    description:
      'Experts warn that global warming may exceed 2°C if urgent actions aren’t taken.',
  },
  {
    id: 4,
    imageSrc: `${imgBasePath}5.jpg`,
    headline: 'Vue 3 Internals Revealed',
    date: 'June 25, 2025',
    category: 'Technology',
    description:
      'In-depth analysis of Vue 3’s reactivity system and performance benchmarks.',
  },
];

const largeCard = newsItems[0];
const smallCards = newsItems.slice(1);
</script>

<template>
  <div class="bg-cyan-50 px-4 mt-10">
    <!-- Header -->
    <div class="text-center font-serif tracking-wider mb-10">
      <h3 class="text-[10px] uppercase mb-2">{{ title }}</h3>
      <p class="text-2xl font-semibold">
        {{ projectLine1 }}<br />{{ projectLine2 }}
      </p>
      <div class="h-10 w-20 mx-auto my-3">
        <!-- ✅ Also make line image use public path -->
        <img :src="`${imgBasePath}line.png`" alt="decorative line" />
      </div>
      <p class="text-sm text-gray-600 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        nihil...
      </p>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Left Grid -->
      <div
        class="col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 lg:ps-10"
      >
        <SmallViewcard
          v-for="(news, index) in smallCards"
          :key="index"
          :news="news"
        />
      </div>

      <!-- Right Large Feature -->
      <div class="col-span-12 lg:col-span-6 px-2">
        <LargeViewcard
          :image-src="largeCard.imageSrc"
          :headline="largeCard.headline"
          :date="largeCard.date"
          :category="largeCard.category"
          :description="largeCard.description"
        />
      </div>
    </div>
  </div>
</template>
