<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import LargeViewcard from './LargeViewcard.vue';

const route = useRoute();
const router = useRouter();

const imgPath = '/projectImg/';

const allNews = [
  {
    id: 0,
    imageSrc: `${imgPath}1.jpg`,
    headline: 'Breaking News: Vue 3 is Awesome!',
    date: 'June 29, 2025',
    category: 'Technology',
    tags: ['Vue', 'JavaScript', 'Framework'],
    description: `Vue 3 is a progressive JavaScript framework...
It introduces the Composition API for better code organization and reuse.`,
  },
  {
    id: 1,
    imageSrc: `${imgPath}2.jpg`,
    headline: 'Nature Discovery Shocks Scientists',
    date: 'June 28, 2025',
    category: 'Science',
    tags: ['Discovery', 'Amazon', 'Frog'],
    description: `Scientists recently discovered a new species of frog in the Amazon rainforest...`,
  },
  {
    id: 2,
    imageSrc: `${imgPath}3.jpg`,
    headline: 'Tech Giants Face Regulations',
    date: 'June 27, 2025',
    category: 'Business',
    tags: ['Regulations', 'Tech', 'Antitrust'],
    description: 'Governments globally are uniting to bring antitrust laws...',
  },
  {
    id: 3,
    imageSrc: `${imgPath}4.jpg`,
    headline: 'Climate Change: What’s Next?',
    date: 'June 26, 2025',
    category: 'Environment',
    tags: ['Climate', 'Global Warming', 'Environment'],
    description: 'Experts warn that global warming may exceed 2°C...',
  },
  {
    id: 4,
    imageSrc: `${imgPath}5.jpg`,
    headline: 'Vue 3 Internals Revealed',
    date: 'June 25, 2025',
    category: 'Technology',
    tags: ['Vue', 'Internals', 'Reactivity'],
    description: 'In-depth analysis of Vue 3’s reactivity system...',
  },
];

const categories = [...new Set(allNews.map(post => post.category))];
const tags = [...new Set(allNews.flatMap(post => post.tags))];
const searchTerm = ref('');
const selectedPost = ref(null);

const filteredPosts = computed(() => {
  const keyword = searchTerm.value.toLowerCase();
  if (!keyword) return allNews;
  return allNews.filter(
    post =>
      post.headline.toLowerCase().includes(keyword) ||
      post.category.toLowerCase().includes(keyword) ||
      post.tags.some(tag => tag.toLowerCase().includes(keyword))
  );
});

const recentPosts = computed(() =>
  filteredPosts.value
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10)
);

function selectPost(post) {
  router.push({ name: 'BlogDetails', params: { id: post.id } });
}

function filterByCategory(cat) {
  searchTerm.value = cat;
  const post = allNews.find(p => p.category === cat);
  if (post) selectPost(post);
}

function filterByTag(tag) {
  searchTerm.value = tag;
  const post = allNews.find(p => p.tags.includes(tag));
  if (post) selectPost(post);
}

// Watch route param and update selected post
watch(
  () => route.params.id,
  newId => {
    const nid = parseInt(newId);
    selectedPost.value = allNews.find(post => post.id === nid) || null;
  },
  { immediate: true }
);

// Optional: Auto-switch post on search
watch(searchTerm, () => {
  const post = filteredPosts.value[0];
  if (post && (!selectedPost.value || selectedPost.value.id !== post.id)) {
    selectedPost.value = post;
  }
});

const title = 'Blog Single Post';
</script>

<template>
  <div class="mt-10">
    <!-- Header -->
    <div class="text-center m-20 font-serif">
      <h2 class="font-semibold text-3xl">{{ title }}</h2>
      <ul class="flex justify-center gap-2 mt-5 text-sm">
        <li><router-link class="text-emerald-300" to="/">Home</router-link></li>
        /
        <li>
          <router-link class="text-emerald-300" to="/news">News</router-link>
        </li>
        /
        <li><span>Single Post</span></li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="py-10 px-6 min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Left Column: Full Post -->
      <div class="col-span-12 lg:col-span-8">
        <template v-if="selectedPost">
          <LargeViewcard
            :image-src="selectedPost.imageSrc"
            :headline="selectedPost.headline"
            :date="selectedPost.date"
            :category="selectedPost.category"
            :description="selectedPost.description"
          />
        </template>
        <template v-else>
          <p class="text-red-500">News not found or invalid ID.</p>
        </template>
      </div>

      <!-- Right Sidebar -->
      <div class="col-span-12 lg:col-span-4 space-y-8 lg:sticky lg:top-10">
        <!-- Search -->
        <div>
          <h4 class="font-bold text-lg mb-2">Search</h4>
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Search posts, categories, or tags..."
            class="w-full border px-3 py-2 rounded shadow-sm focus:outline-none"
          />
        </div>

        <!-- Recent Posts -->
        <div>
          <h4 class="font-bold text-lg mb-2">Recent Posts</h4>
          <ul class="max-h-64 overflow-y-auto space-y-2">
            <li
              v-for="post in recentPosts"
              :key="post.id"
              class="cursor-pointer text-sm border-b pb-1 hover:text-blue-600"
              :class="{ 'font-semibold': selectedPost?.id === post.id }"
              @click="selectPost(post)"
            >
              <span>{{ post.headline }}</span
              ><br />
              <span class="text-gray-500 text-xs">{{ post.date }}</span>
            </li>
            <li v-if="recentPosts.length === 0" class="text-gray-500 italic">
              No posts found.
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h4 class="font-bold text-lg mb-2">Categories</h4>
          <ul class="list-disc list-inside space-y-1 text-sm">
            <li
              v-for="cat in categories"
              :key="cat"
              class="cursor-pointer hover:text-blue-600"
              @click="filterByCategory(cat)"
            >
              {{ cat }}
            </li>
          </ul>
        </div>

        <!-- Tags -->
        <div>
          <h4 class="font-bold text-lg mb-2">Tags</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in tags"
              :key="tag"
              class="cursor-pointer text-xs bg-gray-200 px-2 py-1 rounded-full hover:bg-gray-300"
              @click="filterByTag(tag)"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
