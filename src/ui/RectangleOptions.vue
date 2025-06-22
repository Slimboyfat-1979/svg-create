<template>
    <div class="container flex flex-col px-5 py-5 bg-base-300 h-full">
        <div class="flex flex-col items-center ">
            <div class="form-control flex flex-row items-center justify-center mb-2 w-80">
                <label class="mr-2 w-32 text-right">Height</label>
                <input v-model="rectAttributes.height" class="w-24 rounded px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-neutral" type="number">
            </div>
            <div class="form-control flex flex-row items-center justify-center mb-2 w-80">
                <label class="mr-2 w-32 text-right">Width</label>
                <input v-model="rectAttributes.width" class="w-24 rounded px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-neutral" type="number">
            </div>
            <div class="form-control flex flex-row items-center justify-center mb-2 w-80">
                <label class="mr-2 w-32 text-right">X Position</label>
                <input v-model="rectAttributes.x" class="w-24 rounded px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-neutral" type="number">
            </div>
            <div class="form-control flex flex-row items-center justify-center mb-2 w-80">
                <label class="mr-2 w-32 text-right">Y Position</label>
                <input v-model="rectAttributes.y" class="w-24 rounded px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-neutral" type="number">
            </div>
            <div class="form-control flex flex-row items-center justify-center mb-2 w-80">
                <label class="mr-2 w-32 text-right">Horizontal Radius</label>
                <input v-model="rectAttributes.rx" class="w-24 rounded px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-neutral" type="number">
            </div>
            <div class="form-control flex flex-row items-center justify-center mb-2 w-80">
                <label class="mr-2 w-32 text-right">Veritical Radius</label>
                <input v-model="rectAttributes.ry" class="w-24 rounded px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-neutral" type="number">
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, watch } from 'vue';
import { svgStore } from '@/stores/store';

const store = svgStore();

const rectAttributes = reactive({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    rx: 0,
    ry: 0
});

watch(rectAttributes, (newVal) => {
    console.log(newVal)
   store.rectAttributes = {...newVal}
}, {deep: true})

</script>

<style scoped>
.container {
    font-size: 0.75rem;
}
</style>