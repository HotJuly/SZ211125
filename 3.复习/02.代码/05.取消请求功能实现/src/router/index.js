import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/home",
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/",
            redirect:"/home"
        }
    ]
});

router.beforeEach((to,from,next)=>{
    store.commit('CLEAR_FNS_MUTATION');
    next();
})

export default router;