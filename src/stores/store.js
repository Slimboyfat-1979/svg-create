import { defineStore } from "pinia";

export const svgStore = defineStore("svgTypes", {
  state: () => ({
    svgType: "",
    rectAttributes: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      rx: 0,
      ry: 0,
    },
    polylineAttributes: {
      polylinePoints: [],
      stroke: "Black",
      strokeWidth: 2,
    },
    circleAttributes: {
        cx: 0,
        cy: 0,
        r: 0
    }
  }),
  actions: {
    changeType(type) {
      this.svgType = type;
    },
    addPolylinePoints(input) {
    this.polylineAttributes.polylinePoints = [input.trimEnd()];
    },
  },
});
