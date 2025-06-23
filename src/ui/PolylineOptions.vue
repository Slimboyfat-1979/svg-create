<template>
  <label class="ml-10" for="">Points (Seperate by commas)</label>
  <textarea
    name="points"
    id="points"
    class="px-4 border-amber-700 border rounded bg-white text-black w-100 mx-auto"
    v-model="store.polylineAttributes.polylinePoints"
    v-on:input="addpoints($event.target.value)"
    placeholder=""
    rows="4"
    cols="40"
  ></textarea>
  <p></p>
  <!-- <p>{{ store.polylineAttributes.polylinePoints }}</p> -->
   <p>{{ points }}</p>
</template>

<script setup>
import { svgStore } from "@/stores/store";
import { ref } from "vue";

const store = svgStore();
const points = ref([]);
let processedPairs = new Set();

const addpoints = function (input) {
  if (input.endsWith(" ")) {
    const entries = input.trim().split(" ");

    for (const pair of entries) {
      if (!processedPairs.has(pair)) {
        const clean = pair.split(",");
        if (clean.length === 2) {
          points.value.push([clean[0], clean[1]]);
          processedPairs.add(pair); // Mark as handled
        }
      }
    }
  }
};

</script>