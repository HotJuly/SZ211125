<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-if="isShow" @click="changeShow">添加</button>
    <input v-else ref="input666" type="text">
    <!-- <el-button>123</el-button> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  a:3,
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    changeShow(){
      /*
        问题:Vue更新数据是同步还是异步?
        答案:同步更新

        问题2:Vue更新视图是同步还是异步?
        答案:异步更新
      */

      this.isShow=false;
      // console.log(this.isShow)
      // debugger

      // setTimeout(()=>{
      //   console.log(2);
      // },0)
      // nextTick的用处,就是将某一个函数等到DOM更新之后才执行
      // nextTick可以开启微任务
      this.$nextTick(()=>{
        console.log(1)
        this.$refs.input666.focus();
      })

    }
  },
  mounted() {
    // console.log(a);

    // this.isShow=false;

    // Promise.resolve().then(()=>{
    //   console.log(1);
    // })

    // this.$nextTick(()=>{
    //   console.log(2);
    // })

    // Promise.resolve().then(()=>{
    //   console.log(3);
    // })

    // this.$nextTick(()=>{
    //   console.log(4);
    // })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
