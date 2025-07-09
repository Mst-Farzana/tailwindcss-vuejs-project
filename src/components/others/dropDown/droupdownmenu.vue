<script setup>
import { ref } from 'vue';
import page1 from './page1.vue';
import page2 from './page2.vue';
import page3 from './page3.vue';
import page4 from './page4.vue';
import page5 from './page5.vue';

const pages = [
  { label: 'Page 1', component: page1 },
  { label: 'Page 2', component: page2 },
  { label: 'Page 3', component: page3 },
  { label: 'Page 4', component: page4 },
  { label: 'Page 5', component: page5 },
];

const currentPageIndex = ref(0);
</script>

<template>
  <div>
    <select v-model="currentPageIndex" class="border p-2 rounded mb-4">
      <option v-for="(page, i) in pages" :key="i" :value="i">
        {{ page.label }}
      </option>
    </select>

    <component :is="pages[currentPageIndex].component" />
  </div>
</template>
