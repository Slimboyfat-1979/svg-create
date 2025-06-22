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
  <p>{{ store.polylineAttributes.polylinePoints }}</p>
</template>

<script setup>
import { svgStore } from "@/stores/store";
import { ref } from "vue";

const store = svgStore();


const addpoints = function (input) {
  if (input.endsWith(" ")) {
    const trimmed = input.trim();
    const pointStrings = trimmed.split(" "); // ["10,20", "20,20"]

    const newPoints = pointStrings
      .map((pair) => {
        const [x, y] = pair.split(",").map(Number);
        return [x, y];
      })
      .filter((pair) => pair.length === 2 && pair.every((n) => !isNaN(n)));
      //need to figure out how to add my arrays to the store 
      //then read from the store with svg render
      console.log(newPoints)
  }
};
</script>
