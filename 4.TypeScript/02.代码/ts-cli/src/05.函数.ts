(function(){
    // function fn1(a:string,b:string):string{
    //     return a + b;
    // }

    // let fn2 = function(a:string,b:string):string{
    //     return a + b;
    // }

    // let fn3:(a:string,b:string)=>string
    // = 
    // function(a:string,b:string):string{
    //     return a + b;
    // }

    
    function fn1(a:string,b:string = "2",c?:string,...arg:number[]):string{
        return a + b;
    }

    fn1("1","2","3")
    fn1("1")
    fn1("1","2","3",4,5,6,7,8)

    // 需求:现在具有一个函数,该函数具有两个形参,实参可以是string或者number
    // 如果两个实参都是string类型,就拼接他们的结果
    // 如果两个实参都是number类型,就相乘他们的结果
    // 最终返回这个结果

    // 函数重载

    function fn4(val1:number,val2:number):number
    function fn4(val1:string,val2:string):string
    function fn4(val1:number|string,val2:number|string):number|string{
        if(typeof val1 === "string" && typeof val2 === "string"){
            return val1+val2;
        }else if(typeof val1 === "number" && typeof val2 === "number"){
            return val1*val2;
        }
    }

    fn4(2,4)
    fn4("a","c")
    // fn4(1,"c")

})();