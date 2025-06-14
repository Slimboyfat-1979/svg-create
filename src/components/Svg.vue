<template>
  <div>
    <svg
      width="500"
      height="500"
      viewBox="0, 0, 500 500"
      xmlns="http://www.w3.org/2000/svg"
      class="border border-gray-500 bg-white"
    >
      <rect
        x="0"
        y="0"
        :width="width"
        :height="height"
        fill="skyblue"
        stroke="black"
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
});
</script>
