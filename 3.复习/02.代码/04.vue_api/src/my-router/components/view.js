import Vue from 'vue';
export default {
    name:"RouterView",
    functional:true,
    render(createElement){
        /*
            需求:根据当前路由路径,显示对应的路由组件
            拆解:
                1.如何获取到当前的路由路径
                2.如何找到对应的路由组件
        */

            // 获取到路由路径
            const path = Vue.prototype.$route.fullpath;

            //获取到当前记录了所有路由信息的对象
            const mapRoutes = Vue.prototype.$router.mapRoutes;

            // 找到对应的路由组件
            const component = mapRoutes[path];

            return createElement(component);
    }
}