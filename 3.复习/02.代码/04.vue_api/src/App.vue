<template>
  <div id="app">
    <h1 ref="h1">{{msg}}</h1>
    <HelloWorld :msg.sync="msg"/>
    <!-- <HelloWorld :msg="msg" @update:msg="(data)=>msg=data"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      msg:"我是父组件的data数据"
    }
  },
  mounted(){
    // console.log('APP mounted');
    this.$bus.$on('sendMsg',(data)=>{
      console.log('APP',data);
    })
  }
}
</script>

<style></style>
