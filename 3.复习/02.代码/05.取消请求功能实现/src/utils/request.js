import axios from 'axios';
import store from '../store';

const request = axios.create({
    baseURL:"/api",
    timeout:20000
})

const CancelToken = axios.CancelToken;
request.interceptors.request.use((config)=>{

    let cb;
    // 记录哪些请求发送出去了
    config.cancelToken = new CancelToken((callback)=>{
        // 这里的cb是个函数,调用该函数,就会取消对应的请求
        cb = callback;
    })
    // console.log(config);

    store.commit('ADD_CB_MUTATION',{
        url:config.url,
        cb
    });
    return config
})

request.interceptors.response.use((response)=>{
    // console.log(response.config.url);

    store.commit('REMOVE_CB_MUTATION',response.config.url);
    return response.data;
})

export default request