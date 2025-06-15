<template>
  <div class="flex flex-col justify-center items-center">
    <h2>SVG Animation</h2>
    <p>{{ color }}</p>
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      class="bg-white mx-auto border-3 border-amber-950"

    >
      <rect
        :x="250 - width / 2"
        :y="250 - height / 2"
        :width="width"
        :height="height"
        :fill="color"
        stroke=""
      />
    </svg>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  height: {
    type: Number,
  },
  width: {
    type: Number,
  },
  color: {
    type: String
  }
});
</script>


<style scoped>
h2 {
    font-size: 3rem;
}
</style>