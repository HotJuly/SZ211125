<template>
  <div class="hello">
    B
    <slot name="default"></slot>
    <slot name="header"></slot>
    <slot name="footer" :msg="msg"></slot>
  </div>
</template>

<script>
export default {
  name: "B",
  data(){
    return{
        msg:"我是Footer"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
