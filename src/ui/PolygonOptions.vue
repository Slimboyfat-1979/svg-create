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
import OptionsUi from '@/components/OptionsUi.vue';
import {reactive, watch, ref} from 'vue'
import { svgStore } from '@/stores/store';

const store = svgStore();

const points = ref("");

const addpoints = function (input) {
    if(input.endsWith(" ")){
        points.value = input;
        store.addPolygonPoints(points.value);
    }
};


</script>