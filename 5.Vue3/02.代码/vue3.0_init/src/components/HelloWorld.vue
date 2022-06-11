<template>
  <div @click="clickHandler">hello</div>
  <h2>{{msg123}}</h2>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg123: String,
  },
  setup(props,{emit}){
    // console.log(props,emit);

    const clickHandler = ()=>{
      emit("update:msg123","我是子组件的数据")
    }

    return{
      clickHandler
    }
  }
};
</script>


<style scoped>
</style>
