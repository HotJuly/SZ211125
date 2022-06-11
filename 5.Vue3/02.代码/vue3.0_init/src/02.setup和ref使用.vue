<template>
  <div id="app">
    <h1>{{num}}</h1>
    <button @click="add">+1</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(){
    // console.log('setup',this);

    /*
      ref函数
        一般用于将基本数据类型的数据变为响应式数据
        返回值:Ref对象
        该对象中具有一个value属性,这个属性是一个响应式属性
          如果开发者操作该属性的值,就会导致页面重新渲染
        
        注意点:
          1.在写js代码的时候,如果想要使用Ref的值,必须.value才能读取和修改
          2.在写template的时候,如果想使用Ref的值,
            不需要.value.Vue3如果发现是一个Ref对象会自动读取他的value属性值
    
    
    */
    let num = ref(1);
    // console.log('num',num);

    const add = ()=>{
      // console.log(num)
      num.value += 1;
    }

    return {
      num,
      add
    }
  }
}
</script>
<style>
</style>
