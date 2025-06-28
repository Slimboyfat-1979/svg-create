<template>
  <div class="">
    <div class="bg-white p-6">
      <svg
        class="block mx-auto bg-gray-5 shadow-lg"
        style="border: 2px solid #4b5563; border-radius: 12px"
        height="700"
        width="700"
        viewBox="0 0 100 100"
      >
        <rect
          v-if="store.svgType === 'Rectangle'"
          :x="rectangle.x"
          :y="rectangle.y"
          :width="rectangle.width"
          :height="rectangle.height"
          :rx="rectangle.rx"
          :ry="rectangle.ry"
          fill="blue"
        ></rect>
        <circle
          v-if="store.svgType === 'Circle'"
          :cx="circle.cx"
          :cy="circle.cy"
          :r="circle.r"
          fill="red"
        ></circle>
        <ellipse
          v-if="store.svgType === 'Ellipse'"
          :rx="ellipse.rx"
          :ry="ellipse.ry"
          :cx="ellipse.cx"
          :cy="ellipse.cy"
          fill="green"
        ></ellipse>
        <polyline
          v-if="store.svgType === 'Polyline'"
          :points="polylinePoints"
          stroke="red"
          stroke-width="2"
          fill="none"
        ></polyline>
        <line
          v-if="store.svgType === 'Line'"
          x1="10"
          y1="10"
          x2="50"
          y2="10"
          stroke="black"
          stroke-width="2"
        ></line>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { svgStore } from "@/stores/store";
import { computed } from "vue";
const store = svgStore();

const polylinePoints = computed(() => {
  return store.polylineAttributes.polylinePoints;
});

const circle = computed(() => {
  console.log();
  return store.circleAttributes;
});

const ellipse = computed(() => {
  return store.ellipseAttributes;
});

const rectangle = computed(() => {
  return store.rectAttributes;
});
</script>
