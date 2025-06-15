<template>
  <div class="flex h-screen">
    <aside class="w-150 bg-gray-800 text-white">
      <Dimensions @update="handleUpdate"></Dimensions>
      <Color @updateColor="changeColor"></Color>
    </aside>
    <main class="flex-1 bg-white p-4 overflow-auto">
      <p>{{ height }}</p>
      <p>{{ width }}</p>
      <Svg :height="width" :width="width" :color="color"></Svg>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Dimensions from "@/components/Dimensions.vue";
import Color from "@/components/Color.vue";
import Svg from "@/components/Svg.vue";

const height = ref();
const width = ref();
const color = ref();

function handleUpdate(values) {
  height.value = values.height;
  width.value = values.width;
}


function changeColor(newColor) {
    color.value = newColor;
}

</script>

<style scoped></style>
