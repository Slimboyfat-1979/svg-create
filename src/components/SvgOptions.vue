<template>
  <div class="flex flex-col w-full h-full">
    <h2 class="text-center text-2xl">SVG Type</h2>
    <div class="flex justify-around px-10 py-2 flex-wrap">
      <div class="form-control" v-for="type in types">
        <label for="">{{ type }}</label>
        <input
          v-on:change="readType(type)"
          type="radio"
          name="square"
          class="radio radio-xs ml-1"
          checked="checked"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import { ref } from "vue";
import { svgStore } from "@/stores/store.js";


const svgType = svgStore();

// const svgType = svgStore();

//determine what type of SVG to render
const readType = function(type) {
    svgType.changeType(type);
}

const types = ref([
  "Rectangle",
  "Circle",
  "Elipse",
  "Line",
  "Polygon",
  "Polyline",
  "Path",
]);
</script>
