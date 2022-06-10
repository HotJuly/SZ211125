(function(){
    // let num=123;

    // let obj:object = {

    // }

    // 对象接口
    // interface IPerson{
    //     name:string;
    //     age:number;
    //     sex:string;
    // }

    // let obj:IPerson = {
    //     name:"xiaoming",
    //     age:23
    // }

    // interface IPerson{
    //     readonly name:string;
    //     age:number;
    //     sex?:string;
    // }

    // interface IPerson2{
    //     price:number;
    // }

    // let obj:IPerson&IPerson2 = {
    //     name:"xiaoming",
    //     age:23,
    //     price:10000
    // }
    // obj.sex="位置";
    // // obj.name="laowang";

    // console.log(obj);

    /*
        const和readonly的区别
            不同点:
                const用于定义常量
                readonly用来约束对象的属性
            相同点:
                他们的属性值都不能修改
                他们都是浅监听,如果内部的数据是对象,
                他们只负责监视该对象的地址值,内部的属性变化不归他们管
    */

    // const obj = {};
    // obj.name=123;
    

    // interface IFn{
    //     (x:number,y:string):string
    // }

    // let fn:IFn = function(a:number,b:string):string{
    //     console.log(a,b)
    //     return a + b;
    // }

    // interface IPerson{
    //     name:string;
    //     say:(a:string)=>string
    // }

    // interface IPerson2{
    //     eat:(food:string)=>void
    // }

    // class Person implements IPerson,IPerson2{
    //     name:string;

    //     constructor(name:string){
    //         this.name = name;
    //     }

    //     say(data:string){
    //         console.log(data);
    //         return data;
    //     }

    //     eat(food:string){
    //         console.log(food);
    //     }
    // }

    // const p1 = new Person('xiaoming');
    // p1.say("大家好");



    interface IPerson2{
        price:number;
    }

    interface IPerson extends IPerson2{
        readonly name:string;
        age:number;
        sex?:string;
    }

    let obj:IPerson ={
        name:"xiaoming",
        age:23,
        sex:"男",
        price:100000000
    }

})();