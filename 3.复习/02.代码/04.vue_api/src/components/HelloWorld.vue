<template>
  <div class="hello">
    <!-- <input type="text" v-model="num"> -->
    <!-- <input type="text" :value="num" @input="changeNum"> -->
    <input type="text" :value="msg123" @input="changeMsg">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld1',
  props:["value","msg123"],
  data(){
    return{
      num:7
    }
  },
  model:{
    prop:"msg123",
    event:"input9999"
  },
  methods:{
    changeNum(event){
      // console.log(event);

      // 获取当前input框最新值
      // console.log(event.target.value);
      this.num = event.target.value
    },
    changeMsg(event){
      // this.value = event.target.value;
      this.$emit('input9999',event.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
