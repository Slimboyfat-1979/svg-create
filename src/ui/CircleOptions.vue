<template>
<OptionsUi>
    <div class="form-control flex flex-col gap-2 mb-4">
        <label class="text-sm font-medium text-gray-700" for="cx">cx:</label>
        <input v-on:change="changeAttributes" v-model="circleAttributes.cx" id="cx" type="number" class="input input-bordered rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
    </div>
    <div class="form-control flex flex-col gap-2 mb-4">
        <label class="text-sm font-medium text-gray-700" for="cy">cy:</label>
        <input v-on:change="changeAttributes" v-model="circleAttributes.cy" id="cy" type="number" class="input input-bordered rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
    </div>
    <div class="form-control flex flex-col gap-2 mb-4">
        <label class="text-sm font-medium text-gray-700" for="radius">radius</label>
        <input v-on:change="changeAttributes" v-model="circleAttributes.r" id="radius" type="number" class="input input-bordered rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
    </div>
</OptionsUi>
</template>

<script setup>
import {watch, reactive} from 'vue';
import OptionsUi from "@/components/OptionsUi.vue";
import { svgStore } from '@/stores/store';

const store = svgStore();

const circleAttributes = reactive({
    cx: 0,
    cy: 0,
    r: 0
})

watch(circleAttributes, (newVal) => {
   store.circleAttributes = {...newVal}
})



</script>
