<template>
  <div class="hello">
    A
    <!-- <button @click="ok=!ok">切换显示</button>
    <transition name="fade">
      <div v-if="ok" class="ok">toggled content</div>
    </transition> -->
  </div>
</template>

<script>
export default {
  name: "A",
  data(){
    return{
      ok:true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  opacity: 1;
}

.ok{
  transition:4s opacity ;
}

</style>
