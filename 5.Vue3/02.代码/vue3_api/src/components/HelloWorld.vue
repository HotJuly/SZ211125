<template>
  <div class="hello">
    <h1>hello</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<script setup>
import {useStore} from 'vuex';
const store = useStore();
console.log(store.state.msg);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
