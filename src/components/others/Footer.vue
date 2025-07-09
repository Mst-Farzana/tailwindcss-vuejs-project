<script setup>
import { ref } from 'vue';

// Newsletter form
const email = ref('');
const error = ref('');
const success = ref(false);

// Validate email
function validateEmail() {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email.value)) {
    error.value = 'Please enter a valid email address.';
    success.value = false;
  } else {
    error.value = '';
    success.value = true;
    console.log('Subscribed with:', email.value);
  }
  // ✅ Clear input box after submit
  email.value = '';
}

// Recent blog post data
const recentPosts = [
  {
    id: 1,
    title: 'Vue 3 Released',
    date: 'July 1, 2025',
    content: 'Full details about Vue 3 Released...',
  },
  {
    id: 2,
    title: 'JavaScript Trends',
    date: 'June 28, 2025',
    content: 'Latest JavaScript trends...',
  },
  {
    id: 3,
    title: 'AI in Web Dev',
    date: 'June 25, 2025',
    content: 'AI is transforming web development...',
  },
  {
    id: 4,
    title: 'Building with Tailwind',
    date: 'June 20, 2025',
    content: 'Tailwind CSS allows rapid styling...',
  },
];

const showPostModal = ref(false);
const activePost = ref(null);
function openPost(post) {
  activePost.value = post;
  showPostModal.value = true;
}
function closePostModal() {
  showPostModal.value = false;
  activePost.value = null;
}

// Gallery
const galleryImages = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
];

// Image modal
const showModal = ref(false);
const selectedImg = ref('');
function openImage(img) {
  selectedImg.value = img;
  showModal.value = true;
}
function closeModal() {
  showModal.value = false;
  selectedImg.value = '';
}

// Social stats
const socialStats = [
  {
    class: 'fa-brands fa-facebook-f',
    label: 'Likes',
    likes: '900',
    bgColor: 'bg-blue-600',
  },
  {
    class: 'fa-brands fa-twitter',
    label: 'Followers',
    likes: '3k',
    bgColor: 'bg-sky-500',
  },
  {
    class: 'fa-brands fa-google-plus-g',
    label: 'Recommendations',
    likes: '600',
    bgColor: 'bg-green-600',
  },
  {
    class: 'fa-brands fa-linkedin-in',
    label: 'Sales',
    likes: '1.1K',
    bgColor: 'bg-emerald-600',
  },
  {
    class: 'fa-solid fa-envelope',
    label: 'Mail',
    likes: '5k',
    bgColor: 'bg-cyan-600',
  },
  {
    class: 'fa-solid fa-globe',
    label: 'Projects',
    likes: '2k',
    bgColor: 'bg-red-600',
  },
];

// Footer links
const footerLinks = ['Blog', 'Portfolio', 'Contact'];
</script>

