<template>
  <div id="app">
    <h1>obj1.name:{{obj.name}}</h1>
    <h1>obj1.age:{{obj.age}}</h1>
    <h1>obj1.wife:{{obj.wife}}</h1>
    <h1>obj2.name:{{obj2.name}}</h1>
    <h1>obj2.age:{{obj2.age}}</h1>
    <h1>obj2.wife:{{obj2.wife}}</h1>
    <button @click="changeName">改名</button>
    <button @click="addAge">过了一年</button>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup(){

    /*
      reactive函数
        它用于将一个普通对象变成响应式对象
        返回值:Proxy对象

        在创建Proxy对象的过程中,你需要将一个被代理对象(又称为元对象)交给reactive函数处理,
        最终,reactive函数会返回一个Proxy对象

        注意点:
          1.在template中使用Proxy对象,Vue3发现是一个Proxy对象之后,会直接读取他元对象的相关属性进行展示
          2.千万不要去直接操作元对象,因为操作他没有响应式效果
          3.在操作Porxy对象的时候,Proxy对象也会同步操作元对象,操作Proxy对象才会有响应式的效果
          4.如果将一个层级较深的对象传递给reactive函数,那么该对象会产生一个Proxy对象,内侧所有的对象也会产生对应的Proxy对象
            具有深度监视效果
    */

    const obj = {
      name:"xiaoming",
      age:23,
      wife:{
        name:"xiaohong",
        age:18
      }
    }

    const obj2 = reactive(obj);


    console.log(obj2,obj2.wife)

    const changeName = ()=>{
      obj2.name = "wang" + obj2.name;
      // console.log(obj.name)
    }

    const addAge = ()=>{
      obj2.wife.age += 1;
      // console.log(obj.name)
    }

    return {
      obj,
      obj2,
      changeName,
      addAge
    }
  }
}
</script>
<style>
</style>
