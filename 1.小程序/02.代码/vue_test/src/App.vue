<template>
  <div id="app">
    <!-- <h1>{{msg}}</h1> -->
    <button v-if="isShow" @click="changeShow">添加</button>
    <input ref="input666" type="text" v-else>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      // msg:1
      isShow:true
    }
  },
  mounted(){
    // this.msg=2;
    // console.log(this.msg)
    // debugger
  },
  methods:{
    changeShow(){
      this.isShow=!this.isShow;

      this.$nextTick(()=>{
        this.$refs.input666.focus();
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
