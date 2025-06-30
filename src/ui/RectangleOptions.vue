<template>
  <OptionsUi>
      <div class="flex flex-col gap-2 mb-4">
        <label class="text-sm font-medium text-gray-700" for="">Height</label>
        <input
          v-model="rectAttributes.height"
          class="input input-bordered rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          type="number"
        />
      </div>
      <div class="flex flex-col gap-2 mb-4">
        <label class="text-sm font-medium text-gray-700" for="">Width</label>
        <input
          v-model="rectAttributes.width"
          class="input input-bordered rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          type="number"
        />
      </div>
      <div class="flex flex-col gap-2 mb-4">
        <label class="text-sm font-medium text-gray-700" for="">x</label>
        <input
          v-model="rectAttributes.x"
          class="input input-bordered rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          type="number"
        />
      </div>
      <div class="flex flex-col gap-2 mb-4">
        <label class="text-sm font-medium text-gray-700" for="">y</label>
        <input
          v-model="rectAttributes.y"
          class="input input-bordered rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          type="number"
        />
      </div>
      <div>
        <h6 class="text-sm">Lock Aspect Ratio?</h6>
        <input v-model="aspectRatio" type="checkbox" checked />
      </div>
  </OptionsUi>
</template>

<script setup>
import { reactive, watch, ref } from "vue";
import { svgStore } from "@/stores/store";
import OptionsUi from "@/components/OptionsUi.vue";

const store = svgStore();

const aspectRatio = ref(false);

let rectAttributes = reactive({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  rx: 0,
  ry: 0,
  fill: null,
});

watch(
  () => rectAttributes.height,
  (newVal) => {
    if (aspectRatio.value && rectAttributes.width !== newVal) {
      rectAttributes.width = newVal;
    }
    store.rectAttributes = { ...rectAttributes };
  }
);

watch(
  () => rectAttributes.width,
  (newVal) => {
    if (aspectRatio.value && rectAttributes.height !== newVal) {
      rectAttributes.height = newVal;
    }
    store.rectAttributes = { ...rectAttributes };
  }
);

watch(rectAttributes, (newVal) => {
  store.rectAttributes = { ...newVal };
});

watch(aspectRatio, (newVal) => {
  aspectRatio.value = newVal;
  if (aspectRatio.value === true) {
    if (rectAttributes.height != 0 || rectAttributes.width != 0) {
      rectAttributes.height = 0;
      rectAttributes.width = 0;
    }
  }
});
</script>
