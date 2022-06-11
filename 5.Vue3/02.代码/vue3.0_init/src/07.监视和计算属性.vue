<template>
  <div id="app">
    <!-- <h1>num:{{ num }}</h1>
    <h1>doubleNum:{{ doubleNum }}</h1>
    <h1>threeNum:{{ threeNum }}</h1> -->
    <h1>obj2.name:{{obj2.name}}</h1>
    <!-- <input type="text" v-model="threeNum" /> -->
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    // doubleNum(){
    //   return this.num *2;
    // },
    // threeNum:{
    //   get(){
    //     return this.num *3;
    //   },
    //   set(val){
    //     this.num = val;
    //   }
    // }
  },
  watch: {
    // num(newVal, oldVal) {
    //   console.log("watch numm", newVal, oldVal);
    // },
    // num: {
    //   immediate: true,
    //   handler(newVal, oldVal) {
    //     console.log("watch num", newVal, oldVal);
    //   },
    // },

    // "$route.query.key"
    
    // a() {
    //   console.log("watch numm");
    // },
    // b() {
    //   console.log("watch numm");
    // },
    // c() {
    //   console.log("watch numm");
    // },
  },
};
</script>

<script setup>
import { reactive, ref, computed, watch, watchEffect } from "vue";
// const num = ref(1);

const obj2 = reactive({
  name:"xiaoming"
});

// computed();
// const doubleNum = computed(() => {
//   return num.value * 2;
// });

// const threeNum = computed({
//   get() {
//     return num.value * 3;
//   },
//   set(val) {
//     num.value = val;
//   },
// });

// watch(num, (newVal, oldVal) => {
//   console.log("watch num", newVal, oldVal);
// });

// watch(
//   num,
//   (newVal, oldVal) => {
//     console.log("watch num", newVal, oldVal);
//   },
//   { 
//     immediate: true ,
//     deep:true
//   }
// );

// 对应着以前监视某个对象中的某个属性的操作,例如:"$route.query.key"
// watch(
//   ()=>obj2.name,
//   (newVal, oldVal) => {
//     console.log("watch num", newVal, oldVal);
//   }
// );


// watch(
//   [a,b,c],
//   (newVal, oldVal) => {
//     console.log("watch num", newVal, oldVal);
//   }
// );

setTimeout(() => {
  obj2.name = "xiaohuang";
  // console.log(111,obj2.name)
}, 2000);

watchEffect(()=>{
  // 只要在该回调函数中,使用上的响应式数据,都会自动监视,无论多少个
  console.log('watchEffect',obj2.name)
})
</script>

<style></style>
