<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const message = ref('');

// Simple email validation regex
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function handleSubmit() {
  if (!validateEmail(email.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Form submitted!
    First Name: ${firstName.value}
    Last Name: ${lastName.value}
    Email: ${email.value}
    Message: ${message.value}`);

  // Reset inputs after submit
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  message.value = '';
}

let title = 'NEW WEBSITE';
let projectLine1 = 'Tell Us More About';
let projectLine2 = 'Your Next Awesome Project';
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <div
      class="flex flex-col items-center justify-center text-sm h-50 bg-gray-100 py-20"
    >
      <h1 class="font-semibold text-4xl mb-2">Contact</h1>
      <ul class="flex gap-2 items-center text-gray-700">
        <li>
          <router-link to="/" class="hover:underline text-blue-500"
            >Home</router-link
          >
        </li>
        <li>/</li>
        <li><span class="text-gray-800">Contact</span></li>
      </ul>
    </div>

    <!-- Title -->
    <div
      class="flex items-center justify-center flex-col text-center tracking-wider h-60 font-mono"
    >
      <h3 class="text-[10px] mt-2 mb-2 uppercase">{{ title }}</h3>
      <p class="text-2xl font-semibold">
        {{ projectLine1 }}<br />
        {{ projectLine2 }}
      </p>
      <div class="h-10 w-20 mt-4 contrast-150">
        <img src="/line.png" alt="line" class="mx-auto" />
      </div>
    </div>

    <!-- Form & Map Section -->
    <div class="flex flex-col md:flex-row justify-between gap-10 p-6">
      <!-- Form -->
      <form
        class="w-full md:w-1/2 h-[500px] bg-white p-6 rounded border-8 border-gray-200"
        @submit.prevent="handleSubmit"
      >
        <div class="flex gap-5 mb-4">
          <input
            v-model="firstName"
            type="text"
            placeholder="First Name"
            class="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            v-model="lastName"
            type="text"
            placeholder="Last Name"
            class="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div class="mb-4">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div class="mb-4">
          <textarea
            v-model="message"
            placeholder="Message"
            rows="4"
            class="w-full h-28 border border-gray-300 rounded px-3 py-2"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-emerald-300 text-white px-10 py-3 rounded hover:bg-white hover:border-2 hover:text-emerald-600 transition"
        >
          Submit
        </button>
      </form>

      <!-- Google Map -->
      <div class="w-full md:w-1/2 h-[500px] rounded overflow-hidden shadow-md">
        <iframe
          class="w-full h-full object-cover"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.236783717935!2d-74.01338644192118!3d40.7058316169887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a177f6c6e93%3A0xe1e5d9bf2f20f14e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1688501466923!5m2!1sen!2sbd"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  </div>
</template>
