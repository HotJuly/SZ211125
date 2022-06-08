import Vue from 'vue';
export default {
    name:"RouterLink",
    functional:true,
    props:{
        to:{
            type:String,
            require:true
        },
        tag:{
            type:String,
            default:"a"
        }
    },
    render(createElement,{props,data,children}){

        // console.log(props)

        data.on={
            click(event){
                event.preventDefault();
                Vue.prototype.$router.push(props.to);
            }
        }

        data.attrs.href = props.to;

        return createElement(props.tag,data,children);
    }
}