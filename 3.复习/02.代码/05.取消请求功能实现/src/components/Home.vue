<template>
  <div id="Home">
    Home
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'Home',
  mounted(){
    this.$API.getData1()
    .then((data)=>{
      console.log('Home-getData1',data)
    });

    this.$API.getData2()
    .then((data)=>{
      console.log('Home-getData2',data)
    });

    this.$API.getData3()
    .then((data)=>{
      console.log('Home-getData3',data)
    });

    this.$API.getData4()
    .then((data)=>{
      console.log('Home-getData4',data)
    })
    .catch((error)=>{
      if(axios.isCancel(error)){
        return Promise.resolve();
      }
    })
  }
}
</script>

<style>
</style>
