<template>
  <div class="hello">
    <h2 v-once>{{msg}}</h2>
    <button @click="clickHandler">修改父组件数据</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:["msg"],
  methods:{
    clickHandler(){
      this.$emit('update:msg','我是子组件传递的数据')
    }
  },
  mounted(){
    // console.log('HelloWorld mounted');
    // setTimeout(()=>{
    //   this.$bus.$emit('sendMsg',123)
    // },1000)

    // this.$destroy();
    // this.clickHandler();
    // console.log('HelloWorld mounted');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
