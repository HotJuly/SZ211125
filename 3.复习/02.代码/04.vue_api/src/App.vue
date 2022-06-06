<template>
  <div id="app">
    <h1 ref="h1">{{msg}}</h1>
    <!-- <HelloWorld ref="hello" v-model="msg" a="1" b="2" c="3"/> -->
    <!-- <HelloWorld :value="msg" @input="changeMsg123"/> -->

    <!-- <HelloRefs/> -->
    <HelloAttrsVue size="small" type="danger" title="确定删除吗?"/>
    <HelloAttrsVue size="big" type="primary" title="确定新增吗?" @click="clickHandler"/>
  </div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HelloRefs from './components/HelloRefs.vue'
import HelloAttrsVue from './components/HelloAttrs.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloRefs,
    HelloAttrsVue
  },
  provide:{
    data:Vue.observable({
      msg:"我是祖先组件的数据"
    })
  },
  mounted(){
    // console.log('mounted',this);
    // setTimeout(()=>{
    //   this._provided.data.msg="666";
    // },3000)

    // console.log(this.$children[0].num)
    // console.log(this.$refs.h1,this.$refs.hello);
  },
  data(){
    return{
      msg:"我是父组件的数据"
    }
  },
  methods:{
    changeMsg123(val){
      this.msg = val
    },
    clickHandler(){
      console.log('clickHandler')
    }
  }
}
</script>

<style></style>
