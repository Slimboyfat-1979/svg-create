<template>
  <svg height="250" width="250" viewbox="0 0 100 100">
    <rect 
      v-if="svgType.svgType==='Rectangle'" 
      x="0" 
      y="0" 
      width="100%" 
      height="100%" 
      fill="blue"
      stroke="black"
      stroke-width="2"
    ></rect>
    <circle 
      v-if="svgType.svgType==='Circle'" 
      cx="50%" 
      cy="50%" 
      r="100" 
      fill="red" 
      stroke="black" 
      stroke-width="2"
    ></circle>
    <ellipse v-if="svgType.svgType === 'Ellipse'"
    rx="100"
    ry="30"
    cx="100"
    cy="100"
    fill="green"
    ></ellipse>
  </svg>
</template>

<script setup>
import { svgStore } from '@/stores/store';

const svgType = svgStore();
</script>
