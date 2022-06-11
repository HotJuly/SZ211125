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
import { defineProps,defineEmits } from 'vue';

const props = defineProps(["msg333"]);

const emits = defineEmits(["update:msg333"]);

console.log(props)

setTimeout(()=>{
  emits('update:msg333',"我是子组件的数据")
},2000)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
