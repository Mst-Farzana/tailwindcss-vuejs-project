<script>
export default {
  data() {
    return {
      link: 'https://www.google.com/',
    };
  },
};
</script>

<template>
  <div>
    <section>
      <div class="mx-10 -mt-10 bg-white p-4 h-70 shadow-2xl rounded-sm">
        <div class="grid grid-rows-1 grid-flow-col">
          <div class="text-2xl p-10 font-semibold font-serif">
            <h2>
              We help to <br />
              grow creativity that<br />
              today break rules.
            </h2>
          </div>
          <div class="feature-box2 text-center p-10">
            <i
              class="fa-regular fa-lightbulb text-4xl text-cyan-500 hover:-translate-y-1 animate-bounce"
            ></i>
            <h3 class="font-serif font-semibold p-1">Branding Design</h3>
            <p class="description">
              Quisque in fermentum velit. Viva mus pharetra, quam ut tincidunt
              interdum, leo elit ornare.
            </p>
          </div>
          <div class="feature-box2 text-center p-10">
            <i
              class="fa-solid fa-trophy text-4xl text-cyan-500 hover:-translate-y-1 animate-bounce"
            ></i>
            <h3 class="font-serif font-semibold p-1">Event Design</h3>
            <p class="description">
              Quisque in fermentum velit. Viva mus pharetra, quam ut tincidunt
              interdum, leo elit ornare.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
