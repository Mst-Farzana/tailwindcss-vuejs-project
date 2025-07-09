<script setup>
import { RouterLink } from 'vue-router';

const title = 'Pick Your Plan';
const url = '/line.png'; // Make sure line.png is in your public folder

const plans = [
  {
    price: '$59',
    type: 'Single License',
    features: [
      '1 year of theme updates & support',
      '1 premium extension',
      '1 grid blog',
      '10% off future purchases',
    ],
  },
  {
    price: '$79',
    type: 'Double License',
    features: [
      '2 years of theme updates & support',
      '2 premium extensions',
      '2 grid blogs',
      '20% off future purchases',
    ],
  },
  {
    price: '$300',
    type: 'Multi License',
    features: [
      '3 years of theme updates & support',
      '3 premium extensions',
      '5 grid blogs',
      '30% off future purchases',
    ],
  },
];
</script>

<template>
  <div>
    <div class="mt-10 bg-black h-screen bg-cover bg-center bg-no-repeat mb-30">
      <!-- Content -->
      <div class="relative z-10 text-white pt-15">
        <h1 class="text-center text-2xl font-bold">{{ title }}</h1>
        <div class="h-10 w-20 mx-auto contrast-150">
          <img :src="url" alt="decorative line" />
        </div>

        <!-- Pricing Cards -->
        <div
          class="flex flex-col lg:flex-row justify-between gap-6 text-sm px-6 mt-10 pb-15 divide-x divide-gray-500 bg-black font-sans"
        >
          <div
            v-for="(plan, index) in plans"
            :key="index"
            class="flex-1 text-center p-6"
          >
            <p class="text-4xl font-bold mb-8">{{ plan.price }}</p>
            <p class="mb-6 font-semibold">{{ plan.type }}</p>
            <ul class="space-y-1 text-sm mb-6">
              <li class="mb-4" v-for="(feature, i) in plan.features" :key="i">
                {{ feature }}
              </li>
            </ul>
            <RouterLink
              to="/"
              class="inline-block rounded-full px-8 py-3 font-semibold text-black bg-white hover:bg-emerald-500 hover:text-white transition"
            >
              Get Started
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
