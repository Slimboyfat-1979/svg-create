<template>
  <div class="flex flex-col gap-4 p-4 bg-gray-900 rounded-lg">
    <div class="form-control flex flex-col">
      <label class="mb-1 text-sm font-medium text-white">Height</label>
      <input
        v-model="height"
        type="number"
        class="w-32 px-2 py-1 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white text-sm"
      />
    </div>
    <div class="form-control flex flex-col">
      <label class="mb-1 text-sm font-medium text-white">Width</label>
      <input
        v-model="width"
        type="number"
        class="w-32 px-2 py-1 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white text-sm"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits } from "vue";

const height = ref();
const width = ref();

const emit = defineEmits(['update']);

watch([height, width], ([newHeight, newWidth]) => { 
    emit('update', {height: newHeight, width: newWidth})
})

</script>
