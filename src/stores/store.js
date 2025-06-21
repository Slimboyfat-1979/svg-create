import { defineStore } from 'pinia'

export const svgStore = defineStore('svgTypes', {
    state:() => ({
        svgType: '',
        rectAttributes: {
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            rx: 0,
            ry: 0
        }
    }),
    actions: {
        changeType(type) {
            this.svgType = type; 
        }
    }
})
