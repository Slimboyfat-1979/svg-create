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
    <component :is="currentComponent" />
  </div>
</template>

<style scoped></style>

<script setup>
import { ref, computed, defineProps } from "vue";
import { svgStore } from "@/stores/store.js";
import RectangleOptions from '@/ui/RectangleOptions.vue'
import CircleOptions from "@/ui/CircleOptions.vue";
import EllipseOptions from "@/ui/EllipseOptions.vue";

const svgType = svgStore();

const componentMap = {
    Rectangle: RectangleOptions,
    Circle: CircleOptions,
    Ellipse: EllipseOptions
}

const currentComponent = computed(() => {
    return componentMap[svgType.svgType];
})

const readType = function(type) {
    svgType.changeType(type);
}

const types = ref([
  "Rectangle",
  "Circle",
  "Ellipse",
  "Line",
  "Polygon",
  "Polyline",
  "Path",
]);
</script>
