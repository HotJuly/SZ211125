<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  // setup()
}
</script>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(["msg"]);
console.log(props);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