<template>
  <div class="bg-cyan-50 pt-20 border-b">
    <!-- Social Stats -->
    <div
      class="grid grid-cols-6 divide-x divide-y border border-gray-200 text-center divide-gray-200 h-30"
    >
      <div
        v-for="(icon, i) in socialStats"
        :key="i"
        class="relative p-6 cursor-pointer group"
      >
        <div class="flex items-center justify-center h-full w-full">
          <i
            :class="[
              icon.class,
              'text-gray-400 text-3xl',
              'group-hover:opacity-0',
              'transition-opacity duration-300',
            ]"
          />
        </div>
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 font-semibold space-y-1 rounded"
          :class="icon.bgColor"
        >
          <i :class="[icon.class, 'text-3xl']"></i>
          <span
            class="text-xs text-center leading-tight transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
          >
            {{ icon.likes }}<br />{{ icon.label }}
          </span>
        </div>
      </div>
    </div>

    <!-- Main Footer -->
    <div
      class="bg-black text-white py-12 px-6 grid grid-cols-1 lg:grid-cols-4 gap-10"
    >
      <!-- Newsletter -->
      <div>
        <h3 class="text-xl font-bold mb-4">Newsletter</h3>
        <p class="mb-4">
          Don’t miss to subscribe to our new feeds, products, projects, kindly
          fill the form below.
        </p>
        <input
          v-model="email"
          type="email"
          placeholder="Your mail"
          class="w-full bg-black text-white border border-gray-600 px-3 py-2 mb-2 focus:outline-none"
        />
        <button
          @click="validateEmail"
          class="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-sm mt-2"
        >
          Send
        </button>
        <p v-if="error" class="text-red-400 text-sm mt-2">{{ error }}</p>
        <p v-if="success" class="text-green-400 text-sm mt-2">
          Subscribed successfully!
        </p>
        <p class="text-sm text-gray-400 mt-4">* We promise we won’t spam.</p>
      </div>

      <!-- Recent Posts -->
      <div>
        <h3 class="text-xl font-bold mb-4">Recent Posts</h3>
        <ul class="space-y-3 text-sm">
          <li v-for="post in recentPosts" :key="post.id" class="pb-2">
            <p
              class="font-semibold cursor-pointer hover:underline"
              @click="openPost(post)"
            >
              {{ post.title }}
            </p>
            <p class="text-gray-400 text-xs">{{ post.date }}</p>
          </li>
        </ul>
      </div>

      <!-- Gallery -->
      <div>
        <h3 class="text-xl font-bold mb-4">Projects Gallery</h3>
        <div class="grid grid-cols-3 gap-2">
          <img
            v-for="(img, i) in galleryImages"
            :key="i"
            :src="img"
            alt="gallery"
            class="w-full h-20 object-cover rounded cursor-pointer"
            @click="openImage(img)"
          />
        </div>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-xl font-bold mb-4">Contact Us</h3>
        <div class="space-y-4 text-sm">
          <div class="flex items-start gap-2">
            <span>🏠</span>
            <p>
              <a
                href="https://maps.google.com/?q=32 Breaking Street, 2nd Cros, Newyork, USA 190210"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline"
              >
                32, Breaking Street,<br />2nd Cros, Newyork, USA 190210
              </a>
            </p>
          </div>
          <div>
            <p class="font-semibold">Call Us</p>
            <p>
              <a href="tel:+123456789018" class="hover:underline"
                >📞 +123 4567 89 018</a
              >
            </p>
          </div>
          <div>
            <p class="font-semibold">Mail Us</p>
            <p>
              <a href="mailto:Contact@Payo-Themes.Com" class="hover:underline"
                >📧 Contact@Payo-Themes.Com</a
              >
            </p>
          </div>
          <div>
            <p class="font-semibold">Opening Time</p>
            <p>🕒 Mon - Fri: 8:00 - 17:30</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Full Image Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      @click.self="closeModal"
    >
      <div class="relative max-w-4xl w-full p-4">
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-white text-2xl font-bold"
        >
          &times;
        </button>
        <img
          :src="selectedImg"
          alt="Full View"
          class="w-full max-h-[90vh] object-contain rounded"
        />
      </div>
    </div>

    <!-- Blog Post Modal -->
    <div
      v-if="showPostModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-6"
      @click.self="closePostModal"
    >
      <div
        class="bg-white max-w-xl w-full p-6 rounded shadow-lg overflow-auto max-h-[90vh] relative"
      >
        <button
          @click="closePostModal"
          class="absolute top-4 right-4 text-gray-800 text-3xl font-bold cursor-pointer"
        >
          &times;
        </button>
        <h2 class="text-2xl font-bold mb-4">{{ activePost?.title }}</h2>
        <p class="text-gray-600 text-sm mb-6">{{ activePost?.date }}</p>
        <p class="text-gray-800 whitespace-pre-line">
          {{ activePost?.content }}
        </p>
      </div>
    </div>

    <!-- Bottom Footer -->
    <hr class="border-t border-gray-700" />
    <div
      class="flex justify-between items-center text-sm text-white py-4 px-6 bg-black"
    >
      <div>© 2018 Copyright. Created by: payothemes</div>
      <div class="space-x-4">
        <router-link
          v-for="(item, index) in footerLinks"
          :key="index"
          :to="`/${item.toLowerCase()}`"
          class="hover:underline cursor-pointer"
        >
          {{ item }}
        </router-link>
      </div>
    </div>
  </div>
</template>
