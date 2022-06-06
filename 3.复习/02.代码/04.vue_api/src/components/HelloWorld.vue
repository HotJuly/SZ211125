<template>
  <div class="hello">
    <h1>{{nameCom}}</h1>
    <h1>{{nameCom}}</h1>
    <h1>{{nameCom}}</h1>
    <h1>{{nameCom}}</h1>
    <h1>{{nameCom}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld1',
  props: {
    msg: String,
    fn:Function
  },
  data(){
    return{
      isShow:true,
      obj:{
        name:"xiaoming"
      }
    }
  },
  computed:{
    nameCom(){
      console.log(1)
      return this.obj.name + "xixi";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
