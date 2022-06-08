import Vue from 'vue';
// import VueRouter from 'vue-router';
import MyRouter from '../my-router/index';

import Home from '@/components/Home';
import About from '@/components/About';

Vue.use(MyRouter);

export default new MyRouter({
    mode:"history",
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{
                isShow:true
            }
        },
        {
            path:"/about",
            component:About
        }
    ]
})