<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

import Home from './components/Home.vue';
import About from './components/others/About.vue';
import Nav from './components/others/Nav.vue';
import Service from './components/others/ourService.vue';
import Booking from './components/others/booking.vue';
import Projects from './components/others/Projects.vue';
import Team from './components/others/ourTeam.vue';
import Price from './components/others/Prices.vue';
import Carousel from './components/others/famousCarousel.vue';
import News from './components/others/News.vue';
import Contact from './components/others/Contact.vue';
import Footer from './components/others/Footer.vue';
import BlogDetails from './components/others/news/Blogdetails.vue';

const route = useRoute();

const homeComponents = [
  Home,
  Booking,
  Service,
  Projects,
  About,
  Team,
  Price,
  Carousel,
  News,
];

const componentsMap = {
  about: [About],
  service: [Service],
  booking: [Booking],
  projects: [Projects],
  team: [Team],
  prices: [Price], // Confirm your route is /prices
  famouscarousel: [Carousel], // Confirm spelling and route path
  news: [News],
  contact: [Contact],
  blogdetails: [BlogDetails],
};

const routeKey = computed(() => route.path.split('/')[1]?.toLowerCase() || '');
const isHome = computed(() => route.path === '/' || route.path === '/home');

const contactInfo = [
  {
    icon: 'fa-phone',
    text: '+1 (234) 567-890',
  },
  {
    icon: 'fa-clock',
    text: '228 Park Ave S, NY',
  },
];

const socialIcons = [
  { icon: 'fa-facebook-f' },
  { icon: 'fa-twitter' },
  { icon: 'fa-google-plus-g' },
  { icon: 'fa-pinterest' },
  { icon: 'fa-linkedin-in' },
  { icon: 'fa-instagram' },
];
</script>

<template>
  <div>
    <!-- Top Bar -->
    <div class="border-t border-b bg-white text-sm opacity-30">
      <div class="grid grid-cols-12 items-center px-4 h-10">
        <!-- Left Column -->
        <div
          class="col-span-12 md:col-span-4 flex items-center divide-x divide-gray-600 text-[15px] h-full"
        >
          <div class="w-12 h-full"></div>
          <div class="px-2 flex items-center h-full">
            <i class="fa-solid fa-phone mr-1"></i>
            <span>+1 (234) 567-890</span>
          </div>
          <div class="px-2 flex items-center h-full">
            <i class="fa-solid fa-clock mr-1"></i>
            <span>228 Park Ave S, NY</span>
          </div>
        </div>

        <div
          class="col-span-12 md:col-span-8 flex justify-start md:justify-end items-center text-gray-700 h-full"
        >
          <template v-for="(social, index) in socialIcons" :key="index">
            <div
              class="px-3 flex items-center h-full border-l border-r border-gray-600"
            >
              <i
                :class="`fa-brands ${social.icon} hover:text-emerald-600 hover:opacity-100`"
              ></i>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Sticky Nav -->
    <div class="sticky top-0 z-50 bg-white w-full shadow">
      <Nav />
    </div>

    <!-- Home: show all components -->
    <template v-if="isHome">
      <component
        v-for="(Comp, index) in homeComponents"
        :key="index"
        :is="Comp"
      />
    </template>

    <!-- Other routes: show matching component -->
    <template v-else>
      <component
        v-for="(Comp, index) in componentsMap[routeKey] || []"
        :key="index"
        :is="Comp"
      />
    </template>

    <!-- Footer -->

    <Footer />
  </div>
</template>
