<template>
 <label for="">Points (Seperate by commas)</label>
<textarea
    name="points"
    id="points"
    class="px-4 border-amber-700 border rounded bg-white text-black"
    v-model="store.polylinePoints"
    placeholder=""
    rows="4"
    cols="40"
></textarea>
</template>

<script setup>
import { svgStore } from "@/stores/store";
import { ref } from "vue";

const store = svgStore();



</script>
