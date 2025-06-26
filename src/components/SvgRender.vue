<template>
<div class="">
    <div class="bg-white p-6">
        <svg 
            class="block mx-auto bg-gray-5 shadow-lg "
            style="border: 2px solid #4B5563; border-radius: 12px;"
            height="700" 
            width="700" 
            viewBox="0 0 100 100" 
        >
            <rect 
                v-if="store.svgType==='Rectangle'" 
                :x="store.rectAttributes.x" 
                :y="store.rectAttributes.y" 
                :width="store.rectAttributes.width" 
                :height="store.rectAttributes.height" 
                :rx="store.rectAttributes.rx"
                :ry="store.rectAttributes.ry"
                fill="blue"
            ></rect>
            <circle 
                v-if="store.svgType==='Circle'" 
                :cx="circle.cx" 
                :cy="circle.cy" 
                :r="circle.r" 
                fill="red" 
            ></circle>
            <ellipse v-if="store.svgType === 'Ellipse'"
                rx="100"
                ry="30"
                cx="100"
                cy="100"
                fill="green"
            ></ellipse>
            <polyline v-if="store.svgType === 'Polyline'"
                :points="polylinePoints" stroke="red" stroke-width="2" fill="none"
            ></polyline>
        </svg>
    </div>
</div>
</template>

<script setup>
import { svgStore } from '@/stores/store';
import { computed } from 'vue';
const store = svgStore();

const polylinePoints = computed(() => {
    return store.polylineAttributes.polylinePoints;
})

const circle = computed(() => {
    console.log()
    return store.circleAttributes;
})


</script>
