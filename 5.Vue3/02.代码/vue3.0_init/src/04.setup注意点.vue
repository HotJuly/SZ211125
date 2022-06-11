<template>
  <div id="app">
    <h1>{{num1}}</h1>
    <h1>{{num2}}</h1>
    <!-- <button @click="changeName">改名</button> -->
  </div>
</template>

<script lang="ts">
  export default {
  }
</script>


<script lang="ts" setup>
  import {ref} from 'vue';
    const num1 = ref(1);
    const num2 = ref(2);
    
    console.log(2)
</script>

<style>
</style>
