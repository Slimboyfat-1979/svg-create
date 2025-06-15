<template>
  <div class="flex flex-col justify-center items-center">
    <h2>SVG Animation</h2>
    <p>{{ color }}</p>
    <p>Width: {{ width }}</p>
    <p>Height: {{ height }}</p>
    <p>Rotate: {{ (rotation / 100) * 360 }} deg</p>
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      class="bg-white mx-auto"
    >
      <rect
        :x="250 - width / 2"
        :y="250 - height / 2"
        :width="width"
        :height="height"
        :fill="color"
        :stroke="props.stroke ? 'black' : 'none'"
        :stroke-width="props.stroke ? 5 : 0" 
        :transform="`rotate(${rotationDegrees}, 250, 250)`"
      />
    </svg>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  height: Number,
  width: Number,
  color: String,
  rotation: String,
  stroke: Boolean
});

const rotationDegrees = computed(() => {
  return (Number(props.rotation) / 100) * 360;
});

</script>

<style scoped>
h2 {
  font-size: 3rem;
}
</style>
