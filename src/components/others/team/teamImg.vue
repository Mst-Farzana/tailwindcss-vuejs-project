<script setup>
const teamMembers = [
  {
    image: '/team/lawn-team01.jpg',
    name: 'Mark Dot',
    designation: 'CEO & Founder',
    email: 'office@awesomeweb.com',
  },
  {
    image: '/team/lawn-team02.jpg',
    name: 'Jane Doe',
    designation: 'Project Manager',
    email: 'jane@awesomeweb.com',
  },
  {
    image: '/team/lawn-team03.jpg',
    name: 'John Smith',
    designation: 'Lead Developer',
    email: 'john@awesomeweb.com',
  },
  {
    image: '/team/lawn-team04.jpg',
    name: 'Lisa Ray',
    designation: 'UI/UX Designer',
    email: 'lisa@awesomeweb.com',
  },
];
</script>

<template>
  <div class="p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(member, index) in teamMembers" :key="index">
        <img
          :src="member.image"
          alt="Team Member"
          class="w-full h-64 object-cover rounded-md mb-4"
        />
        <div
          class="bg-white shadow-md p-4 text-center rounded-lg hover:shadow-2xl"
        >
          <h3 class="text-lg font-bold">{{ member.name }}</h3>
          <p class="text-sm text-gray-600">{{ member.designation }}</p>
          <p class="text-sm text-gray-500 mb-4">{{ member.email }}</p>
          <ul
            class="flex justify-center items-center gap-5 text-gray-500 text-[10px]"
          >
            <li
              class="border border-gray-400 h-6 w-6 rounded-full hover:text-white hover:bg-emerald-400 pt-1"
            >
              <i class="fa-brands fa-facebook-f mb-1"></i>
            </li>
            <li
              class="border border-gray-400 h-6 w-6 rounded-full hover:text-white hover:bg-emerald-400 pt-1"
            >
              <i class="fa-brands fa-twitter mb-1"></i>
            </li>
            <li
              class="border border-gray-400 h-6 w-6 rounded-full hover:text-white hover:bg-emerald-400 pt-1"
            >
              <i class="fa-brands fa-google-plus-g mb-1"></i>
            </li>
            <li
              class="border border-gray-400 h-6 w-6 rounded-full hover:text-white hover:bg-emerald-400 pt-1"
            >
              <i class="fa-brands fa-square-youtube mb-1"></i>
            </li>
            <li
              class="border border-gray-400 h-6 w-6 rounded-full hover:text-white hover:bg-emerald-400 pt-1"
            >
              <i class="fa-brands fa-linkedin-in mb-1"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
