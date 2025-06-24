<template>
  <label class="ml-10" for="">Points (Seperate by commas)</label>
  <textarea
    name="points"
    id="points"
    class="px-4 border-amber-700 border rounded bg-white text-black w-100 mx-auto"
    v-model="points"
    v-on:input="addpoints($event.target.value)"
    placeholder=""
    rows="4"
    cols="40"
  ></textarea>
  <button @click="createPoints"
    class=" mt-4 px-6 py-2 bg-amber-700 text-white rounded shadow hover:bg-amber-800 transition-colors duration-200 w-70 mx-auto inline-block"
  >
    Create Random Points
  </button>
</template>

<script setup>
import { svgStore } from "@/stores/store";
import { computed, ref } from "vue";

const store = svgStore();

const points = ref("");

const createPoints = function() {
    
}

const addpoints = function (input) {
  if (input.endsWith(" ")) {
    points.value = input;
    store.addPolylinePoints(points.value);
  }
};
</script>
