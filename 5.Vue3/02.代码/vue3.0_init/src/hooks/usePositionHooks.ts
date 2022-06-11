
import { ref, onMounted, onBeforeUnmount } from "vue";
export default function(){
    
    const pageX = ref(0);
    const pageY = ref(0);

    const fn = (event:any) => {
    const { clientX, clientY } = event;
    // console.log('mousemove',clientX,clientY);

    pageX.value = clientX;
    pageY.value = clientY;
    };

    onMounted(() => {
        document.addEventListener("mousemove",fn);
    });

    onBeforeUnmount(() => {
        document.removeEventListener("mousemove", fn);
    });

    return {
        pageX,
        pageY
    }
}