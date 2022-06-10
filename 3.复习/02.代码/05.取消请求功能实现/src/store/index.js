import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        // 该对象用于记录还没返回响应的请求
        fns:{}
    },
    mutations:{
        ADD_CB_MUTATION(state,{url,cb}){
            // console.log('ADD_CB_MUTATION')
            state.fns[url] = cb;
        },
        REMOVE_CB_MUTATION(state,url){
            delete state.fns[url];
        },
        CLEAR_FNS_MUTATION(state){
            Object.values(state.fns).forEach((cb)=>{
                cb();
            })
        }
    }
})