<template>
  <div class="flex h-screen">
   <section class="h-screen bg-base-200 w-1/4 shadow-2xl z-1 flex justify-center">
        <SvgOptions></SvgOptions>
   </section>
   <section class="h-screen bg-base-100 w-3/4 z-0 flex justify-center items-center">
       <SvgRender></SvgRender>
   </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

import SvgOptions from './components/SvgOptions.vue';
import SvgRender from './components/SvgRender.vue';

</script>

<style scoped></style>
