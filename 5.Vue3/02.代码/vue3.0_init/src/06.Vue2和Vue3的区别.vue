<template>
  <div id="app">
    <!-- <ul>
      <li v-for="(item,index) in arr" :key="item">
        {{item}}
      </li>
    </ul> -->

    <!-- <h1>name:{{obj2.name}}</h1>
    <h1>age:{{obj2.age}}</h1>
    <button @click="change">修改内容</button> -->

    <h1>{{msg}}</h1>
    <HelloWorldVue v-model:msg123="msg"/>
  </div>
</template>

<script lang="ts">
  // import HelloWorldVue from './components/HelloWorld.vue';
  export default {
    name:"App",
    // components:{
    //   HelloWorldVue
    // }
  }
</script>


<script lang="ts" setup>
  import HelloWorldVue from './components/HelloWorld.vue';
  import {reactive, ref} from 'vue';
  // const arr = reactive([1,2,3,4,5]);

  // const obj = {
  //   name:"xiaohong"
  // }

  // const obj2 = reactive(obj);

  // const change = ()=>{
  //   // arr.splice(1,1,6)
  //   // arr[1] = 6;
  //   // obj2.age = 23;
  //   // delete obj2.name
  // }

  const msg = ref("我是父组件的数据");
</script>

<style>
</style>
