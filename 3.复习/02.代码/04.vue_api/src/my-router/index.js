import Vue from 'vue';
import install from './install';

function deepMapRoutes(routes){
    routes.forEach((routeObj)=>{
        const {path,component,children} = routeObj;
        this[path] = component;

        if(children instanceof Array && children.length){
            deepMapRoutes.call(this,children)
        }
    })
}

class MyRouter{
    constructor(options){
        /*
            options:
                {
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
                            component:About,
                            children:[
                                {
                                    path:"/about/xixi",
                                    component:Xixi,
                                }
                            ]
                        }
                    ]
                }
        
        */

        this.options = options;

        this.history = window.history;

        // let path = "/home"
        /*
            将routes数组,转换为routes对象
            [
                {
                    path:"/home",
                    component:Home
                },
                {
                    path:"/about",
                    component:About
                }
            ]
            变为:
            {
                "/home":Home,
                "/about":About
            }

        */

        this.routes = this.options.routes;
        this.mapRoutes = {};

        deepMapRoutes.call(this.mapRoutes,this.routes);

        // console.log(this.mapRoutes)

        Vue.prototype.$router = this;

        Vue.prototype.$route = Vue.observable({
            fullpath:window.location.pathname
        });

    }

    push(path){
        // console.log('push')
        // 这行代码可以控制浏览器的历史记录栈变化
        this.history.pushState({},"",path);

        Vue.prototype.$route.fullpath = path;
    }
}

// new MyRouter({
//     mode:"history",
//     routes:[
//         {
//             path:"/home",
//             component:"Home",
//         },
//         {
//             path:"/about",
//             component:"About"
//         }
//     ]
// })

MyRouter.install = install;

export default MyRouter