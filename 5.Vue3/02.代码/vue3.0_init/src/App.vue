<template>
  <div id="app">
    <h1>pageX:{{ pageX }}</h1>
    <h1>pageY:{{ pageY }}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import usePositionHooks from '@/hooks/usePositionHooks'
// import { ref, onMounted, onBeforeUnmount } from "vue";
/*
  需求:当用户的鼠标在页面上移动的时候,获取到用户的鼠标坐标,并显示在页面上
  拆解:
    1.当用户的鼠标在页面上移动的时候
      事件源:document
      事件名:mousemove

    2.获取到用户的鼠标坐标
      通过event事件对象可以获取到用户当前的鼠标信息

    3.显示在页面上
      创建响应式数据,并将获取到的鼠标坐标更新进入,实现动态展示

*/

// const pageX = ref(0);
// const pageY = ref(0);

// const fn = (event) => {
//   const { clientX, clientY } = event;
//   // console.log('mousemove',clientX,clientY);

//   pageX.value = clientX;
//   pageY.value = clientY;
// };

// onMounted(() => {
//   document.addEventListener("mousemove",fn);
// });

// onBeforeUnmount(() => {
//   document.removeEventListener("mousemove", fn);
// });

const {pageX,pageY} = usePositionHooks();
</script>

<style></style>
