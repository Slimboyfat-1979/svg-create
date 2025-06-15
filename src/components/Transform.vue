<template>
  <div class="flex flex-col gap-4 p-4 bg-gray-900 rounded-lg">
    <label class="text-center" for="">Rotate</label>
    <input type="range" min="0" max="100" value="0" v-model="rotateValue" class="range range-xs" v-on:input="setTransform" />
  </div>
</template>


<script setup>
import {ref, defineEmits} from 'vue';
const rotateValue = ref();
const emit = defineEmits(['transform']);

const setTransform = function() {
  
  const rotate = rotateValue.value;
  emit('transform', rotate);

}

</script>
