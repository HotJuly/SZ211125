<template>
  <div id="app">
    <h1>obj2.name:{{obj2.name}}</h1>
    <h1>obj2.age:{{obj2.age}}</h1>
    <!-- <h1>obj3.name:{{obj3.name}}</h1>
    <h1>obj3.age:{{obj3.age}}</h1> -->
    <button @click="changeName">changeName</button>
  </div>
</template>

<script lang="ts">
  export default {
    name:"App"
  }
</script>


<script lang="ts" setup>
  import {ref,reactive} from 'vue';

  /*
    ref和reactive的区别
      相同点:
        1.都可以传入一个对象
          ref返回的一定是Ref对象
            如果ref遇到了对象格式,其实还是会交给reactive处理的

          reactive返回的一定是Proxy对象

        2.在template中的使用语法完全相同

      不同点:
        1.在js代码中使用,语法不通(差了一层.value)
          ref返回的对象必须要.value才能得到结果,在通过该结果找到对应属性使用
          而reactive返回的对象,可以直接找到对应属性使用

      总结:
        如果现在有一个对象,如果未来只改变它内部的属性,
          就可以使用reactive或者ref,更推荐reactive,因为语法简单
          
        如果现在又一个对象,如果未来可能会更换一个全新的对象,
          就需要使用ref,因为ref的value属性是响应式属性,
            可以对其重新赋值,新赋值的对象也会具有响应式效果
  
  */
  const obj = {
    name:"xiaoming",
    age:29
  }

  const obj2 = ref(obj);
  let obj3 = reactive(obj);
    
  // console.log(obj2,obj3)

  const changeName = ()=>{
    // obj2.value.name="xiaolv"
    // obj3.name = "xiaohuang"

    // 此处没有修改代理对象,只是将obj3变量中的结果换了一个全新的对象
    // 如果不操作代理对象就没有响应式效果
    // obj3 = {
    //   name:"xiaolan",
    //   age:30
    // }

    obj2.value =  {
      name:"xiaolan",
      age:30
    }

    // console.log(obj,obj3);
    
  }
</script>

<style>
</style>
