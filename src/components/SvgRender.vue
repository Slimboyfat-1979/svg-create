<template>
  <svg height="600" width="600" viewbox="0 0 100 100" style="border: 2px solid red">
    <rect 
      v-if="store.svgType==='Rectangle'" 
      :x="store.rectAttributes.x" 
      :y="store.rectAttributes.y" 
      :width="store.rectAttributes.width" 
      :height="store.rectAttributes.height" 
      :rx="store.rectAttributes.rx"
      :ry="store.rectAttributes.ry"
      fill="blue"
      stroke="black"
      stroke-width="2"
    ></rect>
    <circle 
      v-if="store.svgType==='Circle'" 
      cx="50%" 
      cy="50%" 
      r="100" 
      fill="red" 
      stroke="black" 
      stroke-width="2"
    ></circle>
    <ellipse v-if="store.svgType === 'Ellipse'"
    rx="100"
    ry="30"
    cx="100"
    cy="100"
    fill="green"
    ></ellipse>
    <polyline v-if="store.svgType === 'Polyline'"
    :points="polylinePoints" stroke="red" stroke-width="2" fill="none"
    ></polyline>
  </svg>
</template>

<script setup>
import { svgStore } from '@/stores/store';
import { computed } from 'vue';
const store = svgStore();

const polylinePoints = computed(() => {
    return store.polylineAttributes.polylinePoints;
})


</script>
