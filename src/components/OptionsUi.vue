<template>
  <div
    class="rounded-lg shadow-lg text-center w-full h-full bg-white py-10 px-6 flex flex-col items-center justify-center space-y-6 mt-10"
  >
    <slot></slot>
    <ColorPicker v-bind="color" @input="onInput" />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { svgStore } from "@/stores/store";
import ColorPicker from "@radial-color-picker/vue-color-picker";
import '@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css';

const store = svgStore();

const color = reactive({
  hue: 0,
  saturation: 100,
  luminosity: 50,
  alpha: 1,
});

function onInput(hue) {
  color.hue = hue;
  const hueString = `hsl(${Math.floor(hue)} ${color.saturation}% ${color.luminosity}%)`;
  store.fill = hueString;
}
</script>

<style scoped>

</style>
