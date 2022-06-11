<template>
  <h1>App</h1>
  <h2>{{msg}}</h2>
  <HelloWorldVue v-model:msg333="msg"/>
</template>

<script setup>
import HelloWorldVue from './components/HelloWorld.vue';
import myBus from '@/myBus/index';
import {ref} from 'vue';

const msg = ref("我是父组件的数据");

myBus.on('sendMsg',(data)=>{
  console.log('sendMsg',data);
})

</script>

<style>
</style>
