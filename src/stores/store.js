import { defineStore } from 'pinia'

export const svgStore = defineStore('svgTypes', {
    state:() => ({
        svgType: ''
    }),
    actions: {
        changeType(type) {
            this.svgType = type; 
        },
        
    }
})
