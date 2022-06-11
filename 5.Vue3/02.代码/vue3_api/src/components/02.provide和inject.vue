<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<script setup>
import { inject } from 'vue';

const value = inject("msg123");

console.log(value);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
