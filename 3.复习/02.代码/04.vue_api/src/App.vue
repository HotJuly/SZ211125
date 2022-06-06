<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <HelloWorld v-model="msg"/>
    <!-- <HelloWorld :value="msg" @input="changeMsg123"/> -->
  </div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  provide:{
    data:Vue.observable({
      msg:"我是祖先组件的数据"
    })
  },
  mounted(){
    // console.log('mounted',this);
    setTimeout(()=>{
      this._provided.data.msg="666";
    },3000)
  },
  data(){
    return{
      msg:"我是父组件的数据"
    }
  },
  methods:{
    changeMsg123(val){
      this.msg = val
    }
  }
}
</script>

<style></style>
