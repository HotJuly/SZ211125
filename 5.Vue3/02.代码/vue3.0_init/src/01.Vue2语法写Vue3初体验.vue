<template>
  <div id="app">
    <h1>{{num}}</h1>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      num:0
    }
  },
  methods:{
    add(){
      this.num+=1;
    }
  },
  watch:{
    num(newVal){
      console.log('num update',newVal)
    }
  }
}
</script>
<style>
</style>
