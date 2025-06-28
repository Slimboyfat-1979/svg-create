<template>
  <OptionsUi>
    <div class="flex flex-col gap-2 mb-4">
      <label class="text-sm font-medium text-gray-700" for="">x1</label>
      <input
        class="input input-bordered rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        type="Number"
        v-model="lineAttributes.x1"
      />
      <label class="text-sm font-medium text-gray-700" for="">y1</label>
      <input
        class="input input-bordered rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        type="Number"
        v-model="lineAttributes.y1"
      />
      <label class="text-sm font-medium text-gray-700" for="">x2</label>
      <input
        class="input input-bordered rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        type="Number"
        v-model="lineAttributes.x2"
      />
      <label class="text-sm font-medium text-gray-700" for="">y2</label>
      <input
        class="input input-bordered rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        type="Number"
        v-model="lineAttributes.y2"
      />
    </div>
  </OptionsUi>
</template>

<script setup>
import OptionsUi from "./OptionsUi.vue";
import { reactive, watch } from "vue";
import { svgStore } from "@/stores/store";

const store = svgStore();

const lineAttributes = reactive({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
})

watch(lineAttributes, (newVal) => {
    store.lineAttributes = {...newVal}
    console.log(store.lineAttributes)
})


</script>
