<template>
  <div class="w-full h-full bg-gradient-to-b from-purple-100 to-red-100 text-4xl text">
    <div class="p-5 text-center">
      <h2>SVG TYPE</h2>
      <div class="border-1 border-black-500 mt-2">
        <div
          class="forms text-sm flex flex-row justify-between px-4 py-1"
          v-for="type in types"
          :key="type"
        >
          <label for="">{{ type }}</label>
          <input
            type="radio"
            :name="'svgType'"
            :value="type"
            :checked="svgType.svgType === type"
            @change="readType(type)"
          />
        </div>
      </div>
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import { ref, computed} from "vue";
import { svgStore } from "@/stores/store.js";
import RectangleOptions from "@/ui/RectangleOptions.vue";
import CircleOptions from "@/ui/CircleOptions.vue";
import EllipseOptions from "@/ui/EllipseOptions.vue";
import PolylineOptions from "@/ui/PolylineOptions.vue";
import LineOptions from "@/ui/LineOptions.vue";
import PolygonOptions from "@/ui/PolygonOptions.vue";

const svgType = svgStore();

const componentMap = {
  Rectangle: RectangleOptions,
  Circle: CircleOptions,
  Ellipse: EllipseOptions,
  Polyline: PolylineOptions,
  Line: LineOptions,
  Polygon: PolygonOptions
};

const currentComponent = computed(() => {
  return componentMap[svgType.svgType];
});

const readType = function (type) {
  svgType.changeType(type);
};

const types = ref([
  "Rectangle",
  "Circle",
  "Ellipse",
  "Line",
  "Polygon",
  "Polyline",
  "Path",
]);
</script>

<style scoped>
.form-control {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
