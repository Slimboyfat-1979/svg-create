<template>
  <OptionsUi>
    <div class="flex flex-col gap-2 mb-4">
      <label class="text-sm font-medium text-gray-700" for="">Points</label>
      <textarea
        class="textarea textarea-xl rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        name=""
        id=""
        v-model="points"
        v-on:input="addpoints($event.target.value)"
        rows="4"
        columns="40"
      ></textarea>
       <button
    @click="createRandomPoints"
    class="mt-4 px-6 py-2 bg-amber-700 text-white rounded shadow hover:bg-amber-800 transition-colors duration-200 w-70 mx-auto inline-block"
  >Randomise</button>
    </div>
  </OptionsUi>
</template>

<script setup>
import { svgStore } from "@/stores/store";
import { computed, ref } from "vue";
import OptionsUi from "@/components/OptionsUi.vue";

const store = svgStore();

const points = ref("");

const createRandomPoints = function () {
  const pointNumber = 2;
  const points = [];
  for (let i = 0; i <= pointNumber; i++) {
    let pointOne = Math.floor(Math.random() * 100);
    let pointTwo = Math.floor(Math.random() * 100);
    points.push(`${pointOne},${pointTwo}`);
  }
  const pointString = points.join(" ");
  store.addPolylinePoints(pointString);
};

const addpoints = function (input) {
  if (input.endsWith(" ")) {
    points.value = input;
    store.addPolylinePoints(points.value);
  }
};
</script>
