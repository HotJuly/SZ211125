<template>
  <h1>App</h1>
  <HelloWorldVue >
    <template #default>
      <h1>我是默认插槽</h1>
    </template>
  </HelloWorldVue>
</template>

<script setup>
import HelloWorldVue from './components/HelloWorld.vue';
import {ref, onMounted} from 'vue';

</script>

<style>
</style>
