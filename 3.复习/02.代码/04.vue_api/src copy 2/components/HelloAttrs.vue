<template>
  <div class="attrs">
  
    <el-popconfirm
      confirm-button-text='确定'
      cancel-button-text='取消'
      icon="el-icon-info"
      icon-color="red"
      :title="title"
    >
      <el-button v-bind="$attrs" v-on="$listeners" slot="reference">删除</el-button>
      <!-- <el-button :type="type" :size="size" @click2="clickHandler2" @click="clickHandler" slot="reference">删除</el-button> -->
    </el-popconfirm>
  </div>
</template>

<script>
export default {
  name: 'HelloAttrs',
    data() {
      return {
      }
    },
    props:["title"],
    methods:{
    },
    mounted(){
      console.log(this.$listeners)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
