/*
    定时器的延迟时间,最小值是1
        即便写的0,默认值也会变为1


*/

const fs = require('fs');

setTimeout(()=>{
    console.log('1');
},0)

fs.readFile('./01.原型扩展(1).html',()=>{
    console.log('2')

    setTimeout(()=>{
        console.log('3');
    },0)

    setImmediate(()=>{
        console.log('4');
    })
})

setImmediate(()=>{
    console.log('5');
})

// 避免主线程代码执行速度过快,小于1ms,导致定时器不能成功触发
for (let index = 0; index < 100000; index++) {
    
}