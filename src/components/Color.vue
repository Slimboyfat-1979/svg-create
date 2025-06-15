<template>
  <div class="flex flex-col gap-4 p-4 bg-gray-900 rounded-lg">
    <div class="form-control flex flex-col">
        <label class="text-center mb-4" for="">Color</label>
      <ColorPicker style="width: 150px" v-on:input="getColor" :color></ColorPicker>
    </div>
  </div>
</template>

<script setup>
import {reactive, defineEmits} from 'vue'
import ColorPicker from "@radial-color-picker/vue-color-picker";
import '@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css';

const color = reactive({
    hue: 50,
    saturation: 100,
    luminosity: 40,
    alpha: 1
});

const emit = defineEmits(['updateColor'])

const getColor = function(hue) {
color.hue = Math.floor(hue);

const hsla = `hsla(${color.hue}, ${color.saturation}%, ${color.luminosity}%, ${color.alpha})`;
emit('updateColor', hsla);
}



</script>
