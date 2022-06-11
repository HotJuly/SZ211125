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
import { defineEmits } from 'vue';

const emits = defineEmits(["change123"]);

emits('change123',123)
// console.log(emits);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
