export default {
    data(){
        return{
            isLoading:true
        }
    },
    mounted() {
        setTimeout(()=>{
          this.isLoading=false;
        },2000)
    },
}