<template>
    <OptionsUi>
        <div class="flex flex-col gap-2 mb-4">
            <label class="text-sm font-medium text-gray-700" for="">rx</label>
            <input v-model="ellipseAttributes.rx" class="input input-bordered rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" type="number">
        </div>
        <div class="flex flex-col gap-2 mb-4">
            <label class="text-sm font-medium text-gray-700" for="">ry</label>
            <input v-model="ellipseAttributes.ry" class="input input-bordered rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" type="number">
        </div>
        <div class="flex flex-col gap-2 mb-4">
            <label class="text-sm font-medium text-gray-700" for="">cx</label>
            <input v-model="ellipseAttributes.cx" class="input input-bordered rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" type="number">
        </div>
        <div class="flex flex-col gap-2 mb-4">
            <label class="text-sm font-medium text-gray-700" for="">cy</label>
            <input v-on:change="" v-model="ellipseAttributes.cy" class="input input-bordered rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" type="number">
        </div>
    </OptionsUi>
</template>

<script setup>
import OptionsUi from '@/components/OptionsUi.vue';
import { reactive, watch } from 'vue';
import { svgStore } from '@/stores/store';

const store = svgStore();

const ellipseAttributes = reactive({
    rx: 0,
    ry: 0,
    cx: 0,
    cy: 0
})

watch(ellipseAttributes, (newVal) => {
    store.ellipseAttributes = {...newVal}
})

</script>