<template>
  <OptionsUi>
    <div class="flex flex-col gap-2 mb-4">
        <label class="text-sm font-medium text-gray-700" for="">Height</label>
        <input v-model="rectAttributes.height" class="input input-bordered rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" type="text">
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label class="text-sm font-medium text-gray-700" for="">Width</label>
        <input v-model="rectAttributes.width" class="input input-bordered rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" type="text">
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label class="text-sm font-medium text-gray-700" for="">x</label>
        <input v-model="rectAttributes.x" class="input input-bordered rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" type="text">
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label class="text-sm font-medium text-gray-700" for="">y</label>
        <input v-model="rectAttributes.y" class="input input-bordered rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" type="text">
    </div>
  </OptionsUi>
</template>

<script setup>
import { reactive, watch } from "vue";
import { svgStore } from "@/stores/store";
import OptionsUi from "@/components/OptionsUi.vue";

const store = svgStore();

const rectAttributes = reactive({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  rx: 0,
  ry: 0,
});

watch(
  rectAttributes,
  (newVal) => {
    console.log(newVal);
    store.rectAttributes = { ...newVal };
  },
  { deep: true }
);
</script>


