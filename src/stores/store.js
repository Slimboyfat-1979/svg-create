import { defineStore } from "pinia";

export const svgStore = defineStore("svgTypes", {
  state: () => ({
    svgType: "",
    rectAttributes: {
      aspectRationLock: false,
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
     polygonAttributes: {
        polygonPoints: []
    },
    circleAttributes: {
      cx: 0,
      cy: 0,
      r: 0,
    },
    ellipseAttributes: {
      rx: 0,
      ry: 0,
      cx: 0,
      cy: 0,
    },
    lineAttributes: {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
    }
  }),
  actions: {
    changeType(type) {
      this.svgType = type;
    },
    addPolylinePoints(input) {
      this.polylineAttributes.polylinePoints = [input.trimEnd()];
    },
    addPolygonPoints(input) {
        this.polygonAttributes.polygonPoints = [input.trimEnd()];
        console.log(this.polygonAttributes.polygonPoints);
        // this.polygonAttributes.polygonPoints = [input.trimEnd()];
    }
  },
});
