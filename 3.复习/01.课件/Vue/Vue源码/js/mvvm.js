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
        流程:
            1.会使用Object.keys方法获取到data对象身上所有的直系属性名组成的数组
            2.遍历该数组,得到每一个属性名
            3.将每个属性名都代理到vm对象身上,给vm对象添加相同的属性
            4.使用Object.defineProperty来添加属性,可以让该属性拥有get和set方法
                当开发者读取当前属性时候,会触发get函数,执行内部代码,
                    最终读取的结果是根据函数的返回值决定的

                当开发者设置/修改当前属性时,会触发set函数,执行内部代码,
                    最终会将修改的值直接修改$data对象身上的对应属性

        小总结:他其实并不是响应式原理中不可获取的一部分
    */
    // ["msg","person"].forEach(function(key) {
    //     vm._proxy("msg");
    // });

    /* 
        需求:当一个属性的值发生变化时,需要将最新的结果渲染到页面上
        拆解:
            1.如何知道属性值的变化?
                可以通过Object.defineProperty方法重写属性,使其变为get和set方法
                    通过这两个方法就可以知道该属性的读取和修改

            2.如何将最新的结果渲染到页面上?
                通过原生DOM的CRUD方法,对对应的标签的内容进行更新即可
    */

    /*
        MVVM源码第二部分:数据劫持
        劫持:控制某个对象,逼迫其做不想做的事情
        目的:监视开发者对某些属性的修改或者读取操作,如果出现修改操作,就会及时通知视图更新
        次数:4次(与data对象中拥有多少个属性名有关,具有递归效果)
        流程:
            1.调用observe函数,开始进行劫持操作
                该函数内部会判断当前传入的数据是否是对象数据类型
                    如果不是就直接返回
                    如果是就new Observer函数,创建ob对象
            2.Observer函数中,在创建ob对象的时候,会执行walk函数,遍历data对象中所有的直系属性名
            3.对每个属性名执行defineReactive函数,该函数会进行数据劫持
                -创建一个全新的dep对象
                    也就是说data中每具有一个属性就会创建出一个对应的dep对象

                -将当前属性值传入observe函数,如果属性值还是个对象,开始递归遍历,深度劫持该对象,回到流程1
                    如果不是对象数据类型,则没事
                -使用Object.defineProperty重写data对象上所有的属性
                    -将原先是value值的属性描述符变为具有get/set方法的访问描述符
                    -如果开发者读取该属性值,就会触发get方法,执行内部的代码
                        直接返回原值(此时已经没有value值了,但是Vue通过闭包保存了原先的value值)
                    -如果开发者修改该属性值,就会触发set方法,执行内部的代码
                        -判断新值与旧值是否相同
                            如果不相同就继续执行后续代码
                            如果相同就直接返回,也就是说更新十次属性,如果属性值都相同,只会触发一次页面更新
                        -判断新值的数据类型是否为对象
                            如果是对象,就会对该对象进行深度数据劫持,将内部所有的属性都变为响应式属性
                        -调用dep.notify方法,通知视图进行更新

    
    */
    observe(data, this);
    // observe(vm._data, vm);
    

    /*
        MVVM源码第三部分:模版解析
        
    
    */
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