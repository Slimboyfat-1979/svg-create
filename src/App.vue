<template>
  <div class="flex h-screen">
    <aside
      class="w-150 bg-gray-800 text-white flex flex-row items-start justify-center space-x-4 py-4"
    >
      <Dimensions @update="handleUpdate"></Dimensions>
      <Color @updateColor="changeColor"></Color>
      <Transform @transform="changeRotation"></Transform>
      <Stroke @isChecked="addStroke"></Stroke>
    </aside>
    <main class="flex-1 bg-white p-4 overflow-auto">
      <Svg
        :height="width"
        :width="width"
        :color="color"
        :rotation="rotation"
        :stroke="stroke"
      ></Svg>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Dimensions from "@/components/Dimensions.vue";
import Color from "@/components/Color.vue";
import Transform from "@/components/Transform.vue";
import Stroke from "@/components/Stroke.vue";
import Svg from "@/components/Svg.vue";

const height = ref(250);
const width = ref(250);
const color = ref();
const rotation = ref();
const stroke = ref();

function handleUpdate(values) {
  height.value = values.height;
  width.value = values.width;
}

function changeColor(newColor) {
  color.value = newColor;
}

function changeRotation(rotationVal) {
  console.log(rotationVal);
  rotation.value = rotationVal;
}

function addStroke(checkedType) {
  stroke.value = checkedType;
}
</script>

<style scoped></style>
