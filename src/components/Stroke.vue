<template>
  <div class="container">
      <label for="">Stroke</label>
      <div class="inputs">
        <input type="checkbox" class="checkbox checkbox-primary" @change="isChecked"/>
      </div>
  </div>
</template>

<script setup>
import Input from 'postcss/lib/input';
import {defineEmits} from 'vue';

const emits = defineEmits(['isChecked'])


const isChecked = function() {
    const checkBox = document.querySelector('.checkbox');
    if(checkBox.checked) {
        emits('isChecked', true)
    }else{
        emits('isChecked', false)
    }
}

</script>


<style scoped>
.container {
    display: block;
    display: flex;
    flex-direction: column;
}

.container label {
    text-align: center;
}

.container .inputs {
    display: flex;
    justify-content: center;
}

.container .inputs input {
    margin-right:5px;
    margin-top: 10px;
}
</style>