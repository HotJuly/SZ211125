function filterAsyncRoutes(asyncRoutes,routeNames){
    // 该方法用于过滤现有的异步路由,得到一个全新的数组,
    // 该数组中只有当前账号可以访问的异步路由

    const newAsyncRoutes = asyncRoutes.filter((routeObj)=>{

        // if(routeObj.children&&routeObj.children.length)
        if(routeObj.children?.length){
            routeObj.children = filterAsyncRoutes(routeObj.children,routeNames);
        }

        return routeNames.includes(routeObj.name);
    });

    return newAsyncRoutes;
}

export default filterAsyncRoutes