<template>
  <div class="refs">
    <el-image 
        style="width: 100px; height: 100px"
        ref="image666"
        v-show="false"
        :src="url" 
        :preview-src-list="srcList">
    </el-image>
    <!-- <button @click="clickMe">点我放大</button> -->
    <slot name="content" :listeners="{click:clickMe}"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloRefs',
    data() {
      return {
      }
    },
    props:["url","srcList"],
    methods:{
        clickMe(){
            // console.log('clickMe')
            this.$refs.image666.clickHandler();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
