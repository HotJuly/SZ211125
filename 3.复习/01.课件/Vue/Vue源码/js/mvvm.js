function MVVM(options) {
    /*
        options=>{
                    el: "#app",
                    data: {
                        msg: "hello mvvm",
                        person:{
                            name:"xiaoming",
                            msg:"123"
                    },
                }
        this->vm对象
      }
    
    */

    this.$options = options;

    var data = this._data = this.$options.data;
    // var data = (this._data = this.$options.data);
    // var data = (this.$options.data);

    var me = this; 

    
    Object.keys(data).forEach(function(key) {
        me._proxy(key);
    });

    /*
        MVVM源码第一部分:数据代理
        代理:意思就是说代理本身并没有数据,但是他会找其他人获取数据,进行返回使用
        目的:方便读取data中的数据,可以直接在this身上直接获取数据,不需要找$data对象获取
        次数:2次(只代理data中的直系属性)

        小总结:其实他不算是响应式原理的一部分,有他没他都可以
    */
    // ["msg","person"].forEach(function(key) {
    //     vm._proxy("msg");
    // });

    
    observe(data, this);
    
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    _proxy: function(key) {
        // key->"msg" this->vm对象
        var me = this;

        Object.defineProperty(me, key, {
            configurable: false, //不能重复定义
            enumerable: true, //可以遍历
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });

        // 此处在给vm对象新增属性msg
        // 属性一共分为两种,一种叫做属性描述符,一种叫做访问描述符
        // 属性描述符就是说当前这个属性具有value值
        // 访问描述符就是说当前这个属性不具有value值,只具有set/get方法
        // value值和get/set方法不会共存
        // 如果修改访问描述符的属性值,就会触发set方法,如果是读取访问描述符的属性值,就会触发get方法

        // Object.defineProperty(vm, "msg", {
        //     configurable: false, //不能重复定义
        //     enumerable: true, //可以遍历
        //     get: function proxyGetter() {
        //         return vm._data["msg"];
        //     },
        //     set: function proxySetter(newVal) {
        //         vm._data["msg"] = newVal;
        //     }
        // });

    }
};