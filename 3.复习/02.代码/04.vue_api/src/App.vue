<template>
  <div id="app"  class="b">

    <HelloRefsVue v-bind="$data">
      <template #content="{listeners}">
      <!-- <template #content="scope"> -->
        <h1  v-on="listeners">点我放大</h1>
        <!-- <h1 @click="clickMe">点我放大</h1> -->
      </template>
    </HelloRefsVue>
  </div>
</template>

<script>
import HelloRefsVue from './components/HelloRefs.vue';

export default {
  name: 'App',
  components: {
    HelloRefsVue
  },
  data(){
    return{
      msg:"我是初始化数据"
    }
  },
  beforeCreate() {
    // console.log(this,this.$data,this.msg,this.$el);
    console.log(this.$options);
    console.log('----------beforeCreate-----------');
  },
  created() {
    // console.log(this,this.$data,this.msg,this.$el);
    console.log('----------created-----------');
  },
  beforeMount() {
    // console.log(this,this.$data,this.msg,this.$el);
    console.log(this.$vnode,this._vnode);
    console.log('----------beforeMount-----------');
  },
  mounted() {
    // console.log(this,this.$data,this.msg,this.$el);
    console.log(this.$vnode,this._vnode);
    console.log('----------mounted-----------');
  },
}
</script>

<style></style>
