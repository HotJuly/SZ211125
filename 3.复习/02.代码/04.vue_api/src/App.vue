<template>
  <div id="app">
    App
    <router-view/>
    <router-link to="/about">toAbout</router-link>
    <!-- <router-link to="/home">toHome</router-link> -->
    <button @click="toHome">toHome</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
    }
  },
  methods:{
    toHome(){
      this.$router.push('/home')
    }
  }
}
</script>

<style></style>
