<template>
  <div id="app">
    <!-- <h1 ref="h1" @click="changeComponent">{{msg}}</h1> -->
    <!-- <HelloWorld :msg.sync="msg"/> -->
    <!-- <HelloWorld :msg="msg" @update:msg="(data)=>msg=data"/> -->
    <!-- <component :is="showComponent"></component> -->
    <!-- <keep-alive  max="1">
      <A v-if="isShow"/>
      <B v-else/>
    </keep-alive>

    <button @click="clickHandle">切换</button> -->

    <!-- <B>
      <template>
        <h1>大家好,我是默认插槽</h1>
      </template>
      <template v-slot:header>
        <h2>大家好,我是具名插槽</h2>
      </template>
      <template #footer="{msg}">
        <h2>{{msg}},我是作用域插槽</h2>
      </template>
    </B> -->

  <HelloRefsVue v-bind="$data">
    <template #content="{listeners}">
    <!-- <template #content="scope"> -->
      <h1  v-on="listeners">点我放大</h1>
      <!-- <h1 @click="clickMe">点我放大</h1> -->
    </template>
  </HelloRefsVue>

  <ul>
    <li v-for="item in arr" :key="item">{{item}}</li>
  </ul>
  <button @click="changeArr">修改数据</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import A from './components/A.vue'
// import B from './components/B.vue'
import HelloRefsVue from './components/HelloRefs.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // A,
    // B
    HelloRefsVue
  },
  data(){
    return{
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      arr:[1,2,3,4,5]
    }
  },
  mounted(){
    // console.log('APP mounted');
    this.$bus.$on('sendMsg',(data)=>{
      console.log('APP',data);
    })
  },
  methods:{
    changeComponent(){
      this.showComponent = HelloWorld;
    },
    clickHandle(){
      this.isShow=!this.isShow;
    },
    changeArr(){
      // this.arr[1]=3;
      this.arr.splice(1,1,3);
      console.log(this.arr)
    }
  }
}
</script>

<style></style>
