<template>
  <!-- <div class="hello" v-loading="isLoading"> -->
  <div class="hello">
    <!-- <h1>{{obj.name | timeFilter}}</h1> -->
    <h1>{{obj.name}}</h1>
    <button v-if="isShow" @click="changeShow">添加</button>
    <input v-else ref="input666" type="text">
    <!-- <el-button>123</el-button> -->
  </div>
</template>

<script>
// import loadMixins from '@/mixins/loadMixins';
export default {
  name: 'HelloWorld1',
  props: {
    msg: String,
    fn:Function
  },
  // props:["msg"],
  a:3,
  // mixins:[loadMixins],
  data(){
    return{
      isShow:true,
      obj:{
        name:"xiaoming"
      }
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

      // this.isShow=false;
      // console.log(this.isShow)
      // debugger

      // setTimeout(()=>{
      //   console.log(2);
      // },0)
      // nextTick的用处,就是将某一个函数等到DOM更新之后才执行
      // nextTick可以开启微任务
      // this.$nextTick(()=>{
      //   // console.log(1)
      //   this.$refs.input666.focus();
      // })

    }
  },
  // filters:{
  //   timeFilter(val){
  //     console.log(this)
  //     return val+"haha"
  //   }
  // },
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

    /*
      Vue更新视图的范围
        最少更新一个组件
    
    */
  //  this.$set(this.obj,"name",123)
    // this.obj.name = 123;


// 如果对响应式属性的值进行更新,如果属性值又是对象,那么该对象中的所有属性都会变为响应式属性
    // this.obj = {
    //   name:123
    // }
    // console.log(this.obj)
    // this.isShow = false;

    // this.obj.name = 123;
    // this.isShow = false;

    // setTimeout(()=>{

    //   // 问题:delete关键字和$delete方法的区别
    //   // 回答:$delete除了具有delete关键字的效果,同时还会强制页面更新一次
    //   //    无论是不是响应式属性,都会更新一次页面
    //   this.$delete(this.obj,"name");
    // //   // delete this.obj.name
    //   console.log(this.obj);
    // },2000)

    // console.log(this.$options.name)

    // this.fn(123)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
