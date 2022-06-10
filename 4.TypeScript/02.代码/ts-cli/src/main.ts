let b: boolean = true;
b = false;

// b = 123;

let num: number = 123;
num=8;
// num="aaa";

let str: string = "abc";
// str=1;

let un:undefined = undefined;

let nu:null = null;

un=null;

nu=undefined;

/*null和undefined在非严格模式下,他们属于所有类型的子类型 */
str = null;
str = undefined;

let arr: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]

arr.push(2);
// arr.push("2");

// 元组就是约定了长度和类型的数组
let arr3: [number,boolean,string] = [1,true,"abc"]
// arr3[0]=true;
// arr3[4]=false;

let obj: object = {
    name:"123",
    age:23
}
// obj = 2;

let data: any = 1;
data="str"
data=true

// let vo:void =1;

function fn(data):void {
    console.log(data)
}
// fn()

// console.log(b);

enum City{
    "北京"="bj",
    "上海"="sh",
    "深圳"="sz"
}

console.log(City);

let obj1 = {
    name:"xiaoming",
    city:City["上海"]
}
// City["武汉"]
console.log(obj1);


// 联合类型
let data2:number|string =123;
data2="str";
// data2=true;

// 类型断言
// 需求:现在该函数接收一个数据,如果是字符串就打印他的length属性,如果是数字就输出该数字
function getType(value:number|string){
    if((value as string).length){
        // 能进入这里就说明当前是字符串
        return (<string>value).length;
    }else{
        // 能进入这里就说明当前是数字
        return value;
    }
}

getType(1);
getType("abc");
// getType(true);

// 类型推断
// let data3 = 123;
let data3;
data3 = 123;
data3 = true;