<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" :fn="changeMsg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  a:2,
  mounted() {
    // console.log('App',this);
  },
  methods:{
    changeMsg(val){
      console.log(this,val)
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
